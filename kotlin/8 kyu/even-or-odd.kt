/* Create a function (or write a script in Shell) that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers. */

fun evenOrOdd(number: Int): String {
    if (number % 2 == 0){
        return "Even"
    }
    return "Odd"
}