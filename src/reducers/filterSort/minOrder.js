import { MIN_ORDER } from '../../actions/filterSort/minOrder';

export default function minOrder(state = [], action) {
    switch (action.type) {
        case MIN_ORDER:
            return action.payload;
        default:
            return state;
    }

}