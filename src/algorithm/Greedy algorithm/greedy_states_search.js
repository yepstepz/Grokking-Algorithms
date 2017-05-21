import * as list from "./examples/greedy_states_search_example.js";
import * as base from "./base.js"

/**
 * Greedy algorithm of station's searching
 * @param {Array} states_needed
 * @param {Object} stations
 * @returns {Array} selected stations
 */
export default function greedy_stations_search(states_needed, stations){
    let final_stations = [];
    while (states_needed.length > 0) {
        let states_covered = [];
        let best_station = null;
        for (let station in stations){
            let covered = base.find_conjunction( states_needed, stations[station]);
            if ( covered.length > states_covered.length){
                best_station = station;
                states_covered = covered;
            }
        }
        states_needed = base.find_completment(states_needed, states_covered);
        final_stations.push(best_station);
    }
    return final_stations;
}