let graph = {
        cost: 0,
        A : {
            checked: false,
            cost: 6,
            finish : {
                checked: false,
                end: 1,
                cost: 1
            }
        },
        B : {
            checked: false,
            cost: 2,
            A : {
                checked: false,
                cost: 3,
                finish : {
                    checked: false,
                    end: 1,
                    cost: 1
                }
            },
            finish : {
                checked: false,
                end: 1,
                cost: 5
            }
        }
}
/**
 * Checks if Object contains 'end'
 * @param obj Object
 * @returns Bool with result
 */
function is_finished(obj) {
    if ( !!obj['end'] ) {
        return true;
    }
    return false;
}

/**
 * BFS
 * @param root Object with other objects
 * @returns String with results of searching;
 */
function cheap_way(root) {
    var queue = root;
    while (Object.keys(queue).length != 0) {
        let costs = [];
        for ( item in queue ){
                let way;
                let min = item.cost;
                if ( !item.checked && !!item.indexOf('cost') ){
                    costs.push(queue[item]);
                }
                console.log(costs);
        }
        return false;
    }

}
console.log(cheap_way(graph));