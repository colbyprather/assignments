// var num = ['1','2', '3','4','5','6','7','8','9']
// var letter = ["A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// function randomPasswordGenerator(number) {
//     for(i = 0; i < 5, i++){

        
//     }
//     console.log(randomPasswordGenerator)
// }

function randomPasswordGenerator(passLength) {
    const password = [];
    let randChar;
    for (let i = 0; i < passLength; i++) {
        randChar = String.fromCharCode(Math.round(
        (Math.random() * 94) + 32));
        password.push(randChar);
    }
    return password.join("")
}

randomPasswordGenerator(10);