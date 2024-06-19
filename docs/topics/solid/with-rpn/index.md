---
title: SOLID par le RPN
tags:
  - SOLID
---

!!! info "En bref"
    🕓 **Durée** : 🕓2-3h<br/>
    👥 **Participants** : 👥2-n<br/>
    🎯 **Objectif** : 🔭Découvrir</br>

    Connaissez vous les principes [SOLID] ?
    Il s'agit de 5 principes de développement logiciel, réputé garantir la qualité des logiciels que nous développons.
    Au travers de cet atelier, découvrons ces principes.

Le but de cet atelier est de faire découvrir une partie de [SOLID] :

- [Single Responsibility Principle]
- [Open-Closed Principle]
- [Liskov substitution Principle]
- [Dependency Inversion Principle]

Le déroulé ci-dessous est à destination des facilitateur·ices de l'atelier.

## Introduction du Kata

Présenter le Kata - [Reverse Polish Notation] :

Poser quelques contraintes :

- On ne prend en entrée que des entiers positifs
- On ne retourne que des nombres positifs

Dans cet exercice, on va mettre de côté :

- La soustraction ; trop proche de l’addition et qui engendre des questions sur les cas limites trop tôt sur la codebase
- La composition des opérations, qui va trop loin par rapport au but de l’exercice : On s'arrête à un seul opérateur

Ne pas mentionner INTEGER_MAX_VALUE. Si les stagiaires se posent des questions, la réponse peut être différente en
fonction d'où on en est

- Si on est encore à l'Addition / Multiplication
  => éviter de lever des Exceptions, et proposer une solution "cyclique" (MAX + 1 = 0)
- Si on a traité le cas de la Division, posez-vous la question en groupe et trouver une solution qui satisfasse le plus
  grand nombre (lever une Exception typée, introduire un objet de type "Either")

## Déroulé (court)

> Ce déroulé "court" peut se tenir en 2h, mais c'est dense.

- Introduire et présenter le kata.
- Introduire et présenter les règles du Dojo.

### 1. ➕ Addition (et SRP)

> 🎯 Implémenter l'addition
> 🕓 20-25 mins

> Contrainte : Respecter le [Single Responsibility Principle]

- Introduction au Kata
- Introduction du [Single Responsibility Principle]
- Coder, démontrer et échanger

**Exemples**

```jshelllanguage
"2 2 +" // input
    4 // output

    "3 4 +" // input)
    7 // output
```

[Single Responsibility Principle],

### 2. ✖️ Multiplication (et OCP)

> 🎯 Implémenter la multiplication
> 🕓 20-25 mins

- Présentation des UsesCases
- Introduction du [Open-Closed Principle]
- Coder, démontrer et échanger

**Exemples**

```jshelllanguage
"2 2 *" // input
    4 // output

    "3 4 *" // input)
    12 // output
```

[Open-Closed Principle]

### 3. ➗ Division (et LSP)

> 🎯 Implémenter la division
> 🕓 20-25 mins

- Présentation des UsesCases
- Introduction du [Liskov substitution Principle]
- Coder, démontrer et échanger
- 
**Exemples**

```java
"2 2 /" // input
        4 // output

        "3 4 /" // input)
        0.75 // output
```

**Question**

Question Par rapport à la division : est-ce qu'on peut utiliser la classe division partout où on utilise addition ?

[Liskov substitution Principle]

### 4. 🧮 Calculateur naturel (et DIP)

> 🎯 Implémenter un calculateur 'normal'
> 🕓 20-25 mins

- Présentation des UsesCases
- Introduction du [Dependency Inversion Principle]
- Coder, démontrer et échanger

**Exemples**

```jshelllanguage
// Addition
    "2 + 2" // input
    4 // output

    "3 + 4" // input
    7 // output

// Multiplication
    "2 * 2" // input
    4 // output

    "3 * 4" // input
    12 // output

// Division
    "2 / 2" // input
    4 // output

    "3 / 4" // input
    0.75 // output
```

## Déroulé (long)

> Ce déroulé "long" est fait pour tenir toute une journée sur le sujet, en prenant davantage le temps de creuser les
> concepts et avec des options vers des présentations "autres" comme des Design Patterns.

| Horaire       | Journée                                                      |
| ------------- | ------------------------------------------------------------ |
| 9h00 - 9h30   | 👋 Accueil & Petit déjeuner 🥐<br>Présentation de la journée |
| 9h30 - 10h00  | 🛠️ Implémenter l'Addition                                   |
| 10h00 - 10h30 | 📺 Présentation SRP<br>♻️ Refactorer avec SRP                |
| 10h30 - 11h00 | 👥 Revue de code                                             |
| 11h00 - 11h30 | 🛠️ Implémenter la multiplication                            |
| 11h30 - 12h00 | 📺 Présentation OCP<br>♻️ Refactorer avec OCP                |
| 12h00 - 12h30 | 👥 Revue de code                                             |
| 12h30 - 13h00 | **🍕 Repas 🍽️**                                             |
| 13h00 - 13h30 | **🍕 Repas 🍽️**                                             |
| 13h30 - 14h00 | **🍕 Repas 🍽️**                                             |
| 14h00 - 14h30 | 🛠️ Implémenter la multiplication                            |
| 14h30 - 15h00 | 📺 Présentation LSP<br>♻️ Refactorer avec LSP                |
| 15h00 - 15h30 | 👥 Revue de code                                             |
| 15h30 - 16h00 | 🛠️ Implémenter le calculateur normal                        |
| 16h00 - 16h30 | 📺 Présentation DIP<br>♻️ Refactorer avec DIP                |
| 16h30 - 17h00 | 👥 Revue de code                                             |
| 17h00 - 17h30 | Rétro                                                        |
| 17h30 - 18h00 |                                                              |

- Introduire et présenter le kata.
- Introduire et présenter les règles du Dojo.

### 1. ➕ Addition

> 🎯 Implémenter l'addition
> 🕓 20-25 mins

- Introduction au Kata RPN, avec les contraintes de la session
- Refactor et échanges

**Exemples**

```jshelllanguage
"2 2 +" // input
    4 // output

    "3 4 +" // input
    7 // output
```

**Questions pour le débrief**

- Est-ce que vous êtes satisfait·e·s du nommage ou du découpage de votre code ? Que pourrait-on améliorer ?
- Est-ce qu'il y a un principe SOLID que l’on pourrait déjà appliquer à cette étape de l’exercice ?
  => [[Single Responsibility Principle|SRP]]

#### 1.b ♻️ Refactorer avec SRP

> 🎯 Refactorer l'addition vers SRP
> 🕓 20-25 mins

> Contrainte : Respecter le [Single Responsibility Principle]

- Introduction du [Single Responsibility Principle]
- Refactor et échanges

**Questions pour le débrief**

- Est-ce que vous êtes satisfait·e·s du nommage ou du découpage de votre code ? Que pourrait-on améliorer ?
- Est-ce qu’il y a un Design Pattern que l’on pourrait utiliser pour résoudre les problèmes rencontrés ?
  (Command ?)

***Optionnel*** : présenter le Design Pattern - [Command]

### 2. ✖️ Multiplication

> 🎯 Implémenter la multiplication
> 🕓 20-25 mins

- Présentation des Exemples
- Refactor et échanges

**Exemples**

```jshelllanguage
"2 2 *" // input
    4 // output

    "3 4 *" // input
    12 // output
```

**Questions pour le débrief**

- Question : entre l’addition et la multiplication, est-ce qu’il y a des choses que l’on peut mutualiser ou regrouper ?
- Est-ce qu'il y a un principe SOLID que l’on pourrait déjà appliquer à cette étape de l’exercice ?
    - => [Open-Closed Principle]
    - => Option : éviter OCP à ce moment, introduire la Division à la place, et introduire OCP après la division

#### 2.b ♻️ Refactorer avec OCP

> 🎯 Refactorer la multiplication en respectant OCP
> 🕓 20-25 mins

- Présentation des Exemples
- Refactor et échanges

**Questions pour le débrief**

- Question : entre l’addition et la multiplication, est-ce qu’il y a des choses que l’on peut mutualiser ou regrouper ?
- Est-ce qu’il y a un Design Pattern que l’on pourrait utiliser pour résoudre les problèmes rencontrés ?
  (Strategy ?)

***Optionnel*** : présenter le Design Pattern - [Strategy]

### 3. ➗ Division

> 🎯 Implémenter la division
> 🕓 20-25 mins

- Présentation des UsesCases
- Refactor et échanges

**Exemples**

```jshelllanguage
"2 2 /" // input
    4 // output

    "3 4 /" // input
    0.75 // output
```

**Questions pour le débrief**

- Est-ce qu'on peut utiliser la classe division partout où on utilise addition ?
- Est-ce qu'il y a un principe SOLID que l’on pourrait déjà appliquer à cette étape de l’exercice ?
    - => [Liskov substitution Principle]

#### 3.b ♻️ Refactorer avec LSP

> 🎯 Refactorer vers une solution qui respecte le LSP
> 🕓 20-25 mins

- Introduction du [Liskov substitution Principle]
- Refactor et échanges

**Questions pour le débrief**

- Est-ce que vous êtes satisfait·e·s du nommage ou du découpage de votre code ? Que pourrait-on améliorer ?
- Est-ce qu’il un a un Design Pattern que l’on pourrait utiliser pour résoudre les problèmes rencontrés ?
    - => Null Object ?
    - => Monade ?
    - => Either ?

### 4. 🧮 Calculateur naturel

> 🎯 Implémenter un calculateur 'normal'
> 🕓 20-25 mins

- Présentation des UsesCases
- Refactor et échanges

**Exemples**

```jshelllanguage
// Addition
    "2 + 2" // input
    4 // output

    "3 + 4" // input
    7 // output

// Multiplication
    "2 * 2" // input
    4 // output

    "3 * 4" // input
    12 // output

// Division
    "2 / 2" // input
    4 // output

    "3 / 4" // input
    0.75 // output
```

**Questions pour le débrief**

- Est-ce que c’est simple ou facile de reprendre toutes les fonctionnalités d’un coup ? Que faudrait il pour rendre
  cette manipulation plus fluide ?
- Est-ce qu'il y a un principe SOLID que l’on pourrait déjà appliquer à cette étape de l’exercice ?
- Est-ce qu’il un a un Design Pattern que l’on pourrait utiliser pour résoudre les problèmes rencontrés ?

#### 4.b ♻️ Refactorer avec DIP

> 🎯 Refactorer vers DIP
> 🕓 20-25 mins

- Introduction du [Dependency Inversion Principle]
- Refactor et échanges

**Questions pour le débrief**

- Est-ce que c’est simple ou facile de reprendre toutes les fonctionnalités d’un coup ? Que faudrait-il pour rendre
  cette manipulation plus fluide ?
- Est-ce qu’il un a un Design Pattern que l’on pourrait utiliser pour résoudre les problèmes rencontrés ?

### Rétro finale

- Est-ce que tout le monde a pu montrer tout ou partie de son code ?
- Est-ce que vous vous êtes amusé.e ?
- Qu’est ce que vous avez appris ?
- Optionnel : présenter [Interface Segregation Principle], le I de SOLID qu'on n'a pas pratiqué

{% include-markdown "../.links.md" %}
[Reverse Polish Notation]: /topics/kata/rpn
[Command]: /topics/design-patterns/command
[Stratregy]: /topics/design-patterns/strategy