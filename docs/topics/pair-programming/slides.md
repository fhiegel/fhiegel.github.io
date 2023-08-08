---
title: "Pair-Programming (Slides)"
template: reveal.html
background-color: '#dddddd'
tags:
- Pair-programming
- Slides
---
<style>
blockquote.quote {
    background-color:white;
    opacity: 0.8;
    border-radius: 3rem;
    padding: 3rem;
}
</style>

# Pair-Programming
## WIP Edition

---

# C'est quoi ?

--

> <!-- .element: class="quote" -->
> Deux personnes travaillant sur une seule machine

--

## Driver
#### Pilote

Ecrit le code, d’après le Navigator
Dispose du clavier et de l’ordinateur

> J’ai le clavier. Je pilote, mais j’écoute mon partenaire

--

## Navigator 
#### Copilote

Relit le code avec attention
Guide la paire dans la réalisation d’une tâche

> Je n’ai pas le clavier. J’aide mon partenaire du mieux que je peux

---

# Pourquoi binômer ?

--

## Productivité et concentration

1+1 > 2
Unique petite tâche à la fois
Feed-back rapide
Coupe-court aux distractions (email, chat, etc.)

--

## Communiquer

Renforce les liens entre équipiers

--

## Qualité

Code review continuelle
Pas de raccourci
Réduire le coût des erreurs
5% de chance de se planter * 5 % de chance de se plante => 0.25 % de chance de se planter

--

## Apprendre

Transfert de connaissances métier
Partage de bonnes pratiques

---

# Petit guide du binôme ambulant

--

## Deux individus

Des gens distincts, ayant différentes qualités et différentes opinions

--

## Volontaires

Le Pair-Programming ne fonctionne pas s’il est imposé ; on doit y adhérer

Note:

Ne pas l’imposer sur les développeurs, mais on peut l’imposer sur une tâche.

--

## Actifs et impliqués

N’a aucun intérêt si l’un des deux est passif

--

## Alignés

Le binôme travaille sur une même tâche, avec le même but

--

## Synchronisés

La paire doit être au même niveau d’information sur ce qui est affiché à l’écran

--

## Échangeant les rôles

Rythme le développement, et multiple les points de vue

--

## Communication


Le Pair-Programming est une activité sociale

--

## Parler

Donnez du feedback à votre binôme en lui parlant !

--

## Bienveillance

### … et respect

---

# Styles

--

## Traditionnel 

--

Driver / Conducteur
❯ Manipule le clavier et l’ordinateur
❯ Ecrit le code, et explique COMMENT il fonctionne
❯ Challenge l’intention exprimée par le Navigator
❯ Implémenter et se planter, et non, se disputer

Note:

Challenger == Poser des questions sans nécessairement remettre en question
Implémenter et se planter, et non, se disputer

--

Navigator / Copilote
❯ Guide la paire dans la réalisation de la tâche
❯ Relit le code avec attention, et le challenge
❯ Exprime l’intention derrière le code: QUOI, et POURQUOI
❯  Poser des questions, et non, remettre en question

--

<!-- .slide: data-background-image="assets/images/why-what-how.png" data-background-size="contain" -->

--

## Timed Traditional

--

Échanger les rôles toutes les “n” minutes.

--

## Ping-Pong Pair-Programming

--

“A” commence comme Driver
Nouveau test qui échoue
“B”: implémentation minimale
Réfactore le code si besoin
Nouveau test qui échoue
“A”: implémentation minimale
Réfactore le code si besoin

--

## Strong Style Pair Programming

--

> <!-- .element: class="quote" -->
> “For an idea to go from your head into the computer it MUST go through someone else’s hands.”
> <br> -- Llewellyn FALCO

---

# Pattenrs

---

# Smells

--

L’homme-machine

Le roi du silence

L’homme invisible

La chèvre et le chou : prendre une décision

Le passager

--

## Silence

La programmation en binôme nécessite de programmer à voix haute et de partager son point de vue avec son partenaire.
Un silence persistant indique un manque de collaboration.

--

## Désengagement

Un des membres se désintéresse du projet et vaque à ses occupations.

--

## Effacement
Lorsqu'un membre est plus expérimenté qu'un autre, le novice se contente d'observer l'expert réaliser la majorité des tâches de développement

--

# Problèmes relationnels

Les deux membres du binôme ne s'entendent pas et ne souhaitent pas travailler ensemble

---

# Aller plus loin

--

## Auto-évaluation

Comment est-ce que je me vois dans le pair-programming ?

--

### Débutant

Je suis capable d’être 

- Actif dans la participation
- Copilote, et d’intervenir à bon escient
- Conducteur, et d’expliquer à tout moment le code que j’écris

--

### Intermédiaire

Je sais quand il faut

Changer de rôle
Lâcher le clavier
Prendre le clavier
Dire non à une session de Pair-Programming

--

### Expert

Je suis capable de

Devenir Copilote sur un développement en cours
Solliciter un Copilote pour m’aider dans mon développement
Prendre des pauses
Prendre sur moi les difficultés de communication
Gérer mon énergie

--

## Endosser un avatar

--

Avatars
Which one are you?
The Explorator knows the latest mocking techniques and moves fast from red to green.
The King's code is clean, robust and direct. Long live the King!
The Courageous is an expert in rescuing legacy projects. People look up to him to make things right.
The Wizard has more sorcery and spells that can break through any code at will.

---

# Merci
