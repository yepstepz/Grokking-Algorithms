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
/**
 * Checks if Object contains 'mango'
 * @param obj Object
 * @returns Bool with result
 */
function is_person_seller(obj) {
    if ( !!obj['mango'] ) {
        return true;
    }
    return false;
}
/**
 * BFS
 * @param root Object with other objects
 * @returns String with results of searching;
 */
function isSeller(root) {
    var queue = root;
    while (Object.keys(queue).length != 0) {
        for ( item in queue ){
            if( !is_person_seller(queue[item]) ){
                let node = queue[item];
                queue = Object.assign(queue, node);
            } else {
                return "HERE COMES DATTT BOIII IN " + item;
            }
            delete queue[item];
        }
    }
    return "NOT AT ALL";
}
/**
 * Return true if item in array
 * and false if not
 * @param {String} item
 * @param {Array} array
 * @returns {boolean}
 */
function in_array(item, array) {
    if (array.length) {
        for (let i = 0; i < array.length; i++) {
            if (!item.indexOf(array[i])) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Returns null if all units was checked
 * and name of lowest cost node if unit wasn't checked
 * @param {Object} costs
 * @param {Array} checked
 * @returns null or {String}
 */
function find_lowest_cost_node(costs, checked) {
    let lowest_cost = Infinity;
    let lowest_cost_node = null;
    for (node in costs) {
        if (in_array(node, checked) && costs[node] < lowest_cost) {
            lowest_cost = costs[node];
            lowest_cost_node = node;
        }
    }
    return lowest_cost_node;
}
/**
 * Count cheapest way
 * @param {Array} parents
 * @returns {string}
 */
function count_way( parents ){
    let way = Object.assign(parents);
    let parent = parents['end'];
    let result = ['start','end'];
    delete way['end'];
    while ( parent != 'start' ) {
        result.splice(1,0,parent)
        parent = way[parent];
    }
    return result.join(' → ');
}
/**
 * Dijkstra's algorithm.
 * Returns cheapest way
 * (examples: "./algorithm/Dijkstra's algorithm/examples/")
 * @param {Object} graph
 * @param {Object} costs of unit's edge
 * @param {Object} unit's parents
 * @returns {string} cheapest way (ex. "start → end")
 */
function cheap_way(graph, costs, parents) {
    let checked = [];
    let node = find_lowest_cost_node(costs, checked);
    while (node != null) {
        let cost = costs[node];
        let neighbors = Object.assign(graph[node]);
        for (neighbor in neighbors) {
            let new_cost = cost + neighbors[neighbor];
            if (costs[neighbor] > new_cost) {
                costs[neighbor] = new_cost;
                parents[neighbor] = node;
            }
        }
        checked.push(node);
        node = find_lowest_cost_node(costs, checked);
    }
    return count_way(parents);
}
/**
 * Logical conjunction
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} Result of arr1 && arr2
 */
function find_conjunction(arr1, arr2){
    let b = new Set(arr2);
    let result = new Set(
        [...arr1].filter(x => b.has(x))
    );
    return [...result]
}
/**
 * Logical disjunction
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} Result of arr1 || arr 2
 */
function find_disjunction(arr1, arr2){
    arr1.push(...arr2);
    let result = new Set(arr1);
    return [...result]
}
/**
 * Logical completment
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} Result of arr1 - arr2
 */
function find_completment(arr1, arr2){
    let b = new Set(arr2);
    let result = new Set(
        [...arr1].filter(x => !b.has(x))
    );
    return [...result]
}
/**
 * Greedy algorithm of station's searching
 * @param {Array} states_needed
 * @param {Object} stations
 * @returns {Array} selected stations
 */
function greedy_stations_search(states_needed, stations){
    let final_stations = [];
    while (states_needed.length > 0) {
        let states_covered = [];
        let best_station = null;
        for (let station in stations){
            let covered = find_conjunction( states_needed, stations[station]);
            if ( covered.length > states_covered.length){
                best_station = station;
                states_covered = covered;
            }
        }
        console.log(best_station);
        states_needed = find_completment(states_needed, states_covered);
        final_stations.push(best_station);
    }
    return final_stations;
}