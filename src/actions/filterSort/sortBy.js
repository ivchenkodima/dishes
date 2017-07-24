export const SORT_CAFE = 'SORT_CAFE';

export function sortList(searchName) {
    return {
        type: SORT_CAFE,
        payload: {
            status: true,
            sortBy: searchName
        }
    };
}