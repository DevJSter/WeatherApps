Spiral Matrix Printing
This is a Java program that prints a given matrix in a spiral order. It follows a clockwise direction starting from the top-left corner and spirals inward until all elements of the matrix are printed.

Algorithm
The program uses the following algorithm to print the matrix in a spiral order:

Initialize variables to keep track of the boundaries of the matrix: startrow (starting row), endrow (ending row), startcol (starting column), and endcol (ending column).
Use a while loop to iterate while the starting row is less than or equal to the ending row and the starting column is less than or equal to the ending column.
Print the top boundary of the matrix by iterating from the starting column to the ending column of the current row.
Print the rightmost column by iterating from the starting row + 1 to the ending row of the current column.
Print the bottom boundary of the matrix by iterating from the ending column - 1 to the starting column. However, if the starting row is equal to the ending row, break the loop to avoid duplicating elements.
Print the leftmost column by iterating from the ending row - 1 to the starting row + 1. Similarly, if the starting column is equal to the ending column, break the loop.
Update the boundaries: increment the starting row, decrement the ending row, increment the starting column, and decrement the ending column.
Repeat steps 3-7 until all elements of the matrix are printed.




Usage
To use the program, you need to have Java installed on your machine. Follow these steps:

Copy the code into a file named printspiral.java.

Open a command prompt or terminal and navigate to the directory where the printspiral.java file is saved.
Compile the Java file by running the command: javac printspiral.java.
Run the compiled program with the command: java printspiral.
The program will print the given matrix in a spiral order. You can modify the matrix variable in the main function to test different matrices.

Example Output
For the provided example matrix {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}}, the program will output:
1 2 3 4 
8 12 16 
15 14 13 
9 5 
6 7 
11 10 



This represents the spiral order of the matrix elements.

Feel free to modify the code and experiment with different matrices to observe the spiral printing pattern.
