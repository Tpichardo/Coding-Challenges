// Return the indices of the two nums that when added result in the target num

const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - nums[i];
        if (map.has(num2)) {
            return [map.get(num2), i]
        }
        map.set(num1, i)
    }

}

console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]
console.log(twoSum([3, 2, 4], 6)); // => [1, 2]
console.log(twoSum([3, 3], 6)); // => [0, 1]



const twoSumTwo = (nums, target) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - nums[i];
        if (map[num2] !== undefined) {
            return [map[num2], i]
        }
        map[num1] = i
    }

}

console.log(twoSumTwo([2, 7, 11, 15], 9)); // => [0, 1]
console.log(twoSumTwo([3, 2, 4], 6)); // => [1, 2]
console.log(twoSumTwo([3, 3], 6)); // => [0, 1]





/**
 * Write a function that accepts a roman numeral as a string and returns an integer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0

    for (let i = 0; i < s.length; i++) {
        let currentNum = romanNums[s[i]];
        let nextNum = romanNums[s[i + 1]];
        if (nextNum) {
            if (currentNum >= nextNum) {
                total += currentNum
            } else {
                total += nextNum - currentNum;
                i++
            }
        } else {
            total += currentNum
        }
    }

    return total

};

console.log(romanToInt("III")) //=> 3
console.log(romanToInt("LVIII")) // => 58
console.log(romanToInt("MCMXCIV")) // =>1994
console.log(romanToInt("IV"))