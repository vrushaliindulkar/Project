package com.example;
import java.util.Arrays;
import java.util.Random;

public class SortingVisualizer {
    public static void main(String[] args) {
        String[] bars = {"Insertion sort", "Selection", "Bubble", "Quick", "Merge", "Shell"};
        
        // Randomize bars and their corresponding values
        shuffleArray(bars);
        
        // Print randomized bars
        System.out.println("Randomized bars:");
        System.out.println(Arrays.toString(bars));
        
        // Function to change size of bars
        changeSize(bars);
    }
    
    // Function to shuffle array
    private static void shuffleArray(String[] array) {
        Random rnd = new Random();
        for (int i = array.length - 1; i > 0; i--) {
            int index = rnd.nextInt(i + 1);
            String temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }
    
    // Function to change size of bars
    private static void changeSize(String[] bars) {
        // Implement functionality to change size of bars here
        System.out.println("Changing size of bars...");
    }
}
