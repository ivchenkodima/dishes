export const SORT_CAFE = 'SORT_CAFE';

export function SortCafe(typeSort) {
    if (typeSort == 'rating'){
        return {type: SORT_CAFE, payload: typeSort};
    } else {
        return ;
    }
}