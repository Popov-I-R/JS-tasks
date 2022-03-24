function solve(nums, params) {
     let [bombNumber, power] = params // По този начин с 1 ред декларираме 2 променливи

     for (let i = 0; i < nums.length; i++) {
        if (nums[i] === bombNumber) {
            let start = Math.max(0, i - power);
            let count = power * 2 + 1;
            nums.splice(start, count);
            i = start -1
        }
         
     }
let sum = 0
for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

}
console.log(sum)

}


 
solve(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    
 
);