export let graph = {
    start : {
        C: 5,
        A: 2
    },
    A : {
        C: 8,
        B: 7
    },
    B : {
        end: 1
    },
    C : {
        D: 4,
        B: 2
    },
    D : {
        end: 3,
        B: 6
    },
    end : {}
}
export let parents = {
    C: 'start',
    A: 'start',
    B: null,
    D: null,
    end: null
}
export let costs = {
    C: 5,
    A: 2,
    B: Infinity,
    D: Infinity,
    end: Infinity
}