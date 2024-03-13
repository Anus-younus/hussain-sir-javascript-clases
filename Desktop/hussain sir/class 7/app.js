// 1 : Scroll Event

// window.addEventListener('scroll', function (){
//     console.log('Scrolling')
// })

// window.addEventListener('wheel', function (event){
//     if (event.deltaY < 0){
//         console.log('scrollingUp')
//     }
//     else if(event.deltaY > 0){
//         console.log('scrollingDown')
//     }
// })

// window.addEventListener('scroll', ()=> {
//     if(window.pageYOffset > 400){
//         // console.log('Over 400px');
//         document.body.style.color = 'white'
//         document.body.style.backgroundColor = 'black'
//     }
//     else{
//         // console.log('Under 400px')
//         document.body.style.color = 'black'
//         document.body.style.backgroundColor = 'white'
//     }
// })


// Loops

// For Loop
// for(initialExpression){ statement }
// for(let i = 1; i <= 10; i++){
//     var table = 4 
//     document.write(table + " x " + i + " = " + table * i + '<br />')
// }

// // While Loop
// var j = 1;
// while(j <= 10){
//    j++
//    document.write(j + '<br/>')
// }
// // Do While Loop

// var x = 1;
// do{
//    document.write(x + '<br/>')
// }while(x <= 10)

// for(var i = 1; i < 10; i++){
//     if(i % 2 !== 0){
//         document.write(i + '<br />')
//     }
// }
// {
//     let password;
//     do{
//         password = prompt('What is the passCode')
//     }while(password !== 'hussain sir')
// }

// Break 

// for(var i = 1; i <= 10; i++){
//     if(i == 5){
//         break
//     }
//     document.write(i + '<br />')
//     // break
// }

// function name(parameter1,parameter2){
//     document.write('Hello ' + parameter1 + parameter2)
// }
// name('Owais ', 'Younus')
// function functionName(argument1, argument2){
//     document.write(argument1)
// }

// functionName('<br />' + 'Anus')


// function addition(argument1, argument2){
//     document.write(argument1 + argument2)
// }

// addition(25 , 25)

// var functionReturn = functionName()
// function functionName(argument1,argument2){
//     return functionReturn;
// }

document.write('Total Subject - 5 <br /> Total Marks - 500 <br /> <br />')

function sumMarks(urdu, islamiat, English){
    var a = urdu + islamiat + English
    return a;
}

var b = sumMarks(50, 50, 50)
document.write('Marks Obtain - ' +b+ '<br />')

function percentage(tm){
    var c = tm/500*100
    return c;
}

var d = percentage(150)

document.write(d + '%')

