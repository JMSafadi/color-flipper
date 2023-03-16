const colorsSec = ['orange', 'green', 'violet']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', () => {
    let numRandom = getRandomNumber()
    document.body.style.backgroundColor = colorsSec[numRandom]
    color.textContent = colorsSec[numRandom]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colorsSec.length)
}
