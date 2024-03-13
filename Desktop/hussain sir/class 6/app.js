// 1: Window Open and Close

// var myWindow;
// function openWindow(){
//     myWindow = window.open('http://www.google.com',"","width=500px,height=500px,left=200px,top=200px" )
// }

// function closeWindow(){
//     myWindow.close()
// }

// 2: Window OnLoad
// window.onload = function (){

//     var body = document.querySelector("body");
//     var button = document.querySelector("#button");
//     button.onclick = function () {
//         if (body.className == "black") {
//             body.className = "white";
//             button.className = "black"
//         }
//         else{
//             body.className = "black";
//             button.className = "white"
//         }
//     };
    
// }


// 3: Add Eventlistener 

// document.getElementById('image-1').onmouseover = abc;

// function abc(){
//     document.getElementById('image-1').style.filter = 'grayscale(0%)'
// }

// document.getElementById('image-1').onmouseout = xyz;

// function xyz(){
//     document.getElementById('image-1').style.filter = 'grayscale(100%)'
// }


document.getElementById('image-1').addEventListener("mouseover",
function abc(){this.style.filter = 'grayscale(0%)'})
document.getElementById('image-1').onmouseout = xyz;

function xyz(){
    document.getElementById('image-1').style.filter = 'grayscale(100%)'
}