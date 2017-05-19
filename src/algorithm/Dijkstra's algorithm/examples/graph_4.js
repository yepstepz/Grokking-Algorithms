let graph = {
    start : {
        A : 2,
        B : 2
    },
    A : {
        C : 2,
        end : 2
    },
    B : {
        A : 2,
    },
    C : {
        end : 2
    },
    end : {}
}
let parents = {
    A : 'start',
    B : 'start',
    C : null,
    end: null
}
let costs = {
    A: 2,
    B: 2,
    C: Infinity,
    end: Infinity
}