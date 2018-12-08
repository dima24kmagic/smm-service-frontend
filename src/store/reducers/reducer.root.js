import {combineReducers} from 'redux'
import clean from './reducer.clean'
import surveys from './reducer.survey'
export default combineReducers({
    clean,
    surveys
})
