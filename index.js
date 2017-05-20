import "./src/algorithm/Dijkstra's algorithm/examples/graph_2.js";
import "./src/algorithm/Dijkstra's algorithm/dijkstra.js";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
function createUnit(x, y) {
    let r = 20;
    ctx.beginPath();
    ctx.lineWidth   = 2;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.stroke();
    return {x : x, y : y};
}
let area = {
    w: 300,
    h: 150
}
let start_unit = createUnit(22, (area.h)/2);
console.log(cheap_way(graph, costs, parents));