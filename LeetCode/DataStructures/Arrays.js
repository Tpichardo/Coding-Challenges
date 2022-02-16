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

