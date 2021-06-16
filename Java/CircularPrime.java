/*
Prime numbers are numbers that are greater than 1 and evenly divisible by only
themselves and 1. 
The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 & 29.

The number, 197, is called a circular prime because all rotations of its three digits (197,
971, and 719) are themselves also prime numbers.
A circular prime should not be confused with prime numbers which are anagrams of
each other. 
For example, while 179 is an anagram of 197 and is also a prime number, it
has no bearing on 197 being a circular prime.
There are thirteen circular primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79 and
97.

Write a program to determine how many circular primes there are below one million.
*/

class CircularPrime {

    public int countCircularPrime() {
        int count = 0;

        for (long i = 2; i < 1000000; i++) {
            // To check if the number is prime
            if (isprime(i)) {
                String num = i + ""; // converted int to string
                boolean a = false;
                String temp = num;
                // To find the anagram of the number
                for (int j = 0; j < num.length(); j++) {
                    temp = temp.charAt(temp.length() - 1) + temp;
                    temp = temp.substring(0, temp.length() - 1);
                    // To check if the anagram is also prime
                    if (!isprime(Long.parseLong(temp))) {
                        a = false;
                        break;
                    } else {
                        a = true;

                    }

                }
                if (a) {
                    count++;

                }
            }
        }
        return count;
    }

    // To check if the number is prime
    private boolean isprime(long num) {

        boolean prime = true;
        if (num == 2) {
            prime = true;
        } else if (num % 2 == 0) {
            prime = false;
        } else {
            for (int j = 3; j <= Math.sqrt(num); j++) {
                if (num % j == 0) {
                    prime = false;
                }
            }
        }
        return prime;
    }

    public static void main(String[] args) {
        CircularPrime cp = new CircularPrime();
        System.out.println(cp.countCircularPrime());
    }
}
