let numbers = [230, 1, 4000, 79, 534]
// this is sorting in descending order
function sorting(array){

    let sorted = array.sort(
        function(a, b){
            return b - a;
        }
    );

    console.log(sorted)
}

function addNumber(array, callBack) {
    array.push(303030)
    console.log(array)
    callBack(array)

}

addNumber(numbers, sorting)