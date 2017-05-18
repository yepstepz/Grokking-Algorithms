// let graph = {
//     start: {
//         A: 6,
//         B: 2,
//     },
//     A: {
//         end: 1
//     },
//     B: {
//         A: 3,
//         end: 5
//     },
//     end: {}
// }
// let parents = {
//     A: 'start',
//     B: 'start',
//     end: null
// }
// let costs = {
//     A: 6,
//     B: 2,
//     end: Infinity
// }
// Набор два:
// let graph = {
//     start : {
//         C: 5,
//         A: 2
//     },
//     A : {
//         C: 8,
//         B: 7
//     },
//     B : {
//         end: 1
//     },
//     C : {
//         D: 4,
//         B: 2
//     },
//     D : {
//         end: 3,
//         B: 6
//     },
//     end : {}
// }
// let parents = {
//     C: 'start',
//     A: 'start',
//     B: null,
//     D: null,
//     end: null
// }
// let costs = {
//     C: 5,
//     A: 2,
//     B: Infinity,
//     D: Infinity,
//     end: Infinity
// }
let checked = [];
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
function find_lowest_cost_node(costs) {
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
 * BFS
 * @param root Object with other objects
 * @returns String with results of searching;
 */
function cheap_way(root) {
    let node = find_lowest_cost_node(costs);
    while (node != null) {
        console.log(costs, parents, checked);
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
        node = find_lowest_cost_node(costs);
    }
    return false;

}
console.log(cheap_way(graph));