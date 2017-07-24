export const DISHES = 'DISHES';

export const ADD_DISHES = 'ADD_DISHES';
export const EDIT_DISHES = 'EDIT_DISHES';
export const DELETE_DISHES = 'DELETE_DISHES';
export const FIND_DISHES = 'FIND_DISHES';

export function addDishes(dishesName) {
    return {type: ADD_DISHES, payload: dishesName};
}

export function deleteDishes(index) {
    return {type: DELETE_DISHES, index: index};
}

export function editDishes(dishesEdit, index) {
    return {type: EDIT_DISHES, payload: dishesEdit, index: index};
}

export function findDishes(dishesName) {
    return {type: FIND_DISHES, payload: dishesName};
}