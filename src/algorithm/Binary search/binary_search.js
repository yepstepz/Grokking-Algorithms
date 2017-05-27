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
    while (min <= max) {
        let mid = Math.round(( max + min ) / 2);
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