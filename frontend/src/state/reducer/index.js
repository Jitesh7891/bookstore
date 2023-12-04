import {combineReducers} from 'redux'
import usereducer from './userReducer'

const reducers=combineReducers({
    store:usereducer
})

export default reducers

