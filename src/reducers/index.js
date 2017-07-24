import cafes from './Cafe'
import dishes from './dishes'
import geoLocation from './GeoLocation'
import sort from './filterSort/Sort'
import findCafe from './filterSort/findCafe'
import filterKichen from './filterSort/filterKichen'
import minOrder from './filterSort/minOrder'
import openNow from './filterSort/openNow'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = {
    cafes,
    dishes,
    form: formReducer,
    geoLocation,
    findCafe,
    filterKichen,
    openNow,
    minOrder,
    sort
}
const reducer = combineReducers(reducers)

export default reducer;