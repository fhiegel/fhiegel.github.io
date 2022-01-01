---
template: reveal.html
---
# Liskov Substitution Principle

### Par la pratique du RPN Calculator

---

# Slide 2

Let q(x) be a property provable about objects of x of type T.
Then q(y) should be provable for objects y of type S where S is a subtype of T.

Every subclass/derived class should be substitutable for their base/parent class

Smells
You have to check for the type provided (e.g. instanceof)



This principle is just an extension of the Open Close Principle and it means that we must make sure that new derived classes are extending the base classes without changing their behavior.
every subclass/derived class should be substitutable for their base/parent class


Preconditions cannot be strengthened in a subtype
Postconditions cannot be weakened in a subtype
Invariants of the supertype must be preserved in a subtype
Exceptions Should Be Stricter

--

### Vertical

TODO

---

# Slide 3

--

> Some stuff

