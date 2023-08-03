---
date: 2022-03-24
authors:
- fhiegel
tags:
- Software Craftsmanship
- Pratique
- Kata
- Dojo
---
# Le CodeKata fête ses 19 ans : petit retour sur la pratique

Aujourd'hui, silencieusement, le CodeKata fête son 19e anniversaire.
Pour moi, il ne s'agit pas seulement de l'exercice de code que vous préférez faire,
ni la contrainte que vous préférez vous imposer,
ni l'objectif que vous préférez atteindre.
C'est un peu tout cela à la fois, mais également beaucoup plus.

<!-- more -->

<!--
    En entretien de recrutement, vient le moment fatidique du "test technique".
    Sa structure est aléatoire et dépend des entreprises : QCM pour certains, relecture de code pour d'autres.
    Parfois, on vous demande même de réaliser un exercice de code. Un Kata.
    
    Vous a-t-on déjà demandé "Montre-moi ton kata préféré" ?
    Pourquoi cette question ? Qu'est-ce que le kata préféré ? 
-->
En tant que développeur.euse en informatique (et probablement dans d'autres métiers techniques), vient un moment dans un processus
d'embauche, où votre éventuel futur employeur souhaite évaluer vos compétences.
Il vous propose un "test technique".

Plusieurs choix s'offrent à lui :

- Utiliser la période d'essai pour vous évaluer en profondeur
- Demander des réponses à un questionnaire (par exemple un QCM)
- Engager la discussion entre le candidat et des experts internes

Autour de moi, en quelques années, j'ai vu de plus en plus d'entreprises demander au candidat de réaliser des exercices de code au cours de l'entretien technique.

Des Katas.

Dans le contexte du développement logiciel, je trouve que ce terme est judicieusement choisi, mais mal utilisé.

## Qu'est-ce que c'est qu'un **Kata** ?

Dans le monde qui m'entoure, un **Kata** est un exercice de programmation, avec un énoncé relativement court et une difficulté variable.

Et souvent, ça s'arrête là. 

Je trouve cela dommage, car la notion de **Kata**, prevenant des arts martiaux et plus précisément du karaté, va plus loin. 
Cette profondeur a bien été saisie par Dave Thomas[^1], qui introduit la notion de **CodeKata** dans cet article : [CodeKata: How It Started](http://codekata.com/kata/codekata-how-it-started/), aux alentours du 24 mars 2003[^2] (:tada:).
Cette paternité est également mentionnée dans le livre "The Coding Dojo Handbook" d'Emily Bache[^4].

L'intention initiale du CodeKata allait bien au-delà de la réalisation d'un exercice de code.

### Une discipline martiale

Le Kata provient du Karaté, je vais vous épargner sa définition Wikipédia, mais je vais vous en proposer une autre.

> KATA : Enchaînements de formes prédéfinies qui simulent des situations de combat
> 
> -- [Qu'est-ce-que le Karaté ?](https://www.franceshotokan.com/content/quest-ce-que-le-Karaté) - France Shotokan

Lorsque Gichin Funakoshi, le fondateur du Karaté moderne, a codifié le Karaté dans son livre "Karaté dô kyôhan", il a retenu et compilé 19 Katas différents. 
Cette selection lui permettait de balayer l'ensemble des caractéristiques du Karaté, tout en restant humainement assimilable.
Chaque Kata permet d'aborder le Karaté par angle qui lui est propre, mais il existe un trio de Katas, permettant de travailler les fondamentaux
par lesquels il est conseillé de commencer.

Les Kata du Karaté sont une **forme codifiée d'un enchainement de mouvements**.

#### Kihon : les fondamentaux

Avant le chapitre des Katas, dans le _Karaté dô kyôhan_, il y a cette petite phrase, pas si anodine que ça :

> Avant de pratiquer les Katas, apprenez à vous tenir bien et à frapper correctement des pieds.
> 
> -- Gichin Funakoshi, Karaté dô kyôhan

Si les Katas sont des enchainements de movements, il faut connaître les mouvements de base.

Les fondamentaux.

Les **Kihon**.

Pour le Karaté, il s'agit de positions du corps, de déplacements, de coup de poings, coups de pieds ou blocages.

<!-- Quels seraient dans le développement logiciel nos Kihon ? -->

#### De la technique (jutsu) à la voie (do)

> Je ne crains pas l'homme qui a pratiqué 10.000 coups une fois, mais je crains l'homme qui a pratiqué un coup 10.000 fois.
>
> -- Bruce Lee

Les Katas sont des exercices codifiés, faits pour être pratiqués encore et encore, afin de progresser dans la technicité.

Mais la pratique des Katas dans le Karaté ne s'arrête pas à l'excellence technique.

> À travers l'homme, les techniques deviennent un Art.<br>
> L'Art ne fait pas l'Homme, l'Homme fait l'Art.
>
> -- Gichin Funakoshi, Karaté dô kyôhan

La pratique des Katas utilise le prétexte de la technique pour entrainer le mental à faire face "au monde en toute lucidité" (_Karaté dô kyôhan_).
Au-delà de la recherche de la perfection technique, en entretenant sa courtoisie, son ouverture aux critiques et son humilité,
le karatéka peut espérer atteindre l'essence de sa discipline.

Le travail du **savoir-être** est une étape indispensable pour s'améliorer dans le karaté.

<!--
Tout le monde ne souhaite pas s'entraîner, ni pratiquer des Katas.
Je pense que c'est à chacun de savoir s'il souhaite un travail alimentaire, s'il recherche une maîtrise technique ou s'il 
part en quête de quelque chose de plus spirituel.
--> 

## Pratiquer le CodeKata 

Le Kata, par la recherche de l'amélioration continue, constitue une excellente inspiration pour le monde de l'informatique.
Mais si, aujourd'hui, on me demande de dérouler un CodeKata, comment est-ce que je peux m'y prendre en tant que développeur ? 

### Adopter le bon état d'esprit

Avant de coder, le praticien doit se préparer un minimum pour maximiser son expérience.

Commencez par vous dégager un cadre sain et sécuritaire.
L'objectif est de se rendre disponible temporellement (une plage de temps dédiée), et mentalement (pas d'autre sujet à penser), pour pouvoir profiter pleinement de l'exercice.

> The first is to take the pressure off every now and then.
> 
> -- http://codekata.com/kata/codekata-how-it-started/

Ensuite, il faut endosser un état d'esprit un peu particulier : Avoir envie de progresser.
Envie d'apprendre. 
Accepter les erreurs. 
Se préparer à jouer avec le code. 
Expérimenter.

Prenez votre temps : le temps du Kata est un temps pour vous.
Profitez-en et ne vous stressez pas.
Ralentir permet à vos neurones de se connecter et favorise les apprentissages.

Rappelez-vous : le temps du Kata n'est pas un temps pour reproduire votre quotidien.
C'est un temps dédié à essayer autre chose. 

### Viser un objectif 

Fort de votre état d'esprit positif et enthousiaste, vous aller vous fixer un "objectif d'apprentissage".
Il s'agit de **votre** réponse (personnelle) à la question "A la fin du temps que je m'accorde pour réaliser le CodeKata, avec quoi voudrais-je repartir ?".

Le couplage de votre état d'esprit et de l'objectif est très similaire à la [Deliberate Practice](https://jamesclear.com/beginners-guide-deliberate-practice), 
un entrainement en pleine conscience où l'on va chercher, par une approche systématique, à améliorer un et un seul aspect de notre façon de faire.

### Choisir l'exercice

Souvent, on part de l'exercice pour déterminer le CodeKata que l'on souhaite faire.
Pourquoi ? 
Parce que c'est facile : il existe pléthore de catalogues et choisir un élément dans une liste, reste moins engageant que de se poser les questions des paragraphes ci-dessus.

Gardez tout de même en tête : il est plus pertinent d'adapter l'exercice à votre objectif, que d'adapter votre objectif à l'exercice.
Il faut voir l'exercice comme un prétexte pour se mettre en situation, un peu comme les entrainements à l'alerte incendie

Quelques catalogues de CodeKata :

* [Awesome Kata](https://github.com/gamontal/awesome-Kata)
* [Codekata](http://codekata.com/)
* [Codingdojo](http://codingdojo.org/KataCatalogue)
* [Cyber-dojo](https://cyber-dojo.org/creator/home)
* [Emily Bache repositories](https://github.com/emilybache?tab=repositories)
* [Kata-Log](http://kata-log.rocks/)

### Se mettre des Contraintes

> If Nothing Changes, Nothing Is Going to Change
> 
> -- James Clear

Répéter un exercice sans cesse et sans cesse ne permet pas nécessairement de progresser.
Afin de mieux servir l'objectif que l'on se fixe, il faut parfois se fixer une contrainte.
Il faut la voir comme un jeu, c'est-à-dire un **obstacle** auquel on va se **confronter volontairement** pour se dépasser.
Par exemple, un coureur pourrait se mettre des poids aux chevilles ou s'imposer une course particulière (lever de genous, ou "talons-fesses") sur une distance finie. 

Quelques exemples de contraintes :

* [Kata-Log](http://kata-log.rocks/) propose un ensemble de contraintes
* Pratiquer le TDD (Test Driven Development)
* Pratiquer des Tests paramétrés
* Pratiquer du Property Based Testing
* Pratiquer le Pair-Programming 
* Pratiquer le Mob-Programming
* Pratiquer le TCR (Test && Commit || Revert)
* Appliquer le Clean Code
* Appliquer les principes SOLID
* Appliquer les contraintes des objets Calistenics
* Ne pas utiliser la Souris, ni le trackpad
* Essayer un nouvel Exercice
* Essayer un nouveau Langage

#### La Contrainte Zéro

> Pas de Kata sans TDD (Test Driven Development)
> 
> -- Random Coach Craft.

Non.
La première règle du Kata, c'est de se dégager un cadre sain et sécuritaire pour se donner la capacité d'apprendre.
Pour pouvoir sortir de sa zone de confort, il faut commencer par en avoir une.
Le TDD est une contrainte ; il faut laisser la liberté à chacun de pouvoir se l'imposer ou non.

### Comment réussir un Kata

Par définition un Kata ne sera jamais un échec.
Commencer un Kata est une réussite en soi.

Vous vous êtes donné un objectif vers lequel **tendre** ?
Comment savoir si vous l'avez atteint ?

Faites une auto-rétro en vous et vous-mêmes pour répondre à cette question. 
Voici quelques questions à se poser sur le Kata que vous venez de pratiquer :

* est-ce-que j'ai appris quelque chose ?
* est-ce-que je me suis rapproché de l'objectif que je m'étais fixé ?
* est-ce-que j'ai réussi à me concentrer pleinement dessus et éviter les distractions ?
* est-ce-que j'ai eu plaisir à le faire ?
* est-ce que j'ai essayé un nouvel exercice ?
* est-ce que j'ai "fini" le kata (ie. est-ce que j'ai répondu à toutes les fonctionnalités demandées par l'énoncé)
* est-ce que j'ai essayé un nouveau langage ?
* est-ce que j'ai essayé un nouveau paradigme de programmation ?
* est-ce que j'ai essayé une méthodologie de développement spécifique (TDD, TCR, micro-commit, etc.) ?
* est-ce j'ai fait du Pair/Mob/Ensemble Programming ?
* est-ce que mon code se déploie sur un environnement de "prod" ?

Si malheureusement, vous répondez par "Non" à toutes ces questions... 
Alors, il ne vous reste plus qu'à pratiquer de nouveau, dans le but de vous améliorer ! 

### Comment aborder un nouveau CodeKata ?

> Il est difficile d'apprendre un Kata d'une seule traite
> 
> -- Gichin Funakoshi, Karaté dô kyôhan

Aborder un nouveau CodeKata est une contrainte en tant que tel.
Lorsque vous découvrez un nouvel exercice, essayez d'obtenir un tout petit résultat. 
Il vous faudra peut-être deux ou trois fois avant de réussir à dérouler l'exercice jusqu'au bout des fonctionnalités demandées.
Et une fois que vous êtes en mesure de le dérouler, vous pouvez commencer à corriger vos postures et ajouter des contraintes.

## Le Do et le Craft : Aller plus loin ?

Le CodeKata a réussi à reprendre beaucoup d'éléments du Kata d'origine.
Seulement, voilà : le CodeKata est très centré sur la recherche de la perfection technique.
La recherche mentale que l'on trouve dans le Karaté, me semble très peu présente dans la pratique du CodeKata.

Y a-t-il des choses à notre portée, que nous pourrions ou souhaiterions apporter dans notre pratique ?

### Codification

La première difference que je trouve entre le Kata du Karaté et le Kata dans le développement logiciel, est : la codification.

Il y a bien des vidéos d'experts qui démontrent leur manière de résoudre les problèmes (ex: [Sandro Mancuso Outside-In TDD](https://www.youtube.com/watch?v=XHnuMjah6ps)),
mais je ne connais pas de consensus sur un enchainement de référence des différents exercices que l'on qualifie de Kata.

Peut-être qu'un jour, il y aura un collège d'experts qui sortiront le Manifeste de Développement Logiciel, avec 19 Katas 
codifiés et qui serviront de référence pour les générations futures.
À mon humble avis, si on en arrive là, alors le développement logiciel pourra être effectué par des intelligences artificielles.

En revanche, il existe un panel d'exercices bien connus permettant d'aborder différents aspects du développement logiciel.
Si une codification doit être mise en place, je pense qu'elle se fera davantage par les compétences sollicitées lors
de la réalisation des exercices, que par la réalisation des exercices en elle-même.
Encore une fois, allez voir du côté de [Kata-Log](http://kata-log.rocks/), 

Quelques Kata qui pourraient rentrer dans une telle codification (sachant qu'il y a certainement de la redondance dans les compétences) :

- Kata débutant / Algorithmie
    - [FizzBuzz](https://codingdojo.org/kata/FizzBuzz/) : un incontournable pour débuter.
    - [Leap Year](https://codingdojo.org/kata/LeapYears/)
    - [String Calculator](https://codingdojo.org/kata/StringCalculator/)
    - [Roman Numeral](https://codingdojo.org/kata/RomanNumerals/)
- Kata de Conception
    - [Bowling Kata](https://codingdojo.org/kata/Bowling/)
    - [Bank Kata](https://github.com/sandromancuso/Bank-kata)
    - [Game Of Life](https://codingdojo.org/kata/GameOfLife/)
- Kata de Refactoring
    - [GildedRose](https://github.com/emilybache/GildedRose-Refactoring-Kata) : le kata de refactor par excellence
    - [Trivia](https://github.com/caradojo/trivia)
    - [Tennis Game](https://github.com/emilybache/Tennis-Refactoring-Kata)

### CodeKihon : les fondamentaux

Rappelons-le : au Karaté, avant de commencer un Kata, il faut connaître les mouvements fondamentaux.

En poussant le parallèle, quels sont les fondamentaux que nous développeurs, devrions connaître et travailler dans les CodeKata ?

#### Les outils

Les outils que l'on va utiliser lors du CodeKata doivent nous convenir.

Nous devrions pouvoir nous exprimer dans notre IDE (Environnement de Développement Intégré).
C'est-à-dire créer, éditer, supprimer des fichiers de code, mais aussi invoquer les compilateurs ou interpréteurs permettant de traduire
le code en exécutable.

Les raccourcis, les plugins et les fonctionnalités de notre IDE, font partie des CodeKihon,
et sont souvent des extensions des autres points évoqués dans ce paragraphe.

#### Le language

Le langage de programmation est le vecteur de l'expression du CodeKata.
Si le choix du langage n'est pas fondamental, car on peut dérouler les exercices de code dans n'importe quel langage, 
connaître le langage que l'on utilise lors d'un CodeKata est indispensable.

Et ce, même lorsque l'on choisit la contrainte "Nouveau langage".
En ce cas, on va se concentrer sur un exercice simple pour découvrir les fonctionnalités du langage avant d'espérer aller plus loin.
Pour aller plus loin sur un exercice, on aura toujours besoin d'un "maître", c'est-à-dire quelqu'un qui maitrise le langage 
et vers qui se tourner lors de blocages : lors d'un CodeKata, rester bloqué ne nous permet pas d'apprendre. 

#### Les concepts

Je pense que les concepts de la programmation logicielle font également partie des CodeKihon.
Cela fait écho aux langages, mais aujourd'hui les languages comme Java ou C# mêlent différents concepts et paradigmes de programmation.

Dans les concepts qui me viennent en tête :

- Savoir ce que sont des variables, des expressions, des fonctions, des méthodes, des classes et des interfaces
- Connaître les différents paradigmes de programmation (ex: procédural, programmation orientée objet, programmation fonctionnelle)
- D'autres concepts, peut-être moins fondamentaux, mais qui mériteraient qu'on s'y attarde :
    - les niveaux d'abstraction
    - les callback
    - ce qu'est une fonction pure
    - le "tell dont ask"

#### Les pratiques

Comment est-ce que vous développez ?
Répondre à cette question devrait mettre en lumière certaines des pratiques que vous considérez comme fondamentale

Pour moi, ce serait :

- Développer en **Test Driven Development** (TDD) : c'est-à-dire suivre le circuit Red-Green-Refactor, en étapes atomiques.
    Je pense que coder sans le TDD c'est comme pratiquer le karaté sans les coups de poings ; c'est moins efficace,
    mais ça n'empêche pas de travailler son jeu de jambes et de s'amuser.
- **Refactorer** par petites touches, et en continu. 
    Chaque Refactoring est un CodeKihon : le catalogue de Martin Fowler ([refactoring-catalog][]) dresse un beau panel 
    de petits mouvements à connaître. Pensez-bien à apprendre les raccourcis clavier dans votre IDE).
- **Ensemble programming** : que ce soit du Pair (2 personnes) ou du Mob (3+) faire un kata à plusieurs apporte toujours plus qu de le faire tout seul.
- **Clean Code** : se poser la question de la lisibilité du code, et tout ce qui en découle (SOLID, Simple Design)

Si ces CodeKihon ne vous inspirent pas, oubliez-les et trouvez les vôtres.

Je pense qu'il est plus efficace de prendre du plaisir à faire des CodeKata, qu'à s'imposer des contraintes qui nous en dégoûterons.
Et ce, quitte à s'entraîner à des CodeKihon qui ne nous inspirent pas, lorsqu'on est à l'aise sur les autres sujets.


### L'état d'esprit

J'ai commencé à écrire des articles avec cette idée en tête : **le Software Craftsmanship n'est pas un mouvement élitiste**.
L'état d'esprit décrit par Gichin Funakoshi fait écho à cette idée, et me paraît indispensable pour prendre plaisir à faire un CodeKata.

En se préparant à effectuer le CodeKata :

- ouvrez votre esprit à la nouveauté : vous êtes là pour apprendre
- mettez de côté votre vanité, ça ne se mange pas
- restez humble face à vos réussites
- persévérer lors de vos échecs, ce ne sont que des apprentissages sur la voie de la réussite 
- soyez courtois envers vous-même et envers les autres


> I hated the idea so I had to try it.
> 
> -- Kent Beck, about TCR 

Je voudrais rappeler l'exemple de Kent Beck[^5], qui, maîtrisant le TDD, a été confronté à une nouvelle pratique : 
le TCR (Test && Commit || Revert) ([article complet](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864)). 
Bien que détestant l'idée, il l'a essayé pour se forger une expérience ; c'est cet état d'esprit que je vous encourage à cultiver dans le CodeKata.

## Kata favori

### Notre approche de la discipline

Dans le _Karaté dô kyôhan_, le kata favori est l'enchainement de techniques sur lequel un pratiquant est le plus à l'aise, et qu'il va être rapidement amené à maitriser.
Mais, autant connaître ses forces et travailler dessus est une bonne chose, autant il faut éviter de négliger ses faiblesses.
En discutant le sujet avec un expert familial du karaté[^6], il semblerait que le Kata favori soit également un moyen par 
lequel le pratiquant expose l'ensemble de sa maîtrise.
Et ce, même si un Kata n'est qu'un unique angle d'approche de la discipline.

En informatique, nous n'avons pas cette restriction ; bien qu'il y ait des CodeKata permettant de travailler davantage 
le Refactoring, ou la conception logicielle, la plupart des exercices de CodeKata permettent de solliciter un large panel de compétences.

### Le Chef-d'œuvre des compagnons du Devoir

Les Compagnons du Devoir sont, en France, un mouvement qui offre de l'apprentissage et une communauté autour de métier traditionnels 
Le Chef-d'œuvre des compagnons est une coutume d'entrée, où un novice doit réaliser un objet
propre à son artisanat, dans lequel il doit démontrer toute sa compréhension des techniques, et de ses qualités humaines.

Le Software Craftsmanship fait beaucoup écho avec le mouvement des Compagnons du Devoir.
Les deux mouvements partagent la vision de permettre à chacun de s'accomplir dans et par le métier, 
dans un esprit d'ouverture et de partage

Je suis persuadé que notre CodeKata favori et le Chef-d'œuvre, constituent un point commun supplémentaire entre les deux mouvements.

## Conclusion

J'en suis arrivé à la conclusion suivante : 

**Notre Kata favori, c'est la démonstration la plus aboutie de notre compréhension de la discipline.**

Aussi, je pense que la meilleure question que l'on pourrait poser à un entretien technique, ce serait :

Montre-moi ton kata favori.<br>
Montre-moi le résultat de ton entrainement.


---

Merci de m'avoir lu et bonne journée 🌞
<br>
Fabien

PS : j'ai réussi à écrire un article sur les Katas, sans parler de Dojo 😎

---

**Bibliographie et liens utiles**

- 🔗 [CodeKata - Because experience is the only teacher | Dave Thomas](http://codekata.com) : en écrivant cet article,
  je me suis rendu compte à quel point j'ai négligé ce blog.
  Je l'ai toujours vu comme un catalogue de Kata. 
  Mais il contient également **toute la réflexion** autour de la question "Comment donner un cadre pour que les développeurs.seues s'entraînent ?".
- 🔗 [Kata-Log](http://kata-log.rocks/)
- 📚 Karaté dô kyôhan - Le livre du maître - Gichin Funakoshi : il présente les textes fondateurs de la plume de maître Funakoshi ainsi que les photos du maître disparu
- 🧑 [Gichin Funakoshi](https://www.franceshotokan.com/content/gichin-funakoshi) : Le fondateur du Karaté moderne

[^1]: Dave Thomas | @PragDave | https://pragdave.me
[^2]: Cherchez la phrase "Yesterday I posted a blog entry about the importance of verbs." et constatez que le lien sur "blog entry", 
pointe vers "http://pragdave.me/blog/2003/03/23/artifacting/". 
Merci à Laurent Bossavit[^3] pour la confirmation de l'attribution et de la période de temps via une
[archive internet de 2004](http://web.archive.org/web/20040507034122/http://www.codekata.com/cgi-bin/codekata.cgi)).
[^3]: Laurent Bossavit | @Morendil | Technical Advisor at CodeWorks | Co-fondateur du Coding Dojo de Paris | https://leprechauns-book.tumblr.com
[^4]: Emily Bache | @emilybache | http://coding-is-like-cooking.info
[^5]: Kent Beck | @KentBeck | Un des pères (si ce n'est LE) pères du TDD |Auteur de "Test Driven Development: By Example", "eXtreme Programmin Explained
[^6]: Richard Hiegel | 5ième Dan du Karaté Shotokan, et 7ième Dan de la Fédération Française de Karaté | https://www.ten-no-mon.fr/a-propos-de-richard-hiegel/

[refactoring-catalog]: https://refactoring.com/catalog/