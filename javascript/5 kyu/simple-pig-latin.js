/* Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks 
untouched.
*/

function pigIt(str) {
    arr = [];
    for (word of str.split(" ")) {
        if (word === "!" || word === "?") {
            arr.push(word);
        } else {
            arr.push(word.slice(1) + word[0] + "ay");
        }
    }
    return arr.join(" ");
}
