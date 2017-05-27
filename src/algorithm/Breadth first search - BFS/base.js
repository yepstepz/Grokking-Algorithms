/**
 * Checks if Object contains 'mango'
 * @param obj Object
 * @returns Bool with result
 */
export default function is_person_seller(obj) {
    if ( !!obj['mango'] ) {
        return true;
    }
    return false;
}