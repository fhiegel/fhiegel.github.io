---
date: 2022-05-25
authors:
- fhiegel
tags:
- Software Craftsmanship
- Pratique
- Pair-programming
---
# Pair-practice : Comment s'entraîner au pair-programming ?

Le pair-programming est une pratique que je trouve super chouette.
Mais elle est parfois compliquée à utiliser et s'améliorer peut s'avérer difficile.<br>
Comment peut-on faire pour s'entraîner au pair-programming ? 

<!-- more -->

Le Pair-Programming. Vous en avez probablement déjà entendu parler. Peut-être que vous le pratiquez déjà ?

Il s'agit d'une méthodologie de développement qui nous vient de l'eXtreme Programming (_"Extreme Programming Explained", Kent Beck, 1999_),
qui consiste à faire travailler deux développeur.euse.s sur **une et une seule** machine.
La personne qui interagit directement avec la machine est appelée "Driver" (Pilote), l'autre est appelée "Navigator" (Copilote).

Il existe des trucs et astuces pour dérouler des sessions de pair-programming dans les meilleures conditions : 
le livre [Software Craft][software-craft-dunod] contient une grande partie de celles que je connais.

## "Bien" pratiquer le pair-programming

Le pair-programming est une méthode de travail en équipe qui s'appuie, avant tout, sur de la **communication**.
Tout exercice ou méthode qui vous permettrait d'améliorer votre communication, comme la CNV (Communication Non Violente),
fonctionne également pour le pair-programming.

Par ailleurs, recherchez l'amélioration continue.
Discutez avec votre partenaire du pair-programming en lui-même : faites régulièrement des rétrospectives
sur votre pratique et tirez-en les leçons. 

Cependant, quand on ne sait pas faire du Pair-Programming, il peut être difficile de se lancer.
Parfois, la session peut s'être mal passé, et il est compliqué de comprendre ou de verbaliser ce qui ne nous convient pas.

Comment peut-on faire pour s'entraîner au pair-programming en dehors de la pratique elle-même ?

## S'entraîner ?

Et oui ! Il est possible de s'entraîner au pair-programming.
La manière la plus simple, c'est de le pratiquer dans un cadre qui l'encourage, par exemple un [Dojo ⛩][coding-dojo].
Et il en existe d'autres !

Ci-dessous, je vous propose deux ateliers permettant de s'entrainer **sans coder**.

### Atelier : Pair-Practice

Il existe un atelier ludique, proposé par Bill Wake en 2004 : le [Pair Practice][pair-practice].

Cet exercice donne une idée de ce qu'est le pair-programming, sans coder et pose des questions pour prendre du recul sur notre manière de pratiquer.
Il consiste à créer des binômes et à exécuter un ensemble d'exercices physiques, dans des conditions proches 
de ce que l'on rencontre en condition réelle de developpement logiciel. 

Vous pourrez retrouver la fiche de l'atelier ici : [Pair Practice][pair-practice-mine].

### Atelier : Pair-Poetry

[Pair-poetry][pair-poetry] est un autre atelier, proposé par Paul Boos.

Il permet de comprendre pourquoi le Pair-Programming fonctionne ; en particulier, pourquoi il permet de produire du code de meilleure qualité.
Il consiste à créer des binômes et à produire un poème, en respectant différentes contraintes.

Quand je l'aurais finie, vous pourrez retrouver la fiche de l'atelier ici : [Pair Poetry][pair-poetry-mine].


Ces deux ateliers, où personne ne code, nous sortent complètement de notre cadre quotidien.
Ils permettent d'aborder le pair-programming selon une perspective nouvelle et accessible aux non-développeur.euse.s.

---

Merci de m'avoir lu et bonne journée 🌞
<br>
Fabien

---

**Bibliographie et liens utiles**

- 📚 [Extreme Programming Explained](http://www.extremeprogramming.org/more.html), Kent Beck, 1999
- 📚 [Software Craft][software-craft-dunod], DUNOD 2022
- 🔗 [Communication Non Violente : les fondamentaux | Maxence Walbrou sur Bloculus](https://bloculus.com/communication-non-violente-fondamentaux/)
- 🔗 [Communication Non Violente | Romain Couturier sur SuperTilt](https://supertilt.fr/la-communication-non-violente-pour-desamorcer-les-tensions/)
- 🔗 [Pair Practice | Bill Wake on XP123][pair-practice]
- 🔗 [Pair Poetry | Paul Boos on TastyCupcakes][pair-poetry]

[software-craft-dunod]: https://www.dunod.com/sciences-techniques/software-craft-tdd-clean-code-et-autres-pratiques-essentielles
[pair-practice]: https://xp123.com/articles/pair-practice/
[pair-practice-mine]: ../../../topics/software/practices/pair-programming/pair-practice.md
[pair-poetry]: https://www.tastycupcakes.org/2019/08/pair-poetry/
[pair-poetry-mine]: ../../../topics/software/practices/pair-programming/pair-poetry.md
[coding-dojo]: ../../../topics/software/practices/coding-dojo/index.md