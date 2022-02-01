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