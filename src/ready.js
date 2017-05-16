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
/**
 * Recursive function for countdown
 * @param  {Number} i Number to start a countdown
 */
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
function quicksort( array ){
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