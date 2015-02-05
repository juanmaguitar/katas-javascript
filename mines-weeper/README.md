# Mines Weeper

Calculate the number of mines in the surrounding cells for every cell in the field.

Input format: Columns are separated by spaces, rows are separated by newlines ("\n"). "X" marks a mine, "O" marks a mine-free field.

Output format: "X" fields are to be left as they are. For every field containing "O", you are to calculate the number of mines surrounding that field.

    Sample input:
    O O O O X O O O O O
    X X O O O O O O X O
    O O O O O O O O O O
    O O O O O O O O O O
    O O O O O X O O O O

    Sample output:
    2 2 1 1 X 1 0 1 1 1
    X X 1 1 1 1 0 1 X 1
    2 2 1 0 0 0 0 1 1 1
    0 0 0 0 1 1 1 0 0 0
    0 0 0 0 1 X 1 0 0 0
