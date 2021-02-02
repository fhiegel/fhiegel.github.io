---
title: 'HOWTO: Use of JaCoCo'
description: >
  Comment produire un rapport de couverture de code, sur une application Java multi-module,
  avec et sans, les tests d'intégration, à l'aide de JaCoCo.
date: "2019-04-04"

template: blog/post.html

draft: false
slug: "howto--use-of-jacoco"
category: "How To"
tags:
  - "JaCoCo"
  - "DevTools"
  - "Qualité"
---

Comment produire un rapport de couverture de code, sur une application Java multi-module,
avec et sans, les tests d'intégration, à l'aide de JaCoCo.

# JaCoCo sur un projet Maven multi-modules

[JaCoCo](https://www.jacoco.org/jacoco/) est un ensemble d'outils permettant d'instrumentaliser le code Java,
 et de collecter des métriques lors de l'exécution de ce code. 

## Avec les outils JaCoCo

### Récupérer les outils JaCoCo

Télécharger JaCoCo depuis le site officiel: [ici](https://www.jacoco.org/jacoco/index.html).

Décompresser les fichiers, et récupérer le chemin vers le dossier lib :

```shell
JACOCO_HOME=~/jacoco-0.8.x/lib/
```

Ce répertoire contient les jars, dont on se servira par la suite :

```shell
# Agent JaCoCo
JACOCO_AGENT=$JACOCO_HOME/jacocoagent.jar

# Command Line Interface 
JACOCO_CLI=$JACOCO_HOME/jacococli.jar
```

### Générer le fichier d'analyse 

L'utilisation de JaCoCo a pour objectif d'analyser le code.
Pour cela, JaCoCo va générer un fichier d'analyse : `jacoco.exec`.

Ce fichier, et son emplacement sont configurables:

```shell
JACOCO_EXEC_FILE=~/target/my-jacoco-execution-data.exec

# Par défaut:
JACOCO_EXEC_FILE=./jacoco.exec
```

#### Instrumentaliser le code à analyser 

L'agent Jacoco, `jacocoagent`, permet de collecter les données sur une JVM, et de les dumper lorsque la JVM s'éteint.
Pour ce faire, il faut démarrer la JVM avec l'option  appropriée :

```shell
# VM Options: add jacocoagent
-javaagent:$JACOCO_AGENT

# Windows exemple without env variables:
-javaagent:D:\\develop\\tools\\jacoco\\jacocoagent.jar

# Configuration pattern
-javaagent:[yourpath/]jacocoagent.jar=[option1]=[value1],[option2]=[value2]
```

Sous IntelliJ:

```shell
Run > Edit Configuration > [Select Configuration] > First Tab "Configuration" > VM Options
```

Avec cette configuration, JaCoCo génère un fichier d'analyse à l'emplacement par défaut, lorsque l'on éteint la JVM.
Cet emplacement peut être configuré de la manière suivante :

```shell
-javaagent:$JACOCO_AGENT=destfile=$JACOCO_EXEC_FILE

# Windows exemple without env variable:
-javaagent:D:\\develop\\tools\\jacoco\\jacocoagent.jar=destfile=$JACOCO_EXEC_FILE
```
    
#### Tests d'intégration

En testant une application en mode "Boite noire", on préférera mieux maîtriser la génération des données.
Pour cela, on configure le `jacocoagent` de la manière suivante :

```shell
-javaagent:$JACOCO_AGENT=output=tcpserver
```

Cela signifie que le rapport d'exécution sera écrit dans une socket, sur un couple `host:port` défini, 
`localhost:6300` par défaut. On peut configurer ce couple de la manière suivante :

```shell
-javaagent:$JACOCO_AGENT=output=tcpserver,address=10.2.10.2,port=8080
```

> **Attention:** la configuration `destfile=$JACOCO_EXEC_FILE` devient alors caduque.

A tout moment, et tant que la JVM tourne, on peut récupérer en local les données analysées par JaCoCo sur la JVM 
instrumentalisée. Avec les outils en ligne de commande :

```shell
java -jar $JACOCO_CLI \
    dump \
    --destfile $JACOCO_EXEC_FILE
```

Par défaut, le dump s'effectue sur `localhost:6300`, et génère un fichier `./jacoco.exec`.

**Synthèse:** Avec les étapes ci-dessus, on est en mesure de générer, via des instructions en ligne de commande,
un rapport d'analyse JaCoCo explopitable. Le fichier `$JACOCO_EXEC_FILE` peut être transmis à un Sonar, ou à tout
autre outil permettant de centraliser les analyse de code.

Utiliser les outils de ligne de commande de JaCoCo peut être pratique dans une pipeline industrialisée,
par exemple avec du Jenkin et du Docker.

### Générer un rapport compréhensible par un être humain

Avant d'industrialiser tout le processus sur Sonar, on voudra probablement analyser manuellement le fichier généré.
C'est possible via un rapport généré avec les outils en ligne de commande :

```shell
java -jar $JACOCO_CLI \
    report \
    --classfiles ./target/classes/
```

Cela n'est valable que pour un projet simple. JaCoCo a besoin du chemin vers les classes compilées,
pour lesquelles il va générer un rapport, et du chemin vers le le fichier d'analyse, `./jacoco.exec` par défaut.

En fait, c'est également possible pour un projet en multi-modules:

```shell
java -jar $JACOCO_CLI \
    report \ 
        ./first-module/jacoco.exec \
        ./second-module/jacoco.exec \
        ./third-module/jacoco.exec \
    --classfiles ./first-module/target/classes/ \
    --classfiles ./second-module/target/classes/ \
    --classfiles ./third-module/target/classes/
```       

JaCoCo sait utiliser plusieurs fichiers d'analyse, et parcourir plusieurs répertoires de classes compilées,
pour générer le rapport final.

D'ailleurs, on pourra vouloir lui définir l'emplacement où l'on génère le rapport:

```
java -jar $JACOCO_CLI \
    report \ 
        ./first-module/jacoco.exec \
        ./second-module/jacoco.exec \
        ./third-module/jacoco.exec \
    --classfiles ./first-module//target/classes/ \
    --classfiles ./second-module/target/classes/ \
    --classfiles ./third-module/target/classes/ \
    --html jacoco/report
```
     
Enjoy!

## Avec Maven        

### Utiliser le plugin JaCoCo

Dans le POM Maven, il faut rajouter le plugin JaCoCo

```xml
<properties>
    ...
    <!-- Go on JaCoCo website for the latest version: https://www.jacoco.org/jacoco/trunk/doc/maven.html -->
    <jacoco.version>0.8.4</jacoco.version>
    ...
</properties>
...
<plugins>
    ...
    <plugin>
        <groupId>org.jacoco</groupId>
        <artifactId>jacoco-maven-plugin</artifactId>
        <version>${jacoco.version}</version>
        <executions>
            <execution>
                <id>agent</id>
                <goals>
                    <goal>prepare-agent</goal>
                </goals>
            </execution>
            <execution>
                <id>generate-report</id>
                <goals>
                    <goal>report</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
    ...
</plugins>
```

Par défaut, JaCoCo collecte les données d'analyse d'exécution dans un fichier `target/jacoco.exec`.
Ce fichier est local à chaque projet Maven, et re-généré à chaque build.
`prepare-agent` est automatiquement utilisé à la phase Maven `initialize`.
Pour analyser le code, il suffit de jouer la commande:

```shell
mvn test
```

Par défaut, JaCoCo génère le rapport dans le dossier `target/jacoco`.
Ce rapport est automatiquement généré à la phase Maven `verify`.
Pour analyser le code, et générer le rapport, il suffit de jouer la commande:

```shell
mvn verify 
```

### Pour un projet en multi-modules

> *Sur mon projet multi-modules, Sonar me donne des résultats ne reflétant pas la réalité ! C'est nul Sonar !*
> <br> **Développeur lambda**

Si, dans certains cas, le rapport Sonar ne correspond pas à la réalité du code, c'est que Sonar n'a pas les
informations précises de ce qu'il doit analyser. 

La solution ci-dessous, permet de configurer correctement JaCoCo, pour qu'il génère un rapport complet à Sonar.
Elle consiste à :

* Générer le fichier `jacoco.exec` avec TOUTES les données consolidées de TOUS les modules à analyser.
* S'appuyer sur ce fichier pour générer un rapport consolidé, utilisant le classpath de tous les modules
* Dire à Sonar d'utiliser ce rapport consolidé pour effectuer son analyse

Le projet impacté, est un projet multi-module, dont les modules héritent d'un POM parent.
Les modifications sont à porter dans le POM parent, ainsi, tous les sous-modules en bénéficieront automatiquement.
Si votre projet utilise une structure différente, il faudra revoir les `properties` pour que les chemins
des fichiers générés et utilisés, restent cohérents

#### Configuration préalable

Dans cette solution, on a besoin d'avoir un répertoire commun à tous les modules, pour écrire/lire des fichiers.
Pour davantage de simplicité, ce répertoire sera le répertoire de build du projet parent: 

```xml
<properties>
    <root.build.directory>${maven.multiModuleProjectDirectory}/target</root.build.directory>
</properties>
```

#### Génération du fichier `jacoco.exec`

L'objectif de cette étape est de générer un fichier `jacoco.exec` unique.
Il suffit, de préciser, dans le plugin, le chemin du fichier, qui doit être le même pour tous les modules du projet.

On rajoute les propriétés: 
```xml
<properties>
    ...
    <jacoco.dir>${root.build.directory}/jacoco</jacoco.dir>
    <jacoco.execFile>${jacoco.dir}/jacoco.exec</jacoco.execFile>
    ...
</properties>
```

On configure le plugin, dans un profile spécifique

```xml
<profile>
    <id>generate-jacoco-exec</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <configuration>
                    <destFile>${jacoco.execFile}</destFile>
                    <append>true</append>
                </configuration>
                <executions>
                    <execution>
                        <id>agent</id>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</profile>
```

Désormais, on génère le fichier `jacoco.exec` pour tous les modules, via la commande :

```shell
mvn -Pgenerate-jacoco-exec clean verify
```

#### Génération le rapport JaCoCo

On génère le rapport xml, à partir du fichier `jacoco.exec` préalablement généré.

On rajoute les propriétés: 

```xml
<properties>
    ...
    <!-- Déjà défini à l'étape précédente: 
    <jacoco.execFile>${jacoco.dir}/jacoco.exec</jacoco.execFile>
    -->
    <jacoco.report.dir>${jacoco.dir}/report</jacoco.report.dir>
    ...
</properties>
```

On configure le plugin, dans un profile spécifique:

```xml
<profile>
    <id>generate-jacoco-report</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <configuration>
                    <dataFile>${jacoco.execFile}</dataFile>
                    <outputDirectory>${jacoco.report.dir}</outputDirectory>
                </configuration>
                <executions>
                    <execution>
                        <id>xml-report</id>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</profile>
```

Avec une telle configuration, on génère un rapport par module. Le rapport d'un module venant remplacer le rapport
existant, ce n'est pas exploitable.
Il nous faut donc le générer une seule fois, pour tout le classpath du projet; ce que l'on va faire à partir du projet parent.

Malheureusement, le rapport via plugin maven jacoco, `mvn jacoco:report`, n'est pas aussi complet que sont pendant 
en ligne de commande. On ne peut pas configurer le classpath pour répertorier toutes les classes du projet.

Il va falloir ruser: lors de la génération du fichier `jacoco.exec`, on passe sur tout le classpath du projet.
On va donc copier toutes les classes à un unique emplacement, pour les réutiliser à la génération du rapport.

> **Attention:** Cette copie des classes comùilées, a pour seul but de générer un rapport JaCoCo.
Il faut impérativement éviter de faire cette manipulation lors du packaging de l'application pour la production! 

On rajoute les propriétés:
```xml
<properties>
    ...
    <jacoco.classpath>${root.build.directory}/classes</jacoco.classpath>
    ...
</properties>
```

On modifie le profil précédent, pour copier les classes compilées:

```xml
<profile>
    <id>generate-jacoco-exec</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <configuration>
                    <destFile>${jacoco.execFile}</destFile>
                    <append>true</append>
                </configuration>
                <executions>
                    <execution>
                        <id>agent</id>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>copy-resources</id>
                        <phase>package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${jacoco.classpath}</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${project.basedir}/target/classes</directory>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</profile>
```

Désormais, on génère le rapport JaCoCo, XML et HTML, pour tous les modules, via la commande :

```shell
mvn -Pgenerate-jacoco-report jacoco:report -N
# -N permet de n'exécuter la commande que pour le POM parent
```

#### Envoi du rapport à Sonar

Il suffit désormais, d'envoyer correctement le rapport à Sonar.
On doit lui préciser qu'on envoie un rapport JaCoCo, l'emplacement du rapport, et des binaires à analyser.

On rajoute les propriétés:
```xml
<properties>
    ...
    <!-- Déjà défini aux étapes précédentes: 
    <jacoco.report.dir>${jacoco.dir}/report</jacoco.report.dir>
    <jacoco.classpath>${root.build.directory}/classes</jacoco.classpath>
    -->
    <sonar.binaries>${jacoco.classpath}</sonar.binaries>
    <sonar.java.coveragePlugin>jacoco</sonar.java.coveragePlugin>
    <sonar.dynamicAnalysis>reuseReports</sonar.dynamicAnalysis>
    <sonar.coverage.jacoco.xmlReportPaths>${jacoco.report.dir}/jacoco.xml</sonar.coverage.jacoco.xmlReportPaths>
    ...
</properties>
```
On configure le plugin, dans un profile spécifique:

```xml
<profile>
    <id>sonar</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.sonarsource.scanner.maven</groupId>
                <artifactId>sonar-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</profile>
```

Désormais, on envoie le rapport JaCoCo à Sonar, via la commande:

```shell
mvn -Psonar sonar:sonar -Dsonar.host.url=http://my.own.sonar.com
```

#### TL;DR

Rajouter les propriétés permettant de mutualiser les emplacement de lecture/ecriture des fichiers :
```xml
<properties>
    ...
    <jacoco.version>0.8.4</jacoco.version>
    <root.build.directory>${maven.multiModuleProjectDirectory}/target</root.build.directory>
    <jacoco.dir>${root.build.directory}/jacoco</jacoco.dir>
    <jacoco.classpath>${root.build.directory}/classes</jacoco.classpath>
    <jacoco.execFile>${jacoco.dir}/jacoco.exec</jacoco.execFile>
    <jacoco.report.dir>${jacoco.dir}/report</jacoco.report.dir>

    <sonar.maven-plugin.version>3.6.0.1398</sonar.maven-plugin.version>
    <sonar.binaries>${jacoco.classpath}</sonar.binaries>
    <sonar.java.coveragePlugin>jacoco</sonar.java.coveragePlugin>
    <sonar.dynamicAnalysis>reuseReports</sonar.dynamicAnalysis>
    <sonar.coverage.jacoco.xmlReportPaths>${jacoco.report.dir}/jacoco.xml</sonar.coverage.jacoco.xmlReportPaths>
</properties>
```

Dans un profile spécifique, `generate-jacoco-exec`:
 - on configure le plugin JaCoCo, pour générer le fichier `jacoco.exec` consolidé
 - on copie les classes compilées en vue de générer le rapport XML consolidé
 
```xml
<profile>
    <id>generate-jacoco-exec</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <configuration>
                    <destFile>${jacoco.execFile}</destFile>
                    <append>true</append>
                </configuration>
                <executions>
                    <execution>
                        <id>agent</id>
                        <goals>
                            <goal>prepare-agent</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-resources-plugin</artifactId>
                <executions>
                    <execution>
                        <id>copy-resources</id>
                        <phase>package</phase>
                        <goals>
                            <goal>copy-resources</goal>
                        </goals>
                        <configuration>
                            <outputDirectory>${jacoco.classpath}</outputDirectory>
                            <resources>
                                <resource>
                                    <directory>${project.basedir}/target/classes</directory>
                                </resource>
                            </resources>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</profile>
```

Dans un profile spécifique, `generate-jacoco-report`:
 - on configure le plugin JaCoCo, pour générer le rapport XML et HTML à partir d'un seul fichier
 - cette génération se fera depuis le projet parent, dans lequel on a dupliqué les binaires **à seule fin d'analyse**
 
```xml
<profile>
    <id>generate-jacoco-report</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
                <configuration>
                    <dataFile>${jacoco.execFile}</dataFile>
                    <outputDirectory>${jacoco.report.dir}</outputDirectory>
                </configuration>
                <executions>
                    <execution>
                        <id>xml-report</id>
                        <goals>
                            <goal>report</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</profile>
```

Dans un profile spécifique, `sonar`:
 - on déclare l'utilisation du plugin sonar 

```xml
<profile>
    <id>sonar</id>
    <build>
        <plugins>
            <plugin>
                <groupId>org.sonarsource.scanner.maven</groupId>
                <artifactId>sonar-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</profile>

```

On peut maintenant exécuter les commandes suivante:

```shell
    # Génération du rapport binaire    
    mvn -Pgenerate-jacoco-exec clean verify
    
    # Génération du rapport XML
    mvn -Pgenerate-jacoco-report jacoco:report -N
    
    # Analyse Sonar
    mvn -Psonar sonar:sonar -Dsonar.host.url=http://my.own.sonar.com
```

### Intégration dans une pipeline Jenkins Multibranche

```groovy
pipeline {
    agent { 
        label 'maven3 && java10' 
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
    
        stage('Generate JaCoCo Report') {
            steps {
                withMaven() {
                    sh "mvn -Pgenerate-jacoco-exec verify"
                    sh "mvn -Pgenerate-jacoco-report jacoco:report -N"
                }
            }
        }

        stage('Send to Sonar') {
            steps {
                withMaven() {
                    sh "mvn -Psonar sonar:sonar -Dsonar.host.url=http://my.own.sonar.com"
                }
            }
        }
    }
}

```

# Conclusion

Générer un rapport Sonar cohérent, c'est possible avec JaCoCo.
Ce n'est qu'une question de configuration, avec des outils pas toujours homogènes.