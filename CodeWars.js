//You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings.
// This includes quotes, double quotes and template strings.You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`

const helloWorld = () => {
    return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)
}

console.log(helloWorld())


// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message(as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    const index = haystack.findIndex(word => word === "needle");
    return `found the needle at position ${index}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string.You don't have to worry with strings with less than two characters.


function removeChar(str) {
    //You got this!
    return str.slice(1, -1)
};

console.log(removeChar("serendipity"));


// Consider an array / list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array(true means present).

/*For example,

    [true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true]
The correct answer would be 17.*/

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let arr = []
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true)
            arr.push(arrayOfSheep[i])
    }
    return arr.length
}

console.log(countSheeps([true, true, true, false, true, true, true, true]))

/* Create a function (or write a script in Shell) that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd'
}

console.log(even_or_odd(10))

//Write a function that multiplies two numbers
function multiply(a, b) {
    return a * b
}

console.log(multiply(5, 4));

const capitalizeName = (addedSnack) => {
    let snackName = "freeCodeCamp is an awesome resource";
    const words = snackName.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
        }
    }
    snackName = words.join(" ");
    console.log(snackName)
    return snackName
};

console.log(capitalizeName("freeCodeCamp is an awesome resource"))

// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers(positive integers)
// m is excluded from the multiples

function sumMul(n, m) {
    if (n > m) return "INVALID";

    //make a total
    let total = 0

    //make a loop
    for (let i = n; i < m; i += n) {
        //in every iteration get a multiple of n
        //add it to a total
        total += i
    }
    return total;

    return 0;
}
//test for
//"n is equal to m" return 0
console.log(sumMul(2, 2))
//"n is greater than m" return INVALID
console.log(sumMul(10, 5))
//"n is less than m and m is not a factor of n"
console.log(sumMul(3, 13))
console.log(sumMul(2, 9))
//"n is greater than m" return INVALID
console.log(sumMul(4, 3))
//"n is less than m and m is a factor of n, but m is excluded from the sum"
console.log(sumMul(2, 8))