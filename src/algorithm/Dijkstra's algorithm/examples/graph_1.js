let graph = {
    start: {
        A: 6,
        B: 2,
    },
    A: {
        end: 1
    },
    B: {
        A: 3,
        end: 5
    },
    end: {}
}
let parents = {
    A: 'start',
    B: 'start',
    end: null
}
let costs = {
    A: 6,
    B: 2,
    end: Infinity
}
export default {graph, parents, costs};