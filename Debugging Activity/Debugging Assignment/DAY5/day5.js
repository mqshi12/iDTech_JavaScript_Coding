// console.log("The enemy has attacked! Player has 5 seconds to defeat the enemy!");

// function victory(){

 //    console.log("Player has defeated the enemy!");

// }

// setTimeout(victory, 5000);

// The thing below is calling a function anonymously -  same as setTimeout(Victory, 5000)
//  setTimeout(function(){
//     console.log("Player has defeated the enemy!")
// }, 5000) 

// SETINTERVAL: 

let  counter  =  10;

function countdown(){
    if (counter > 0)
    {
        console.log(counter);
        counter--;
    }

}
// anonymous notation: 
setInterval(function(){
    if (counter > 0)
    {
        console.log(counter);
        counter--;
    }

}, 1000)

// alternative to anonymous
setInterval(countdown, 1000)