/**
 * Cycle for finding biggest number
 * @param  {Array} arr Array of numbers
 * @return {Array} sorted Array
 */
function biggest( arr ){
    let biggest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        biggest = biggest < arr[i] ? arr[i] : biggest;
    }
    return biggest;
}