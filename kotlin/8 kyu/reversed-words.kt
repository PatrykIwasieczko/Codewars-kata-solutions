/* Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle") 
// must return "battle no requires which that is victory greatest The" */

object Reverse{
   fun reverseWords(str:String):String {
       return str.split(' ').reversed().joinToString(" ")
    }
}