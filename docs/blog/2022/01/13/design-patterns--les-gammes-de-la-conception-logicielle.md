---
template: blog/post.html
date: 2022-01-13
title: "Les Design Patterns : les Gammes de la conception logicielle"
description: > 
    Que sont les Design Pattern ? Un gros mot ? Des solutions logicielles clé main ? Ou quelque chose de plus profond ?
    Je présente ici en quoi les Design Pattern sont à de la programmation logicielle, l'équivalent des Gammes et en musique. 
tags:
- Aristocode
- Gammes et Arpèges
- Conception logicielle
- Design Patterns
- Apprendre
---

2011 a été l'année de mes débuts dans le développement logiciel professionnel. J'y ai commencé mon stage de fin d'étude
sur une application en Java, avec très peu de librairies et de framework. C'est un positionnement que j'avais du mal à
comprendre.

À l'époque, mon mentor et maître de stage me disait alors (paraphrase) :

> Apprendre une technologie, c'est le risque d'investir dans une expertise éphémère.
> <br> Pour avoir une expertise plus pérenne, on va plutôt t'apprendre les **Design Patterns**
{.decorated}

Et moi, de rétorquer : « Les quoi ? »™

Il s'ensuivit un mois, ponctué de "Colles" de Design Pattern. Un mois vraiment chouette, où chaque matin, pendant 5 à 10
minutes, je présentais ce que j'avais compris d'un Design Pattern spécifique.

Retour, 10 ans plus tard, sur ce que j'ai appris sur cette période.

## Qu'est-ce qu'un Design Patterns ?

D'après vous ?

- [ ] L'Implémentation standard de certaines fonctionnalités ?
- [ ] Une bonne pratique de développement logiciel ?
- [ ] Un problème que l'on rencontre maintes et maintes fois dans le développement logiciel ?

Quand vous vous retrouvez devant du code, vous faites face à un algorithme qui répond à une situation.
Certaines d'entre elles sont problématiques, par exemple du code non performant ou non réutilisable, d'autres non.

Seule l'expérience peut vous permettre de qualifier une situation en problème. 

Les Design Pattern, issue de cette expérience, ont pour vocation d'accélérer la montée en compétence des développeurs, et les aider à qualifier plus rapidement des situations.

Si on reprend les termes de Christopher Alexander, le premier à aborder le concept, un **Design Pattern** (ou **Patron
de Conception** en français), est un modèle qui se définit comme suit :

> Chaque patron décrit un **problème** qui se manifeste constamment dans notre environnement, et donc décrit le **cœur de la solution** à ce problème, d’une façon telle que l’on puisse réutiliser cette solution des millions de fois, sans jamais le faire deux fois de la même manière
> <br>-- Christopher Alexander, 1977.
{.decorated}

Les Patterns permettent de reconnaître la situation à laquelle on fait face, afin de prendre une décision[^1]
permettant de se rapprocher de la solution qui nous paraît la plus adaptée.
Ces Patterns ont été codifiés et listés dans plusieurs catalogues, afin que le plus grand nombre puisse en bénéficier.

Le catalogue de Patterns le plus connu, est l'ouvrage du GoF : [Design Patterns: Elements of Reusable Object-Oriented Software][], par Erich Gamma, Richard Helm, Ralph Johnson et John Vlissides.
Il compile 23 patterns "classiques" avec des exemples de code en Smalltalk. 

### Pas de problème, pas de Pattern

Ne cherchez pas à mettre en place une solution si le problème auquel vous êtes confronté ne correspond pas.
En voulant bien faire vous introduisez inutilement de la complexité dans votre code.
Celle-ci rendra votre code plus difficile à comprendre pour les non-initiés.


## Pourquoi apprendre ?

Les Design Patterns fournissent des termes et des structures permettant aux développeurs de découper leur code de manière plus compréhensible..

Dans son livre [The Programmer's Brain][], Felienne Hermans, présente les Design Patterns comme une manière de découper le code. 
Le livre reprend les résultats d'une étude sur le temps que les développeurs mettent pour ajouter une fonctionnalité sur une base de code :

- avec et sans Design Pattern,
- avec et sans instruction à ces concepts

Les résultats mis en avant sont intéressants :

|                                                    |    ❌ Développeurs non instruits aux Patterns     |   ✔️Développeurs instruits aux Patterns   |
|----------------------------------------------------|:------------------------------------------------:|:-----------------------------------------:|
| ❌ Pas de Pattern mis en oeuvre sur la base de code |                Vitesse "nominale"                |            Vitesse "nominale"             |
| ✔️Pattern mis en oeuvre sur la base de code        | Parfois un gain /<br> Parfois une perte de temps |        Gain de temps considérable         |

De ce que j'en comprends, on ne perd jamais rien à connaître les Design Patterns.
Les connaître nous permet d'accélérer la montée en compétence dans une base de code qui en contient, car on retrouve les standards et les structures auxquelles nous sommes habitués.

En revanche, quand on n'y est pas initié, être confronté à une base de code qui en contient peut nous dérouter.

Les Design Patterns permettent de :

- comprendre plus facilement les problèmes dans leur base de code
- s'immerger plus vite dans une base de conde inconnue
- d'échanger sur les problématiques et les solutions techniques avec un vocabulaire précis

### Les Gammes de la Conception Logicielle

Les Design Pattern font partie de la littérature classique de la programmation, au même titre que "Gammes" en musique.
À mon sens, il existe d'autres éléments de la programmatique qui proposent des grilles de lecture. 
Voici une liste non exhaustive des Schémas de la Programmation :

- Le livre [Design Patterns: Elements of Reusable Object-Oriented Software][], qui présente des Patterns comme la `Factory Method`, l'`Observer`, le `Decorator`.
- Les Patterns d'Architecture, par exemple ceux de Martin Fowler : [Catalog of Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/), avec des choses comme le `Repository`, les `Layers`, le `MVC`
- [Les Anti-Patterns de code](https://sourcemaking.com/antipatterns)
- Les Principes [S.O.L.I.D](https://codersite.dev/solid-principles-the-definitive-guide/)
- L'architecture Hexagonale, l'architecture en oignon

L'important dans tous ces modèles, c'est de pouvoir, dans le code, identifier rapidement le schéma de la situation.
Une fois la situation identifiée et qualifiée, on peut prendre une décision : trouver une solution vient dans un second temps. 

Faites une liste de toutes les Gammes que vous avez pu rencontrer.
Cela peut être très intéressant, ne serait-ce que pour mettre des mots sur les problèmes auxquels vous avez été confronté.

## Comment apprendre ?

Il existe de nombreuses ressources gratuites sur internet présentant les différents Patterns, leurs avantages et leurs
inconvénients. Il y a donc de quoi trouver la matière nécessaire pour creuser le sujet. Mais il faut également trouver la
motivation.

### Colles/Quickies

La pression sociale (raisonnée) est une grande source de motivation, qui mèle la contrainte de présenter et l'envie de faire pour le mieux.
C'est pour cela que je recommande d'organiser une "colle" de Design Pattern. Sur un format de 10 minutes une personne
présente à son équipe, un Pattern défini à l'avance. Par exemple, en répondant aux questions suivantes :

- Qu'est-ce que j'en ai compris
- A quoi ça sert ?
    - Pros/Avantages
    - Cons/Inconvénients
- Dans quel(s) cadre(s) je l'utilise / Quel est le problème auquel
- Dans quel(s) cadre(s) je ne les utilise pas

### Flash Cards

Dans [The Programmer's Brain][], une méthode proposée pour apprendre à reconnaitre du code, consiste à se construire des flashcards.
Les flashcards, sont des fiches de mémorisation, où deux concepts sont associés : un au recto, un au verso.
Souvent, il s'agit d'une question et de sa réponse.
Le concept est bien mieux détaillé ici : [Comment se souvenir de tous pour (quasiment) toujours](https://ncase.me/remember/fr.html)

Les flashcards peuvent être utilisées pour lier :

- une question au recto et la réponse au verso
- des exemples de code avec l'objectif de l'algorithme (l'exemple du livre propose un parcours de liste en Python)
- un problème au recto et une solution au verso : c'est un Design Pattern
- un exemple de code, avec le problème qu'il soulève
- etc.


En conclusion, les Design Patterns sont la combinaison d'un problème répandu, et d'une manière d'aborder la solution. 
Ces combinaisons sont codifiées dans des ouvrages de référence (et sur internet, ou [ici][design patterns]).
Chacun a tout à gagner à les apprendre, et on peut y aller à son rythme ou se faire aider par la communauté.

---

Merci de m'avoir lu et bonne journée 🌞
<br>
Fabien

---

**Bibliographie et liens utiles**

- 📖 [Design Patterns: Elements of Reusable Object-Oriented Software][], l'ouvrage de référence
- 📖 [Patterns of Enterprise Application Architecture](https://martinfowler.com/books/eaa.html), par Martin Fowler.
- 📖 [The Programmer's Brain][], par Felienne Hermans.
- 🔗 [Catalog of Patterns of Enterprise Application Architecture](https://martinfowler.com/eaaCatalog/), par Martin Fowler.
- 🔗 [Refactoring Guru - Patrons de Conception](https://refactoring.guru/fr/design-patterns)
- 🔗 [Source Making - Les Anti-Patterns](https://sourcemaking.com/antipatterns),


*[GoF]: Gang Of Four : les quatre auteurs du livre 
*[Felienne Hermans]: Felienne Hermans | @Felienne | https://www.felienne.com

[design patterns]: /topics/design-patterns/
[The Programmer's Brain]: https://www.felienne.com/book
[Design Patterns: Elements of Reusable Object-Oriented Software]: https://www.oreilly.com/library/view/design-patterns-elements/0201633612/

[^1]: car le design est une décision. J'y reviendrai un autre jour, mais pas maintenant