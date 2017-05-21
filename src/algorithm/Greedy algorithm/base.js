/**
 * Logical conjunction
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} Result of arr1 && arr2
 */
export function find_conjunction(arr1, arr2){
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
export function find_disjunction(arr1, arr2){
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
export function find_completment(arr1, arr2){
    let b = new Set(arr2);
    let result = new Set(
        [...arr1].filter(x => !b.has(x))
    );
    return [...result]
}