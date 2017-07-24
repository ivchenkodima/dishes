export const FIND_CAFE_SEARCH = 'FIND_CAFE_SEARCH';

export function findCafeAction(searchName) {
    return {type: FIND_CAFE_SEARCH, payload: searchName};
}

// export const setVisibilityFilter = filter => {
//     return {
//         type: 'SET_VISIBILITY_FILTER',
//         filter
//     }
// }