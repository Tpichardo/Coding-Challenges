const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

}

console.log(twoSum([2, 7, 11, 15], 9)); // => [0, 1]
console.log(twoSum([3, 2, 4], 6)); // => [1, 2]
console.log(twoSum([3, 3], 6)); // => [0, 1]

/**
 * Given an array of integers nums, calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index 
 * is equal to the sum of all the numbers strictly to the index's right.
 * @param {*} numsArr 
 * @returns 
 */

const pivotIndex = (numsArr) => {
    let leftSum = 0;
    let rightSum = numsArr.reduce((totalSum, num) => {
        return totalSum + num
    }, 0);

    for (let i = 0; i < numsArr.length; i++) {
        rightSum -= numsArr[i];
        if (rightSum === leftSum) {
            return i;
        } else {
            leftSum += numsArr[i];
        }
    }
    return -1
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //=> 3
console.log(pivotIndex([1, 2, 3])); //=> -1
console.log(pivotIndex([2, 1, -1])); //=> 0

/**
 * You are given an integer array nums where the largest integer is unique.
 * Determine whether the largest element in the array is at least twice as much as every other number in the array. 
 * If it is, return the index of the largest element, or return -1 otherwise.
 * @param {*} nums 
 * @returns 
 */

const dominantIndex = (nums) => {
    // let largestEl = Math.max(...nums);
    // for (let i = 0; i < nums.length; i++) {
    //     if ((nums[i] * 2) <= largestEl || nums[i] === largestEl) {
    //         continue;
    //     } else {
    //         return -1
    //     }
    // }
    // return nums.indexOf(largestEl);
    let maxVal = 0;
    let secondMax = 0;
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxVal) {
            secondMax = maxVal;
            maxVal = nums[i];
            index = i;
        } else if (nums[i] < maxVal && nums[i] > secondMax) {
            secondMax = nums[i]
        }
    }

    if ((secondMax * 2) <= maxVal) {
        return index;
    } else {
        return -1
    }
};

console.log(dominantIndex([3, 6, 1, 0])) //=> 1
console.log(dominantIndex([1, 2, 3, 4])) //=> -1
console.log(dominantIndex([1])) // => 0
console.log(dominantIndex([0, 0, 3, 2])) // => -1


var plusOne = function (digits) {
    //loop backwards through the array
    for (let i = digits.length - 1; i >= 0; i--) {
        //add 1 to element
        digits[i]++;
        //if the element is less than 10, then return the array 
        if (digits[i] < 10) {
            return digits;
        } else {
            //else, if elem is not less than 10, make that elem equal to 0
            digits[i] = 0
        }
    }
    //this unshift will only happen if current elem is greater than 10 when 1 is added
    digits.unshift(1)
    return digits

};
console.log(plusOne([1, 2, 3])) // => [1, 2, 4]
console.log(plusOne([9]))// => [1, 0]
console.log(plusOne([4, 3, 2, 1])) // => [4, 3, 2, 2]
console.log(plusOne([9, 9])) //=> [1, 0, 0]
console.log(plusOne([4, 3, 9, 9])) //=> [4, 4, 0, 0]

const gridIndex = (grid, indices) => {
    let flattenedGrid = grid.flat()
    return indices.map(i => flattenedGrid[i - 1]).join('')

    // let index = 1
    // let gridObj = {}
    // let outputString = ""

    // for (let i = 0; i < grid.length; i++) {
    //     for (let j = 0; j < grid[i].length; j++) {
    //         gridObj[index++] = grid[i][j]
    //     }
    // }

    // for (elem of indices) {
    //     outputString += gridObj[elem]
    // }
    // return outputString
}

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])) // => 'myexample'
console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])) // => 'mam'



const arr1 = [0, 1, 2, [3, 4]];
let flat = arr1.flat()
console.log(flat);