import { FIND_CAFE_SEARCH } from '../../actions/filterSort/findCafeAction';

export default function findCafe(state = [], action) {
    switch (action.type) {
        case FIND_CAFE_SEARCH:
            return [
                action.payload
            ];
        default:
            return state;
    }

}