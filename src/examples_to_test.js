/**
 * This is Object for isSeller()
 * in ready.js
 */
let followers = {
    Dan: {
        Sofa: {}
    },
    Palla: {
        Tata: {}
    },
    Nasty: {
        Sabina: {}
    },
    Alice: {
        IGOR: {},
        Sergey: {}
    },
    Sergey: {
        Hindi: {}
    },
    Lila: {
        Katy: {
            mango: 'mango'
        },
        HESUS: {
            LINDA: {

            }
        }
    }
};
//граф 1
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
// граф 2
let graph1 = {
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
let parents1 = {
    C: 'start',
    A: 'start',
    B: null,
    D: null,
    end: null
}
let costs1 = {
    C: 5,
    A: 2,
    B: Infinity,
    D: Infinity,
    end: Infinity
}
// граф 3
let graph2 = {
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
let costs2 = {
    A : 10,
    B : Infinity,
    C : Infinity,
    end: Infinity
}
let parents2 = {
    A : 'start',
    B : null,
    C : null,
    end : null
}
// граф 4
let graph3 = {
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
let parents3 = {
    A : 'start',
    B : 'start',
    C : null,
    end: null
}
let costs3 = {
    A: 2,
    B: 2,
    C: Infinity,
    end: Infinity
}