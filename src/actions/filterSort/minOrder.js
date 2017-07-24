export const MIN_ORDER = 'MIN_ORDER';

export function filterMinOrderAction(searchName) {
    return {type: MIN_ORDER, payload: {search: searchName}};
}
