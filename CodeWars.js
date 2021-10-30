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


/*Bob is preparing to pass IQ test.The most frequent task in this test is 
to find out which one of the given numbers differs from the others.
Bob observed that one number usually differs from the others in evenness.
Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different
 in evenness, and return a position of this number.*/

/*!Keep in mind that your task is to help Bob solve a real IQ test, 
which means indexes of the elements start from 1(not 0)*/

// Examples:
// iqTest("2 4 7 8 10") => 3 
// Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2
// Second number is even, while the rest of the numbers are odd

function iqTest(numbers) {
    let odd = ''
    let even = ''
    let arr = numbers.split(' ')
    arr.unshift("")

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += i
        } else {
            odd += i
        }
    }

    return Math.min(odd, even)
}

console.log(iqTest("2 4 7 8 10"))
console.log(iqTest("1 2 2"))

/*Your task is to write a function, which checks if a string has valid spacing.
The function should return either True or False.*/

/*For this kata, the definition of valid spacing is one space between words, 
and no leading or trailing spaces.Below are some examples of what the function should return.*/

function validSpacing(s) {
    return s.trim() === s && !s.includes('  ')



    // Initial Solution
    // if (s[0] === '' || s[s.length - 1] === '') {
    //     return false
    // } else if (s[0] === ' ' || s[s.length - 1] === ' ') {
    //     return false
    // } else if (s.includes('  ')) {
    //     return false
    // }
    // return true
}

console.log(validSpacing(' Hello World'))
console.log(validSpacing('Hello  World'))
console.log(validSpacing('Hello World'))


/*Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed(like the name of this kata).*/

/*Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.*/

function spinWords(string) {
    let newStrArr = []
    let strArr = string.split(' ')
    for (const word of strArr) {
        if (word.length >= 5) {
            newStrArr.push(word.split('').reverse().join(''))
        } else {
            newStrArr.push(word)
        }
    }
    return newStrArr.join(' ')
}

console.log(spinWords("Hey fellow warriors"))

/*Write a function that takes an array of strings as an argument and returns a filtered array 
containing the same elements but with the 'geese' removed.*/

// The geese are any strings in the following array, which is pre - populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(word => !geese.includes(word));
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))


/*In this kata you need to check the provided array(x) for good ideas 'good' and bad ideas 'bad'.
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.*/


function well(x) {
    const goodCount = x.filter(word => word === 'good').length
    return goodCount < 1 ? 'Fail!' : goodCount > 2 ? 'I smell a series!' : 'Publish!'
}

console.log(well(['good', 'good', 'good']))
console.log(well(['bad', 'bad', 'good']))
console.log(well(['bad', 'bad', 'bad']))


/*Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.The string can contain any char.*/

function XO(str) {
    let x = 0
    let o = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            x += 1
        } else if (str[i].toLowerCase() === 'o') {
            o += 1
        }
    }
    return x === o ? true : false
}

console.log(XO("ooxXm"))
console.log(XO("xooxx"))


// Given an array of integers, return a new array with each value doubled.

function maps(x) {
    return x.map((x) => x * 2)
}

console.log(maps([1, 2, 3]))



function twoSort(s) {
    let newStr = ''
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            newStr += s[i]
        } else {
            newStr += s[i] + '***'
        }
    }
    return newStr
}

console.log(twoSort('bitcoin'))
console.log(twoSort('hello'))



/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.*/

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return []
    }
    let newArr = [0, 0]
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            newArr[0] += 1
        } else {
            newArr[1] += input[i]
        }
    }
    return newArr;
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))


/*Write function splitSentence which will create a list of strings from a string.
Example:

"hello world" -> ["hello", "world"]*/

function splitSentence(s) {
    return s.split(' ');
}


// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
    let waveArr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        } else {
            waveArr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
        }
    }
    return waveArr
}

console.log(wave("Hello"))

console.log(wave(" Gap "))


/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.*/

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2
}

console.log(lovefunc(10, 5))
console.log(lovefunc(10, 10))


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    return bool ? 'Yes' : 'No'
}

console.log(boolToWord(false))
console.log(boolToWord(true))

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function numbers(nums) {
    let numArr = nums.split(' ')
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`

    // let str = ''
    // let numArr = nums.split(' ').sort((a, b) => b - a)

    // str += numArr[0] + ' ' + numArr[numArr.length - 1]
    // return str
}
console.log(numbers("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))


/*Complete the method which returns the number which is most frequent in the given input array.
If there is a tie for most frequent number, return the largest number among them.*/

function highestRank(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1
        } else {
            obj[arr[i]] += 1
        }
    }

    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))



/*Implement the function which takes an array containing the names of people that like an item.
It must return the display text as shown in the examples:*/

/*[]-- > "no one likes this"
["Peter"]-- > "Peter likes this"
["Jacob", "Alex"]-- > "Jacob and Alex like this"
["Max", "John", "Mark"]-- > "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"*/


function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    } if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length === 4) {
        return `${names[0]}, ${names[1]} and 2 others like this`
    } else {
        return `${names[0]}, ${names[1]} and` + ' ' + Number(names.length - 2) + ' ' + `others like this`
    }

}

console.log(likes([]))
console.log(likes(['Alex']))
console.log(likes(['Alex', 'Jacob']))
console.log(likes(['Alex', 'Jacob', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Luis', 'John']))



// Given a positive integer n, calculate the following sum:
// n + n / 2 + n / 4 + n / 8 + ...
// All elements of the sum are the results of integer division.

// 25  => 25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
    let sum = 0;
    while (n >= 1) {
        sum += n;
        n = Math.floor(n / 2);
    }
    return sum;
}

console.log(halvingSum(25))

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x) {
    let sum = 0
    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i])
    }
    return sum
}

console.log(sumMix(['2', 3, 6, '7', '10', 10]))


/*Finish the solution so that it sorts the passed in array of numbers.
If the function passes in an empty array or null value then it should return an empty array.*/

function solution(nums) {
    return nums === null || nums.length === 0 ? [] : nums.sort((a, b) => a - b)
}

console.log(solution([1, 2, 10, 50, 5]))



// C.....m returns 'Escaped!' < --more than three characters between

// C...m returns 'Caught!' < --as there are three characters between the two, the cat can jump.

function catMouse(x) {
    let spaces = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '.') {
            spaces += 1
        }
    }
    if (spaces > 3) {
        return 'Escaped!'
    } else {
        return 'Caught!'
    }
}

console.log(catMouse('C...m'))
console.log(catMouse('C....M'))

// Very simple, given a number, find its opposite

function opposite(number) {
    return number * -1
}

console.log(opposite(-1))
console.log(opposite(5))


// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr(n, s) {
    return s.repeat(n)

    // let newStr = ''
    // for (let i = 0; i < n; i++) {
    //     newStr += s
    // }
    // return newStr;
}

console.log(repeatStr(7, 'I'))

// Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
    return x.split(' ').join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
    let sum = 0
    numbers.forEach(elem => sum += (elem ** 2))
    return sum
}

console.log(squareSum([0, 3, 4, 5]))



// Write a program where Alex can input(n) how many times the hoop goes round and it will return him an encouraging message

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount(n) {
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
}

console.log(hoopCount(11))
console.log(hoopCount(3))


// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.split('!').join('');
}

console.log(removeExclamationMarks('hello!'))



// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

function factorial(n, product = 1) {
    if (n < 0) {
        return null
    }

    if (n === 0) {
        return 1
    }

    return n * factorial(n - 1)

    // if (n < 0) {
    //     return null
    // }

    // if (n === 0) {
    //     return product
    // }

    // product *= n

    // return factorial(n - 1, product)

}

console.log(factorial(5))


// modifyMultiply("This is a string", 3, 5)

// Should return

// "string-string-string-string-string"

function modifyMultiply(str, loc, num) {
    let newStr = ''
    let word = str.split(' ')
    for (let i = 0; i < num; i++) {
        newStr += word[loc] + '-'
    }
    return newStr.slice(0, -1)
}

console.log(modifyMultiply('This is a string', 3, 5))

/*Provided is a function find which accepts two parameters in the following order: array, element
 and returns the index of the element if found and "Not found" otherwise.
 Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata.
(no more than 85) You may assume that all array elements are unique.*/
function find(a, b, i = 0) {
    return a.indexOf(b) >= 0 ? a.indexOf(b) : "Not found"
}

console.log(find([1, 2, 3, 4, 5, 10, 11], 10))

/*Reverse every other word in a given string, then return the string.
Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word.
Punctuation marks should be treated as if they are a part of the word in this kata.*/

function reverse(str) {
    let strArr = str.split(' ')
    for (let i = 1; i < strArr.length; i += 2) {
        strArr[i] = strArr[i].split('').reverse().join('')
    }
    return strArr.join(' ')
}

console.log(reverse('Reverse this string, please!'))


/*Write a function that will return an object containing the indices of all duplicate elements.
The keys are the duplicate elements; the values are arrays of their indices in ascending order.*/

function nameIndeces(names) {
    // Initialize an object
    let object = {}
    //Loop through the array 
    for (let i = 0; i < names.length; i++) {
        //First check if the key exist in the object
        if (object[names[i]] === undefined) {
            //If it doesn't, add the key and value
            // Make names[i] the key
            //Add i as a value for names[i]
            object[names[i]] = [i]
        }
        else {
            // If it does just add the value
            object[names[i]].push(i)
        }
    }
    return object
}
console.log(nameIndeces(["Charlie", "Ida", "Charlie", "Ida", "Patrice", "Charlie"]))


// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN(note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

Array.prototype.square = function () {
    return this.map(num => num ** 2)
}

Array.prototype.cube = function () {
    return this.map(num => num ** 3)
}

Array.prototype.average = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum / (this.length)
}

Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum
}

Array.prototype.even = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 0) {
            arr.push(this[i])
        }
    }
    return arr
}

Array.prototype.odd = function () {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 === 1) {
            arr.push(this[i])
        }
    }
    return arr
}

let helpersArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(helpersArr.sum())
console.log(helpersArr.even())
console.log(helpersArr.cube())
console.log(helpersArr.square())
console.log(helpersArr.odd())
console.log(helpersArr.average())

// Given the string representations of two integers, return the string representation of the sum of those integers.
//Should work for big numbers
function sumStrings(a, b) {
    let sum = BigInt(a) + BigInt(b)
    return sum.toString()
}

console.log(sumStrings('2', '3'))

// Your function takes two arguments:
// current father's age (years)
// current age of his son(years)
// Сalculate how many years ago the father was twice as old as his son(or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
    // return sonYearsOld * 2 > dadYearsOld ? (sonYearsOld * 2) - dadYearsOld : dadYearsOld - (sonYearsOld * 2)
}

console.log(twiceAsOld(36, 7))

// Your task is to write a function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i].toLowerCase())) {
            continue;
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

console.log(disemvowel('This is so much fun!'))

/*You will be given a string and your task is to check if it is possible to convert that string into a palindrome 
by removing a single character.If the string is already a palindrome, return "OK".
If it is not, and we can convert it to a palindrome by removing one character, then return "remove one", 
otherwise return "not possible".The order of the characters should not be changed.*/

function solve(s) {
    if (s.split('').reverse().join('') === s) return "OK"
    for (let i = 0; i < s.length; i++) {
        let removed = s.substring(0, i) + s.substring(i + 1);

        if (removed === removed.split('').reverse().join('')) {
            return 'remove one';
        }
    }
    return 'not possible';
}

console.log(solve('racecar'))

/*Create a function that accepts 2 string arguments and returns an integer of the count of occurrences 
the 2nd argument is found in the first one.*/
function strCount(str, letter) {
    return str.split(letter).length - 1
    // let times = 0
    // for (let i = 0; i < str.length; i++) {
    //     if (letter.includes([str[i]])) {
    //         times += 1
    //     }
    // }
    // return times
}

console.log(strCount('', 'o'))
