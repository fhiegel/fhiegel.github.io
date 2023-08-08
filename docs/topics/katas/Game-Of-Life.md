---
tags:
- Kata
---
Hello,
Le Game Of Life de Conway est un exercice de programmation qu'on a utilisé deux-trois fois en Coding Dojo.
Il permet de faire un peut de modélisation, tout en conservant des règles métier assez simples.

Description du problème L'objectif de l'exercice est de calculer la prochaine génération d'un Game of life de Conway, 
à partir de n'importe quelle configuration de départ.
Vous commencez avec une grille à deux dimensions, où chaque cellule est soi vivante, soit morte.
Aucune vie n'est possible au delà des bordures de la grille.Lorsque vous calculez la génération suivante, 
vous devez respecter les règles suivantes :T

- Toute cellule vivante ayant moins de deux voisins vivants, meurt, pour sous-population
- Toute cellule vivante avec plus de trois voisins vivants, meurt, pour sur-population
- Toute cellule vivante avec deux ou trois voisins vivants, reste en vie à la prochaine génération
- Toute cellule morte avec exactement trois voisins vivants, devient une cellule vivante

Ressources additionnelles 
WikipediaUn playground  https://playgameoflife.com/
- Les ressources du Global Day Of Code Retreat : https://www.coderetreat.org/facilitators/gameoflife/
 -Dont une image synthétique : https://raw.githubusercontent.com/marcoemrich/game-of-life-rules/master/gol_rules.pngVoilà Sourire 