// function countCode(arr) {
// let count = 0
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] === "code"){
//         count+=1
//     }
// }return count
// }
// console.log(countCode(["code", "code", "cool"]))

// function countCode(string) {
//     const newArr = [];
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === "c" || string[i] === "o" || string[i] === "e" ){
//             newArr.push(string[i])
//         }
//     }
//     let count = Math.floor(newArr.length / 3)
//     return count
// }   

// const countCode = str => str.match(/co.e/gi)
// console.log(countCode(["aaacodebbb"]))


function twoSum(arr, target) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j]
            }
        }
    }
}

console.log(twoSum([1,2,3],4))