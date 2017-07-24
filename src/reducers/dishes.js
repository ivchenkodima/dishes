import { DISHES } from '../data';
import { ADD_DISHES, EDIT_DISHES, DELETE_DISHES } from '../actions/dishes';

export default function dishesReducers (state = DISHES, action) {

    switch (action.type) {
        case ADD_DISHES:
            return [
                ...state,
                action.payload
            ];
        case DELETE_DISHES:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case EDIT_DISHES:
            const index = action.index;
            state[index] = action.payload;
            return [
                ...state,
            ];
        default:
            return state;
    }

}
