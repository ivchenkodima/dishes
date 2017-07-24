export const OPEN_NOW_FILTER = 'OPEN_NOW_FILTER';

export function openNowFilter(searchName) {
    return {type: OPEN_NOW_FILTER, payload: {status: searchName}};
}
