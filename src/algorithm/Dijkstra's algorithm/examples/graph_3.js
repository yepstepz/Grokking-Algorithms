let graph = {
    start: {
        A : 10
    },
    A : {
        B : 20
    },
    B : {
        end : 30,
        C : 1
    },
    C : {
        A : 1
    },
    end : {}
}
let costs = {
    A : 10,
    B : Infinity,
    C : Infinity,
    end: Infinity
}
let parents = {
    A : 'start',
    B : null,
    C : null,
    end : null
}