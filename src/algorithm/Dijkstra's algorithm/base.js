/**
 * Return true if item in array
 * and false if not
 * @param {String} item
 * @param {Array} array
 * @returns {boolean}
 */
export function in_array(item, array) {
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
export function find_lowest_cost_node(costs, checked) {
    let lowest_cost = Infinity;
    let lowest_cost_node = null;
    for (let cost in costs) {
        if (in_array(cost, checked) && costs[cost] < lowest_cost) {
            lowest_cost = costs[cost];
            lowest_cost_node = cost;
        }
    }
    return lowest_cost_node;
}
/**
 * Count cheapest way
 * @param {Array} parents
 * @returns {string}
 */
export function count_way(parents) {
    let way = Object.assign(parents);
    let parent = parents['end'];
    let result = ['start', 'end'];
    delete way['end'];
    while (parent != 'start') {
        result.splice(1, 0, parent)
        parent = way[parent];
    }
    return result.join(' → ');
}
