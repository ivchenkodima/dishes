export const FILTER_KICHEN = 'FILTER_KICHEN';

export function filterKichenAction(searchName) {
    return {type: FILTER_KICHEN, payload: {search: searchName}};
}
