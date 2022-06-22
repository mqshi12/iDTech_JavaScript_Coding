// callback?
let years = [1996, 2000, 1998, 2006, 1989, 2013];

function getGenZ(birthYear) {
    if (birthYear > 1996) {

   console.log(birthYear); 
    }
}

const getGenZ = years.filter( birthYear => getGenZ(birthYear))

// FOR EACH:
let colors = ['red', 'blue', 'yellow', 'green', 'purple']
function showColors(colorChosen){
    console.log(colorChosen)
}
colors.forEach(color => showColors(color))