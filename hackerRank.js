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

vowelsAndConsonants("hello")