/**
 * Below we will define an n-interesting polygon. 
 * Your task is to find the area of a polygon for a given n.
 * A 1-interesting polygon is just a square with a side of length 1. 
 * An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, 
 * side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
 */

function shapeArea(n) {
    let area = 1
    for (let i = 1; i <= n; i++) {
        const x = (4 * i) - 4
        area += x
    }
    return area
}

console.log(shapeArea(1)) //--> 1
console.log(shapeArea(2)) //--> 5
console.log(shapeArea(3)) //--> 13

/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
 * each statue having an non-negative integer size. Since he likes to make things perfect,
 *  he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
 * He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues 
 * needed.

 * @param {*} statues 
 * @returns 
 */
function makeConsecutiveArr(statues) {
    let difference = 0
    let sortedArr = statues.sort((a, b) => a - b)
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i + 1] !== undefined && sortedArr[i + 1] !== sortedArr[i] + 1) {
            //look at the difference between the two numbers
            difference += sortedArr[i + 1] - sortedArr[i] - 1
        } else {
            continue;
        }
    }
    return difference
}

console.log(makeConsecutiveArr([6, 2, 3, 8])) //--> 3
console.log(makeConsecutiveArr([5, 4, 6])) //--> 0
