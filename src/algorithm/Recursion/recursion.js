function countdown(i){
    console.log(i);
    if ( i<=0 ){
        return i;
    } else {
        countdown(i-1);
    }
};
/**
 * Recursive function for factorial
 * @param  {Number} i
 * @return {Number} factorial of i
 */
function factorial(i){
    if (i > 1){
        return factorial(i-1) * i;
    }
    return i;
}
/**
 * Cycle for Array summary.
 * @param  {Array} arr Array of numbers to sum
 * @return {Number} Summary of Array
 */
function sum( arr ){
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
/**
 * Recursive function for Array summary
 * @param  {Array} arr Array of numbers to sum
 * @return {Number} Summary of Array
 */
function recursiveSum( arr ){
    if (arr.length == 1) {
        return arr[0];
    }
    return sum = +arr.splice(1, 1) + recursiveSum( arr );
}