/* 
You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers) {
    evens = [];
    odds = [];
    for (let integer of integers) {
        if (integer % 2 == 0) {
            evens.push(integer);
        } else {
            odds.push(integer);
        }
    }
    return evens.length === 1 ? evens[0] : odds[0];
}
