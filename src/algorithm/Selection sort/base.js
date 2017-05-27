/**
 * @param  {Array} arr, in what Array
 * 					we going to find smallest Number
 * @return {Number} index of smallest number
 */
export default function findSmallest( arr ){
    let smallest = arr[0];
    let small_index = 0;
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] < smallest){
            smallest = arr[i];
            small_index = i;
        }
    }
    return small_index;
}