

const myBox = document.getElementById('box')


myBox.addEventListener('mouseover', myFunction);
myBox.addEventListener('mousedown', mySecondFunction);
myBox.addEventListener('mouseup', myThirdFunction);
myBox.addEventListener('dblclick', myFourthFunction);
myBox.addEventListener('wheel', myFifthFunction);
document.addEventListener('wheel', myFifthFunction);
document.addEventListener('keypress', mySixthFunction);

function myFunction() {
    myBox.style.backgroundColor = 'blue'
}
function mySecondFunction() {
    myBox.style.backgroundColor = 'red'
}
function myThirdFunction() {
    myBox.style.backgroundColor = 'yellow'
}
function myFourthFunction() {
    myBox.style.backgroundColor = 'green'
}
function myFifthFunction() {
    myBox.style.backgroundColor = 'orange'
}
function mySixthFunction() {
    if(event.key === 'b'){
        myBox.style.backgroundColor = 'blue'
    } else if(event.key === 'r'){
        myBox.style.backgroundColor = 'red'
    } else if(event.key === 'y'){
        myBox.style.backgroundColor = 'yellow'
    } else if(event.key === 'g'){
        myBox.style.backgroundColor = 'green'
    } else if(event.key === 'o'){
        myBox.style.backgroundColor = 'orange'
    } 
}