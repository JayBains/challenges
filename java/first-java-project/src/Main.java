import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello and welcome!");

        // byte: 1 byte, -127 to 127
        byte myByte = 127;

        // short: 2 Bytes, -32768 to 32767
        short myShort = 32767;

        // int: 4 bytes, -2.147m to 2.147m
        int myInt = 2147483647;

        // long: 8 bytes,ends with an L
        long myLong = 9216567897698598765L;

        char myChar = 'c';

        // float: 4 bytes, ends with an f
        float myFloat = 3.22565426323f;

        // double: 8 bytes, 15 decimal places
        double myDouble = 0.23534534534;

        // Boolean: 1 byte, 1 or 0
        boolean myTrue = true;
        boolean myFalse = false;

        // Strings
        String myString = "Jay";
        System.out.println(myString);
        myString += ".123";
        System.out.println(myString);

        String testString1 = "Jay";
        String testString2 = "Jay.123";

        System.out.println(myString == testString2); // checks if they are the same object
        System.out.println(myString.equals(testString2)); // checks if one equals the other




//         Scan for user input?
//        Scanner myScanner = new Scanner(System.in);
//        System.out.println("Input an Integer");
//        int userInput = myScanner.nextInt();
//        System.out.printf("Input is %d\n", userInput);

        // arrays
        int[] myArr = {1, 2, 5, 4, 3};
        System.out.println(Arrays.toString(myArr));

        // Using new to construct array with length as arg
        char[] myByteArr = new char[5];
        myByteArr[3] = '3';
        System.out.println(Arrays.toString(myByteArr));

        // A 3x3 matrix
        int[][] my2DArray = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        // for loop
        for (int i = 1; i <= 5; i++) {
            System.out.println("i = " + i);
        }
    }
}