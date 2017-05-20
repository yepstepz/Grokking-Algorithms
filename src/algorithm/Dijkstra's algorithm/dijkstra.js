import relations from "./examples/graph_2.js";
import * as base from "./base.js"

/**
 * Dijkstra's algorithm.
 * Returns cheapest way
 * (examples: "./algorithm/Dijkstra's algorithm/examples/")
 * @param {Object} graph
 * @param {Object} costs of unit's edge
 * @param {Object} unit's parents
 * @returns {string} cheapest way (ex. "start → end")
 */
export default function cheap_way(graph, costs, parents) {
    let checked = [];
    let node = base.find_lowest_cost_node(costs, checked);
    while (node != null) {
        let cost = costs[node];
        let neighbors = Object.assign(graph[node]);
        for (let neighbor in neighbors) {
            let new_cost = cost + neighbors[neighbor];
            if (costs[neighbor] > new_cost) {
                costs[neighbor] = new_cost;
                parents[neighbor] = node;
            }
        }
        checked.push(node);
        node = base.find_lowest_cost_node(costs, checked);
    }
    return base.count_way(parents);
}
