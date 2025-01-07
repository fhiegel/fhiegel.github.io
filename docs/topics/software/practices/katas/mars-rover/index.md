---
title: 🛸 Mars Rover
tags:
- katas
---

# 🛸 Mars Rover

> [Slides](slides.md)

> Bootstrap : <br>
> 🔗 https://github.com/shodo-nantes/kata-starters

Mars est la quatrième planète du système solaire distante de la Terre de plusieurs millions de kilomètres : cette
distance varie de 55,7 à 401,3 millions de kilomètres. Sa surface méconnue est vaste et présente des cratères et des
bassins d'impact de météorites, mais aussi et de plateaux poussiéreux des formations d'origine tectonique et climatique
telles que des volcans, des rifts, des vallées, des mesas, des champs de dunes et des calottes polaires.

Bref. Il nous faut l'explorer.

Pour cela, nous allons envoyer ue flotte de robots à sa surface : des "Rover". Ces Rovers devront être contrôlés avec
précision au travers de l'espace, mais à cause de la distance, le contrôle en temps réel est impossible.

En tant que membre de l'équipe Mars Rover, vous êtes chargé de développer un programme de simulation crucial pour le
succès de la mission. Ce programme devra permettre :

- d'envoyer les instructions aux Rovers, leur permettant de se mouvoir à la surface de Mars
- de visualiser leur position et leur orientation en temps réel, vous offrant une vue imprenable sur leur progression.

=> L'objectif de ce kata est de développer une petite simulation modélisant un robot se déplaçant à la surface de mars.

## 🛰️ Maîtriser les mouvements d'un Rover

Le robot martien, ou "Rover", se déplace sur une surface plane qui peut être représentée par une grille rectangulaire.
Le Rover a une position initiale et une orientation (N, S, E, W) sur la grille. Il reçoit une série de commandes qui lui
indiquent comment se déplacer. Les commandes possibles sont :

- F (Avancer (Forward)) : Fait avancer le Rover d'une case dans la direction actuelle.
- B (Reculer (Backward)) : Fait reculer le Rover d'une case dans la direction actuelle.
- L (Tourner à gauche (Left)) : Fait tourner le Rover de 90 degrés vers la gauche.
- R (Tourner à droite (Right)) : Fait tourner le Rover de 90 degrés vers la droite.

Une fois que toutes les commandes de déplacement ont été exécutées, le Rover renvoie sa position et son orientation.

### 🌕 Mars : Surface continue

La surface de Mars est continue, cela signifie que lorsque le Rover atteint les bords de la surface représentant Mars,
il réapparaît de l'autre côté.

### 🪨 Obstacles

Le Rover peut rencontrer des obstacles sur son chemin.
Si le Rover tente d'avancer sur une case occupée par un obstacle, il ne bouge pas et une erreur est signalée.

## 🔮 Visualiser l'exploration en temps réel du plateau martien

À l'issue de son déplacement, chaque Rover renvoie sa position et son orientation.
Mais ce n'est pas très ludique !

Visualisez l'évolution du Rover sur votre plateau martien en affichant une grille avec le Rover et les éventuels
obstacles :

Par exemple :

```
..........
..x.......
..........
.....N....
...x......
```

ou encore (cf. https://codingdojo.org/kata/mars-rover/)

```
🟩🟩🌳🟩🟩
🟩🟩🟩🟩🟩
🟩🟩🟩🌳🟩
🟩🌳🟩🟩🟩
➡️🟩🟩🟩🟩
```

ou encore
```
🟫🟫🪨🟫🟫
🟫🟫🟫🟫🟫
🟫🟫🟫🟫🟫
🟫🟫🟫🟫🟫
⬆️🟫🟫🟫🟫
```

## Variantes

Pour aller plus loin dans cet exercice, vous pouvez vous amuser avec les fonctionnalités suivantes

### ⿻ Mars par génération procédurale

Construisez un générateur procédural pour disposer d'une carte aléatoire de Mars.

### 🌐 Cartographier Mars avec plusieurs Rovers

- Vous ne connaissez pas la surface de Mars
- Vous pouvez envoyer plusieurs Rovers à la surface de Mares
- Un Rover est un obstacle pour les autres Rover

Objectif : reconstruire la surface explorée par les Rovers

Exemple de carte en cours d'exploration

```
🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️
🌫️🌫️🌫️🌫️➡️⬅️️🌫️🌫️🌫️🌫️🌫️🌫️
🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️⬆️️🌫️
🌫️🌫️🌫️🌫️🟩⬇️🌫️🌫️🌫️🌫️🟩🌫️
🌫️🌫️🌫️🌫️🟩🌳🌫️🌫️🌫️🌫️🟩🌫️
🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️🌫️
```

## 🔗 Ressources

* https://kata-log.rocks/mars-rover-kata
* https://codingdojo.org/kata/mars-rover/
* https://www.codurance.com/katas/mars-rover
* https://fr.wikipedia.org/wiki/Mars_(plan%C3%A8te)