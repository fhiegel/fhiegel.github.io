---
title: 'HOWTO: Use of JaCoCo'
description: >
Comment produire un rapport de couverture de code, sur une application Java multi-module,
avec et sans, les tests d'intégration, à l'aide de JaCoCo.
date: "2019-04-04"

[comment]: <> (template: "post")
draft: true
---
# A la rencontre d'une pratique : le Pair-Programming

Vous en avez probablement déjà entendu parler, peut-être que vous l'utilisez déjà, le Pair-Programming est une pratique de développement mettant deux développeurs à contribution, pour développer ensemble un même logiciel.

Le Pair-Programming est l'une des 12 pratiques issues de l'eXtreme Programming (_"eXtreme Programming Explained", Kent Beck, 1999_), qui propose de faire du Pair-Programming tout le temps, quel que soit le sujet.

Il s'agit de l'une des 12 pratiques qui nous viennent de l'eXtreme Programming (_"Extreme Programming Explained", Kent Beck, 1999_), qui propose de faire du Pair-Programming tout le temps, sur tous les sujets.

Mais comment est-ce que ça fonctionne dans la vraie vie ?

## Pairer : deux personnes, une machine

Pour faire simple ; le Pair-Programming, c'est de faire travailler deux personnes sur une seule machine. Point.

Une seule machine.
	**Une seule** machine.
			**UNE SEULE** machine.

Encore une fois ?

**UNE SEULE MACHINE.**

C'est-à-dire un seul clavier, une seule souris, et un même écran. 
Ça veut également dire : une seule et même source d'information pour les deux développeurs. 
Ca veut dire : ni ordinateur portable supplémentaire, ni téléphone portable pendant la session de pair-programming.

Lorsque deux développeurs travaillent ensemble sur une même fonctionnalité, mais que chacun travaille sur sa machine, ça n'est pas du Pair-Programming.

L'idée derrière cette façon de faire, est d'avoir deux points de vue sur la même information.
Quand la paire avance sur du code, il y a une revue permanente du code. Quand la paire analyse de l'information, elle partage deux compréhension différentes, et on peut parler d'intelligence collective. 

L'avantage principal de cette façon de faire, est d'améliorer la réactivité face aux blocages qui empêcheraient une personne seule d'avancer. 

Les équipes pratiquant le Pair-Programming se sont rendues compte que la qualité de leur logiciel augmentait, et sans doubler le temps de développement.
Elles arrivaient à décortiquer plus rapidement les difficultés auxquelles elles étaient confrontées, et arrivaient à rester concentrées sur une seule tâche à la fois, ce qui leur permettait d'écrire moins de code pour implémenter une même fonctionnalité. 

Ça a l'air facile, dit comme ça, mais la réalité est tout autre. 

## Comment ça fonctionne

Chaque développeur a son rôle à jouer. 
Deux développeurs, donc deux rôles. 

### Driver

Le "Driver", ou "Pilote" en français, est le développeur qui a la main sur le clavier et la souris.
C'est le seul du binôme à pouvoir agir sur la machine. 

### Navigator

Le "Navigator", ou " Copilote" en français, n'agit pas directement sur la machine. Il peut, et doit prendre du recul sur ce que le binôme produit. 

Driver et Navigator sont des rôles tournants. C'est-à-dire que les deux participants alternent les rôles. Pour garder un bon rythme, il est conseillé de changer de rôle fréquemment. 

## Pré-requis.

Pour pouvoir faire correctement du Pair-Programming, il faut instaurer un climat de confiance, et aligner les deux développeurs sur une même façon de travailler.
Pour cela, chaque binôme doit définir des règles, une charte de travail.

**Volontaires**
Le Pair-Programming ne fonctionne pas s’il est imposé ; on doit y adhérer
Ne pas l’imposer sur les développeurs, mais on peut l’imposer sur une tâche.
**Actifs et impliqués**
N’a aucun intérêt si l’un des deux est passif
**Alignés**
Le binôme travaille sur une même tâche, avec le même but
**Synchronisés**
La paire doit être au même niveau d’information sur ce qui est affiché à l’écran
**Échangeant les rôles**
Rythme le développement, et multiple les points de vue
**Communication**
Le Pair-Programming est une activité sociale
**Parler**
Donnez du feedback à votre binôme en lui parlant !
**Bienveillance**
… et respect

## Quelques conseils

> Don't be afraid of pair programming: You're not as good as you think you are, but You're not as bad as you fear
> Ron Jeffries 

> Implémenter et se planter, au lieu de se disputer 

### Rythme, Pauses. Pomodoro. 

Pour être efficace tout au long de la journée, il est nécessaire d'utiliser correctement son énergie, et d'avoir un bon flux de développement.
Le flux, vient du rythme que le binôme arrive à instaurer dans sa manière de travailler; ce dernier se met en place en alternant régulièrment les rôles des développeurs, et en faisant des pauses régulières.

Une méthode qui fonctionne bien pour fair des pauses régulières: le Pomodoro. Elle consite à se donner à fond sur un sujet pendant 25 minutes, puis d'enchainer avec 5 minutes de **vraie** pause, c'est à dire, changer d'air, parler d'autre chose, mais pas du travail.
La pause n'est pas le moment de consulter ses emails.

### Quelques patterns 

WardAndKent lead a BOF at OOPSLA'97 that included looking for patterns in the code and in the recorded dialog between programmers as they work together. These are the patterns they found ...

- **Let me drive.** (One of the idioms of PairProgramming)
- **Trust me.** (Sometimes you have an idea for how to do something, but not the words to explain it. "Trust me" gives you a couple of minutes to type it in without your partner stopping you.)
- **look where you would write it.** (When looking to see whether a method you need already exists, look in the place you would put it if you had to write it.)
- **AskTheComputer.** (Don't reason about what will happen if you do X. Do X and see what happens. Send the message and see what it does.)
- **BlameYourselfFirst.**

> E-mail : autre article dédié. 

## Quelques styles

### Strong Style Navigation
> For an idea to go from your head into the computer it MUST go through someone else's hands"
> _Llewellyn Falco_

Cette citation de Llewellyn Falco, est l'essence même du Pair-Programming "Strong Style".
~~La seule contrainte du Pair-Programming: deux personne sur une seule machine.~~
Le Strong Style ajoute une contrainte au Pair-Programming : 
"Toute idée doit être exprimée et passer par les main d'un autre développeur avant d'apparaître dans le code".
Lorsqu'une idée d'implémentation germe dans la tête d'un développeur, il doit prendre le temps de l'exprimer et c'est à son binôme de prendre le clavier et de l'implémenter. 

Le Driver cesse alors de s'intéresser au "Quoi" pour se concentrer sur le "Comment".
Ce qui peut se résumer par le mantra :
> Ne pas cogiter au clavier

Le Navigator décrit son idée : prend sur lui de trouver le "Quoi", et il peut contribuer à exprimer le "Comment". Il exprime dans cet ordre:
> **Intention** 
> _"Créé une variable que l'on appellera 'décompte'"_
> **Emplacement** 
> _"À la ligne 27 et demi (une nouvelle ligne entre la #27 & #28)"_
> **Détails**
> _"Tape v,a,r espace 'décompte' égal 1"_

Les étapes "Emplacement" et "Détails" peuvent être superflues. Tant que c'est possible, laissez-les dans les mains du Driver. 

### Ping Pong. 

Le "Ping Pong" est une manière d'alterner le clavier de manière ludique. Mais elle implique une contrainte supplémentaire: pratiquer le TDD (Test Driven Development). 
Le principe du Ping Pong : faire tourner le clavier au rythme du cycle de TDD. 
Exemple : 

1. Alice écrit un test en échec (Red)
2. Alice donne le clavier à Bertrand. 
3. Bertrand écrit le minimum de code pour faire passer le test (Green) 
4. Bertrand donne le clavier à Alice. 
5. Alice remanie le code, pour qu'il satisfasse ses exigences de qualité et de design (Refactor) 
6. Alice donne le clavier à Bertrand. 
7. Bertrand écrit un test en échec (Red)
8. ... on itère

Autre exemple, plus simple à mettre en œuvre: 

1. Alice écrit un test en échec (Red)
2. Alice donne le clavier à Bertrand.
3. Bertrand écrit le minimum de code pour faire passer le test (Green) 
4. Bertrand remanie le code, pour qu'il satisfasse ses exigences de qualité et de design (Refactor) 
5. Bertrand écrit un test en échec (Red)
6. Bertrand donne le clavier à Alice. 
7. ... on itère

Chaque étape du Ping Pong possède côté ludique, où l'on joue avec son partenaire pour faire avancer le code dans la meilleure direction. 

Il y a bien d'autres styles de Pair Programming. Il y en a autant que deux binômes.
Les deux styles ci-dessus sont les plus communs, mais adaptez les à votre usage. 

## Quelques Smells

### Pairer vs. binômer. 

### Ego
Quand un développeur travaille, il met son intellect à contribution. Notre métier consiste à trouver l'algorithme le plus approprié au métier, et à le servir aux utilisateurs. 
Quand deux développeurs travaillent ensembles, leurs deux cerveau travaillent sur un unique rendu final. Cela peut causer des problèmes d'**ego**.
-> Créativité
-> Propriété commune du code

### Désengagement.

### Deuxième machine. 
> cf. Binômer ? 

## Quelques exercices

Pair-Programmer est une pratique difficile. Mais comme toute pratique de développement, on peut la travailler et s'entraîner. 
Voici quelques exercices pour s'entraîner, **sans coder**.

### Pair poetry. 

### How tout drive with an unsatisying brain.

## Conclusion

Le Pair-Programming apporte beaucoup aux développeurs, et à leurs équipes. Comme une majorité de pratiques de développement, cela demande un entraînement, et de la vigilance. 
Tomber dans les travers de la pratique peut s'avérer extrêmement néfaste, et pour les éviter, pas de secret : il faut pratiquer et prendre du recul sur notre manière de faire. Améliorer continue. 

Etiquettes : 

- Pratique de développement
- Pair-Programming

Next : Pair Programme, comment créer le Flow?

