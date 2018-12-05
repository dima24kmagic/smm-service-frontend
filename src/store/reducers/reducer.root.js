import {combineReducers} from 'redux'
import clean from './reducer.clean'
import survey from './reducer.survey'
export default combineReducers({
    clean,
    survey
})
