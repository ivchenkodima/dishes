import { FILTER_KICHEN } from '../../actions/filterSort/filterKichen';

export default function findCafe(state = [], action) {
    switch (action.type) {
        case FILTER_KICHEN:
            return action.payload;
        default:
            return state;
    }

}