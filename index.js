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
console.log(selectionSort([5, 3, 6, 2, 10]));