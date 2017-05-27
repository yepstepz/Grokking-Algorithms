import is_person_seller from './base.js';
/**
 * BFS
 * @param root Object with other objects
 * @returns String with results of searching;
 */
export default function isSeller(root) {
    var queue = root;
    while (Object.keys(queue).length != 0) {
        for ( let item in queue ){
            if( !is_person_seller(queue[item]) ){
                let node = queue[item];
                queue = Object.assign(queue, node);
            } else {
                return "HERE COMES DATTT BOIII IN " + item;
            }
            delete queue[item];
        }
    }
    return "NOT AT ALL";
}