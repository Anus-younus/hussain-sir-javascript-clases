let button = document.getElementById('button')
button.style.padding = '15px 20px'
button.style.backgroundColor = 'green'
button.style.color = 'white'
button.style.borderRadius = '30px'
button.style.border = 'none'
button.textContent = 'Get Element by Id'

var header = document.getElementById('header')
header.innerHTML = '<h1>Hello<h1/>'
function myFunction(){
    alert('Hello')
}

let btn = document.getElementsByClassName('btn')

btn.style.padding = '15px 20px'
btn.style.backgroundColor = 'green'
btn.style.color = 'white'
btn.style.borderRadius = '30px'
btn.style.border = 'none'
btn.textContent = 'Get Element by Id'

let divesion = document.createElement('div')
divesion.className = 'box'


let bav = document.querySelector('.box')
divesion = document.createTextNode('Anus')

var container = document.querySelector('.header')
var form = document.querySelector('button')

header.insertBefore(divesion, form)
bav.style.backgroundColor = 'green'