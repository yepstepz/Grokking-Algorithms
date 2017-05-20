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
function count_way(parents) {
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
    console.log(graph, costs, parents);
    let checked = [];
    let node = find_lowest_cost_node(costs, checked);
    console.log(node);
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