/**
 * @param  {Number} secret, choose your secret Number
 * @param  {Array} mas, in what Array we're going to find
 * @return {Number}, if secret number exists in Array, or
 * 					 Null, if not
 */
function find_binary (secret, mas) {
	let item = mas;
	let min = 0;
	let max = item.length - 1 ;
	let count = 0;
	while (min <= max) {
		let mid = Math.round(( max + min ) / 2);
		console.log( count, item[min], item[max], item[mid], secret );
		count++;
		if ( secret == item[mid] ) {
			return secret;
		}
		if (secret > item[mid]){
			min = mid + 1;
		} else {
			max = mid - 1;
		}
		
	}
	return null;
}
/**
 * @param  {Array} arr, in what Array 
 * 					we going to find smallest Number
 * @return {Number} index of smallest number
 */
function findSmallest( arr ){
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
/**
 * @param  {Array} Array to sort
 * @return {Array} new sorted Array
 */
function selectionSort( arr ){
	let toSort = arr;
	let newArr = [];
	while (toSort.length > 0){
		let smallest = findSmallest(toSort);
		newArr.push( toSort[ smallest ] );
		toSort.splice( smallest, 1 );
	}
	return newArr;
}