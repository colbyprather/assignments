function balanceParentheses(str){
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '('){
            counter++
        }
        if(str[i] === ')'){
            counter--
        }
        if (counter < 0) return false
    }
    return counter === 0
}

console.log(balanceParentheses('()()'))