function find_conjunction(arr1, arr2){
    let b = new Set(arr2);
    let result = new Set(
        [...arr1].filter(x => b.has(x))
    );
    return [...result]
}
function find_disjunction(arr1, arr2){
    arr1.push(...arr2);
    let result = new Set(arr1);
    return [...result]
}
function find_completment(arr1, arr2){
    let b = new Set(arr2);
    let result = new Set(
        [...arr1].filter(x => !b.has(x))
    );
    return [...result]
}
console.log(find_disjunction([1,2,3,4,5], [4,5,6,1,7,8]));
console.log(find_conjunction([1,2,3,4,5], [4,5,6,1,7,8]));
console.log(find_completment([4,5,6,1,7,8],[1,2,3,4,5]));