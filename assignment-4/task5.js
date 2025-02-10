function processData(nums, callback) {
    return callback(nums);
}

function filterOdd(nums) {
    return nums.filter(num => num % 2 !== 0);
}

function doubleNumbers(nums) {
    return nums.map(num => num * 2);
}

function calculateSum(nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

function findMax(nums) {
    return nums.reduce((max, num) => (num > max ? num : max), nums[0]);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(processData(nums, filterOdd)); 
console.log(processData(nums, doubleNumbers)); 
console.log(processData(nums, calculateSum)); 
console.log(processData(nums, findMax));