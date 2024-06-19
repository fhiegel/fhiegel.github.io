---
title: 🧮 Calculateur RPN (Reverse Polish Notation)
tags:
  - Kata
---

# 🧮 Calculateur RPN (Reverse Polish Notation)

> Bootstrap : <br>
> 🔗 https://github.com/swkBerlin/kata-bootstraps

La notation polonaise inverse (NPI) (en anglais RPN pour Reverse Polish Notation), aussi appelée notation post-fixée,
est une façon non ambiguë d'écrire des opérations arithmétiques (des formules algébriques) sans utiliser de parenthèses.

Elle s'applique aussi à des structures d'information plus générales que les expressions arithmétiques et est fréquemment
utilisée par les compilateurs, lors de la phase d'analyse syntaxique.

Pour un compilateur, cette notation est :

- Simple :
  Les expressions RPN sont souvent plus concises et plus faciles à lire que les expressions infixes équivalentes.
- Efficace :
  Les expressions RPN peuvent être évaluées plus efficacement par les ordinateurs, car elles ne nécessitent pas
  l'utilisation de parenthèses ou d'autres mécanismes pour déterminer l'ordre des opérations.
- Flexible : 
  La notation RPN peut être facilement étendue pour inclure de nouvelles opérations et fonctions.

L'objectif de ce kata est de réaliser une fonction permettant d'évaluer une expression arithmétique écrite en utilisant
la notation polonaise inversée.

## 🔤 Expression RPN

Une expression RPN, ou expression "postfix", est soit :

- Un nombre `X`, auquel cas la valeur de l'expression est celle de X.
- Une séquence de la forme `E1 E2 OP` où `E1` et `E2` sont des expressions RPN et `OP` est une opération arithmétique.

Exemples :

- `1` ⇒ 1
- `1 2 +` ⇒ (1 + 2) = 3
- `20 5 /` ⇒ (20 / 5) = 4
- `4 2 + 3 -` ⇒ (4 + 2) - 3 = 3
- `3 5 8 * 7 + *` ⇒ 3*((5*8) + 7) = 141

## 🔣 Opérations à implémenter

### ➕ Addition

- `2 3 +` ⇒ 5
- `10 5 2 +` ⇒ 17

### ➖ Soustraction

- `4 2 -` ⇒ 2
- `10 5 -` ⇒ 5

### ✖️ Multiplication

- `3 4 *` ⇒ 12
- `5 2 3 *` ⇒ 30

### ➗ Division

- `10 5 /` ⇒ 2
- `15 3 /` ⇒ 5

### 🔝 Puissance

- `2 3 ^` ⇒ 8
- `5 2 ^` ⇒ 25

### ➰ Racine carrée

- `9 SQRT` ⇒ √9 = 3

### Autres opérations

**Ajout de l'opération MAX (maximum) :**

- `5 3 4 2 9 1 MAX` ⇒ MAX(5, 3, 4, 2, 9, 1) = 9
- `4 5 MAX 1 +` ⇒ MAX(4, 5) + 1 = 6

**Ajout de l'opération MIN (minimum) :**

- `5 3 4 2 9 1 MIN` ⇒ MIN(5, 3, 4, 2, 9, 1) = 1
- `4 5 MIN 1 +` ⇒ MIN(4, 5) + 1 = 5

## A propos du kata

Ce Kata est idéal pour **introduire** et **illustrer** les concepts de **SOLID**.
En 2h environ, on peut avoir balayé les concepts.

Voir aussi : [Énoncé guidé pour dérouler les Principes SOLID](/topics/solir/with-rpn)

## 🔗 Ressources

* https://codingdojo.org/kata/RPN/
* https://fr.wikipedia.org/wiki/Notation_polonaise_inverse
* https://www.dcode.fr/notation-polonaise-inverse
* https://www.hpmuseum.org/rpn.htm
* https://fr.wikipedia.org/wiki/Algorithme_Shunting-yard