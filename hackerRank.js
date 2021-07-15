// 1. print each vowel in on a new line.The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// 2. print each consonant(i.e., non - vowel) in on a new line in the same order as it appeared in

function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let consonants = '';
    for (let letter of s) {
        vowels.includes(letter) ? console.log(letter) : consonants += letter + '\n';
    }
    console.log(consonants.trim());
}

vowelsAndConsonants("hello");

const factorial = (n) => {
    for (let i = n - 1; i > 0; i--) {
        n *= i
    };
    return n;
};
console.log(factorial(4));

/*You will be given an array of numbers.You have to sort the odd numbers in ascending order 
while leaving the even numbers at their original positions.*/


const sortArray = (arr) => {
    let newArr = [];
    let i = 0
    const oddArr = arr.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    arr.forEach(elem => {
        if (elem % 2 == 0) {
            newArr.push(elem);
        } else {
            newArr.push(oddArr[i]);
            i++
        }
    });
    return newArr;
};

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));