// Task
// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings.
// This includes quotes, double quotes and template strings.You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`

const helloWorld = () => {
    return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)
}

console.log(helloWorld())

// Can you find the needle in the haystack ?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message(as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
    //Initial approach:
    //   for(let i = 0; i < haystack.length; i++){
    //     if(haystack[i] === "needle"){
    //       return `found the needle at position ${i}` 
    //     }
    //   }

    const index = haystack.findIndex(word => word === "needle");
    return `found the needle at position ${index}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string.You don't have to worry with strings with less than two characters.



function removeChar(str) {
    //You got this!
    return str.slice(1, -1)
};

console.log(removeChar("serendipity"))

// Consider an array / list of sheep where some sheep may be missing from their place.
//We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined



function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let arr = []
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true)
            arr.push(arrayOfSheep[i])
    }
    return arr.length
}

console.log(countSheeps([true, true, true, false, true, true, true, true]))

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or 
//"Odd" for odd numbers.

function even_or_odd(number) {
    // if (number % 2 === 0) {
    //     return 'Even'
    // } else {
    //     return 'Odd'
    // }

    //Secondary solution
    return number % 2 === 0 ? 'Even' : 'Odd'
}

console.log(even_or_odd(10))