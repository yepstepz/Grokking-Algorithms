var mas = [];
// for (var i = 0; i < 100; i = i+2) {
// 	mas.push(i);
// }
mas = [1,3,5,7,9];
let secret = 7;
console.log(mas);
console.log(find_binary(secret, mas));
function find_binary(secret, mas){
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