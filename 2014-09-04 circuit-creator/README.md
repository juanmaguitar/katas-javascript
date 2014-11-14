#Kata TDD: F1 Circuit

##Before you start:
- Try not to read ahead.
- Do one task at a time. The trick is to learn to work incrementally.
- Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata

##Self documented
In this Kata you should write code self-documented. In other words, you should write a program whose logic is so obvious, it is its own documentation.

Also the tests should explain the program logic by themselves.

You may not use comments in your program. Nor may you emulate comments by using a purely decorative string value, or a paragraph-long identifier, etc.

##F1 Circuit
I want to create a protocol to send F1 circuits to other people through internet. In this protocol, we send a string with relative actions from the start of the circuit until the end using literal symbols.

###Input

The symbols and their meanings are:

- ‘#’: Defines the starting/finishing line
- ‘-’: Straight line, this describes a stretch of track that is straight. This - means that direction doesn’t change.
‘/’: It will depend on the track’s current orientation:
    - Horizontal: Curve to the left
    - Vertical: Curve to the right
- ‘\’: It will depend on the track’s current orientation:
    - Horizontal: Curve to the right
    - Vertical: Curve to the left

###Output

All the lines of the resulting graphic representation must have the same length and empty spaces may be added if needed to match the longest line length.
Characters used for the graphic representation:
- Dash ‘-’: Horizontal stretch of track.
- Pipe ‘|’: Vertical stretch of track.
- Slash ‘/’: Curve.
- Back-slash ‘\’: Curve.
- Space ‘ ‘: Empty space.
- Line feed (as EOL) ‘\n’: This is used to change to start next line of the drawing.

For example, for the string `#--\-/---\-/`, it represent the circuit:

    /#--\
    |   |
    \---/

And the string `------\-/-/-\-----#-------\--/----------------\--\----\---/---` represents:

    /---------\
    |         |
    |       /-/
    |       |
    \----\  \-----#-------\
         |                |
         |                |
         \----------------/

1. Create a simple Circuit Drawer that given the string return the "real-life" representation. (baby steps)  
    1. Start with the circuit #--  
    2. Continue with `#--\`  
    3. Follow with `#--\\`  
    4. Next draw `#--//`  
    5. Try this `#--//---\\-`  
    6. Finish with `------\-/-/-\-----#-------\--/----------------\--\----\---/---`  
2. Allow the app to change the symbols from the input  
    1. The new symbols must be specified by a map in the form => , "-" => "P"  
3. Also allow to change the symbols for the output.  
4. Allow the app to dismiss invalid characters in the input (just skip them)  
    1. The circuit #--\\---\\ is the same as #-((-\\-¬¬--\\  
5. Add a method that tell you if the circuit is closed.  
6. If the circuit is not closed, the last character must be replaced by "#"  
7. Allow the circuit to cross itself  
    1. Only allow to cross one time a horizontal with a vertical path  
    2. The output character for the cross point is "+"  
    3. For example, the string `#-\-\------/-/---/---/-------\---\--` 

Represents:

    /--#-\  /---\
    |    |  |   |
    |    \--+---/
    |       |
    \-------/