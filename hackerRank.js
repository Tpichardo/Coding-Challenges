
function vowelsAndConsonants(s) {
    let vowels = 'aeiou';
    let consonants = '';
    for (let letter of s) {
        vowels.includes(letter) ? console.log(letter) : consonants += letter + '\n';
    }
    console.log(consonants.trim());
}

vowelsAndConsonants("hello")