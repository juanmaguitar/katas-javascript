#Old mobile keyboard

Do you remember the old mobiles keyboards? They look like this:

![old mobiles keyboards](/img/old-mobile-keyboard.png)

We will receive a sequence of pressed numbers and we will have to translate them into a sequence.

We will receive only numbers with only one exception: In the case that we want two letters from the same number we will represent the waiting time with a separator (for example a dot).

- 222 --> c
- 22.2 --> ba

We have to support cycles:

- 2222 --> 2 --> 'a'

##Input

    666555205502777733
    4440555666888330552222827777111
    222.2.222.2

##Output

    ola k ase
    i love katas!
    caca

##Bonus

- Make the SPACE button (0) non-cyclic.
- Implement the SHIFT button (#).
- Implement the CAPS LOCK button (#_).