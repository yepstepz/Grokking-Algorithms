import findSmallest from './base.js';
/**
 * @param  {Array} Array to sort
 * @return {Array} new sorted Array
 */
export default function selectionSort( arr ){
    let toSort = arr;
    let newArr = [];
    while (toSort.length > 0){
        let smallest = findSmallest(toSort);
        newArr.push( toSort[ smallest ] );
        toSort.splice( smallest, 1 );
    }
    return newArr;
}