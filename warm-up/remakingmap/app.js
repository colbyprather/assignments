Array.prototype.mapV2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        const results = callback(this[i])
        newArray.push(results)
    }
    return newArray
}

const strs = ['4', '6', '32', '65', '21']

const nums = strs.mapV2(num => {
    return Number(num)
})

console.log(newArray)