/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of 
negative numbers.

If the input array is empty or null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

 fun countPositivesSumNegatives(input : Array<Int>?) : Array<Int> {
  if (input == null || input.isEmpty()){
      return arrayOf()
  } else {
      return arrayOf(input.filter{ it > 0 }.count(), input.filter{ it < 0 }.sum() )
  }
}
