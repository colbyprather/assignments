 function multTable(n) {
    let grid = []
    for (i = 1; i <= n; i++){
        let row = []
        for (j = 1; j <= n; j++){
            row.push(i * j)
        }
        grid.push(row)
    }
    return grid
}
console.log(multTable(5))