import biggest from "./base.js"
/**
 * Recursive algoritm for quick sort
 * @param  {Array} array Array of numbers
 * @return {Array}       sorted Array
 */
function quicksortInline( array ){
    let bigger = [];
    let less = [];
    if ( array.length == 0 ) {
        return [];
    }
    let base = array[0];
    array.map(function(elem, index) {
        if ( base < elem  ) {
            bigger.push(elem);
        }
        if ( base > elem ) {
            less.push(elem);
        }
    });
    return quicksort(less).concat(base, quicksort(bigger) )
};
/**
 * Recursive algoritm for quick sort WITH MIDDLE PARAM
 * @param  {Array} array Array of numbers
 * @return {Array}       sorted Array
 */
export default function quicksort( array ){
    let bigger = [];
    let less = [];
    if ( array.length == 0 ) {
        return [];
    }
    let base = array[ Math.round( (array.length - 1) / 2) ];
    array.map(function(elem, index) {
        if ( base < elem  ) {
            bigger.push(elem);
        }
        if ( base > elem ) {
            less.push(elem);
        }
    });
    return quicksort(less).concat(base, quicksort(bigger) )
};