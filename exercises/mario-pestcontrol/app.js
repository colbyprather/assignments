const form = document.totals

form.addEventListener('submit', function(){
    event.preventDefault()
    const goombaNum = form.goombaNum.value
    const bobNum = form.bobNum.value
    const cheepNum = form.cheepNum.value
    document.getElementById('mathAnswer')
    .textContent = (Number(goombaNum) * 5) + (Number(bobNum) * 7) + (Number(cheepNum) * 11 )  + ' Coins'
})