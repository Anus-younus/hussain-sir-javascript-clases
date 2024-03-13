// // Array

// // var subject1 = 'Math'
// // var subject2 = 'Chemistry'
// // var subject3 = 'Bio'
// // var subject4 = 'Phy'

// // let subject = new Array('Math',  " ", "Physics")

// let subject = ["Math ", "Physics ", "Chemistry ", "Bio "];

// subject[3] = "English";
// document.write(subject[3]);

// // Array Methods
// // 1: length
// // 2: push
// // 3:unshift
// // 4:pop
// // 5:shift
// // 6:splice
// // 7:indexOf
// // 8:split
// // 9:join
// // 10:concat

// // let software = ["Photoshop ", "VsCode ", "Corel ", "In Design"];

// // // Array blank

// // software = [];
// // software.length = 0;

// // // 1: length
// // console.log(software.length);
// // // 2:push
// // console.log(software.push("Premier"));
// // // 3:unshift
// // console.log(software.unshift("Firebase"));
// // // 4:pop
// // console.log(software.pop);
// // // 5:shift
// // console.log(software.shift);
// // // 6:splice
// // console.log(software.splice(0, 1));
// // // 7:indexOf
// // let position = console.log(software.indexOf("Photoshop"));
// // console.log(position);
// // // 8:split
// // let text = "My name is Anus Younus";
// // let wordArray = text.split(" ");
// // console.log(wordArray);
// // // 9:join
// // let textArray = software.join('_')
// // console.log(textArray)
// // // 10:concat
// // let newSoftware = software.concat(software2,software3);
// // console.log(newSoftware)

// // Multi Dimension Array 
// let software = [['Ilastater ', '2 Months '],['Photoshop', '2 Months']]
// console.log(software[1][1])

// Objects
// let person1 = ['Anus', 'Younus', 'Coder'];
// let person2 = {
//     firstName: 'Anus',
//     lastName: 'Younus',
//     agr : 19,
//     hobbies: ['Footballer ', 'Circkter', 'Coder']
// }

// console.log(person2.hobbies[1]);

// for(var i = 0; i <=  10; i++){}

// For In Loop 
// for (var key in person2){
//   console.log(key  + ': ' + person2[key])
// }
// person2.email = 'anusyounus254@gmail.com'
// delete person2.email;
// console.log(person2)
// document.write('agr' in  person2)

let person = {
    firstName : 'Anus',
    lastName : 'Younus',
    living :{
        city : 'Karachi',
        country: 'Pakistan'  
    },

    fullName: function(){
        return this.firstName+ ' ' +' '+ this.lastName;
    }
}

console.log(person.fullName())