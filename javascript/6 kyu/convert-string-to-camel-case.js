/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str) {
    let arr = str.includes("-") ? str.split("-") : str.split("_");
    let newarr = [];
    for (word of arr) {
        newarr.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    let checkArr = newarr.join("");
    if (str.charAt(0).toLowerCase() == str.charAt(0)) {
        return checkArr.charAt(0).toLowerCase() + checkArr.slice(1);
    }
    return checkArr;
}
