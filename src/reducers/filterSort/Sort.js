import { SORT } from '../../data';
import {SORT_CAFE} from '../../actions/filterSort/sortBy';

export default function SortCafe(state = SORT, action) {

    switch (action.type) {
        case SORT_CAFE:
            return action.payload

        default:
            return state;
    }

}
