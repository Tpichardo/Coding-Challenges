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


function lastSurvivor(letters, coords) {
    if (letters.length < 2) return letters

    //iterate through coords in a for loop
    for (let i = 0; i < coords.length; i++) {
        //remove the chars from letters that macthes the index(num) in coords
        if (coords[i] === 0) {
            letters = letters.substring(1)
            //to check if you are removing from the end
        } else if (coords[i] === letters.length - 1) {
            letters = letters.substring(0, letters.length - 1)
        } else {
            letters = letters.substring(0, coords[i]) + letters.substring(coords[i] + 1)
        }
    }
    return letters;
}


//testing for
//string of one character and an empty arr 
console.log(lastSurvivor('b', []))
//string of more than one character removing from the front
console.log(lastSurvivor('abc', [0, 1]))
//string of more than one character removing from the end
console.log(lastSurvivor('def', [2]))
//string of more than one character removing from the middle
console.log(lastSurvivor('baby', [1, 2]))


// Given a string S.You have to return another string such that even - indexed and odd - indexed characters of S are grouped and groups are space - separated(see sample below)

// Note:
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'


function sortMyString(S) {
    // your code here
    let evenStr = ''
    let oddStr = ''
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 1) {
            evenStr += S[i]
        } else {
            oddStr += S[i]
        }
    }

    return oddStr.concat(" ", evenStr);
}

console.log(sortMyString('CodeWars'))

// Write a function that accepts an array of 10 integers(between 0 and 9), that returns a string of those numbers in the form of a phone number.

//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// => returns "(123) 456-7890"


function createPhoneNumber(numbers) {
    numbers.splice(0, 0, "(")
    numbers.splice(4, 0, ")")
    numbers.splice(8, 0, '-')
    numbers.splice(5, 0, " ")
    return numbers.join('')
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))


/* JavaScript Arrays support a filter function (starting in JavaScript 1.6).
 Use the filter functionality to complete the function given.*/

// The solution would work like the following:

// getEvenNumbers([2, 4, 5, 6]) 
// should == [2,4,6]

function getEvenNumbers(numbersArray) {
    // filter out the odd numbers
    return numbersArray.filter(num => num % 2 === 0)
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7]))

// Check if n is a square number 
//return true or false
/* In mathematics, a square number or perfect square is an integer that is the square of an integer;
 in other words, it is the product of some integer with itself.*/

var isSquare = function (n) {
    let squareRoot = Math.sqrt(n)
    if (n < 0) {
        return false
    } else if (Math.floor(squareRoot) ** 2 === n) {
        return true
    } else {
        return false
    }
}


console.log(isSquare(25))
console.log(isSquare(26))


/*All of the animals are having a feast! Each animal is bringing one dish.There is just one rule: 
the dish must start and end with the same letters as the animal's name. 
For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.*/

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

function feast(beast, dish) {
    if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
        return true
    }

    else {
        return false
    }
}

console.log(feast("great blue heron", "garlic naan"))
console.log(feast("brown bear", "bear claw"))


/*A magic index in an array A[1...n - 1] is defined to be an index such that A[i] = i.
Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.*/

function findMagic(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr[i]) {
            return i
        }
    }
    return -1
}

console.log(findMagic([10, 20, 2, 8]))
console.log(findMagic([0, 4, 8, 10, 7]))