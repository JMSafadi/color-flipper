const colorsPri = ['yellow', 'red', 'blue']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    const randomNum = getRandomNumber()
    document.body.style.backgroundColor = colorsPri[randomNum]
    color.textContent = colorsPri[randomNum]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colorsPri.length)
}
