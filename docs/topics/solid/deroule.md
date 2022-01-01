Kata RPN Calculator - SOLID Version
---
Le but de ce Kata, est de faire découvrir une partie de SOLID : SRP, OCP, et LSP.
Dans cet exercice, on va mettre de coté :
- La soustraction ; trop proche de l’addition et qui engendre des questions sur les cas au limite trop tôt sur leur codebase
- La composition des opérations, qui va trop loin par rapport au but de l’exercice

# Introduction du Kata

Présenter SOLID, si ce n’a pas été fait avant. 
Pour avoir le temps d’insister sur OCP et LSP, c’est plus facile d’avoir fait SRP avant, et de ne pas trop s’attarder dessus. 
Au vu des promotions précédentes, le SRP s’assimile rapidement.

Présenter la Reverse Polish Notation :
http://codingdojo.org/kata/RPN/

Poser quelques contraintes :
- On ne prend en entrée que des entiers positifs
- On ne retourne que des nombres positifs

# Proposition de déroulé :
- Présentation de la journée
- Quicky SRP (si pas encore fait)
- Session 1 : Objectif : implémenter l’Addition                     [20-25 mins]
    - Contrainte : Respecter le SRP
    - Exemples : 
        - 2 2 + => 4
        - 3 4 + => 7
- Session 2 : Objectif : implémenter la Multiplication                 [20-25 mins]
    - Exemples :
        - 2 2 * => 4
        - 3 4 * => 12
- Session 3 : Objectif : implémenter la Division                     [20-25 mins]
    - Exemples :
        - 2 2 / => 1
        - 3 4 / => 0.75
- Code review en Mob                                 [5 mins/paire]
- Quicky OCP
- Session 4 : Refactoring                            [20-25 mins]
    - Objectif : Mettre en place l’OCP
- 🎉 Pause déjeuner 🎉
- Session de question : 
- Par rapport à la division : est-ce qu'on peut utiliser la classe division partout où on utilise addition ?
- Quicky LSP
- Session 6 : Refactoring                            [20-25 mins]
    - Objectif : Mettre en place l’OCP
- Code review en Mod                                 [5 mins/paire]

---
En Dojo (voir les règles du Dojo) sur le Kata ""Roman Numerals"", on abordera les 5 Principes S.O.L.I.D.
Intoduction et présentation du Kata.

Itération 1: ""Implémenter l'addition""
Introduction au Kata
Introduction du SRP (Single Responsibility Principle)
Refactor et échanges

Itération 2: ""Implémenter la multiplication""
Présentation des UseCases
Introduction du OCP (Open-Close Principle)
Refactor et échanges

Itération 3: ""Implémenter la division""
Présentation des UseCases
Introduction du LSP (Liskov Substitution Principle)
Refactor et échanges

Itération 4: ""Implémenter un calculateur 'normal'""
Présentation des UsesCases
Introduction du DIP (Dependency Inversion Principle)
Refactor et échanges"
