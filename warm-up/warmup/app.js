// function whatDay(startingDay, numOfDays){
//     days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun']

//     for(let i = 0; i < days.length; i++){
//         startingDay = days.find(function(mon) {
//             return mon = 'mon'
//         })

//     }
// }

// console.log(whatDay('mon'))



const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const filterDatabase = (query, data) => {
    const filterData = data.filter(item => {
        for(key in query){
            if(query[key] !== item[key]){
                return false
            }
            console.log("key:", key)
            console.log("value:", query[key])
        }
        return true 
    })
    return filterData
    
    
}

filterDatabase({firstName: "Jack", age: 2}, database)