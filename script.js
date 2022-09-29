const inputLower = document.querySelector('.inputLower')
const inputUpper = document.querySelector('.inputUpper')
const generateBtn = document.querySelector('.generateBtn')
const clearBtn = document.querySelector('.clearBtn')
const p = document.querySelector('p')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1))  + Number(min);
} 


generateBtn.addEventListener('click', ()=>{
    p.innerHTML =  getRndInteger(inputLower.value, inputUpper.value)
})
clearBtn.addEventListener('click', ()=>{
    p.innerHTML = ''
    inputLower.value = ''
    inputUpper.value = ''
} )
