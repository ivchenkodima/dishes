import { OPEN_NOW_FILTER } from '../../actions/filterSort/filterOpenNow';

export default function findCafe(state = [], action) {
    switch (action.type) {
        case OPEN_NOW_FILTER:
            return action.payload;
        default:
            return state;
    }

}