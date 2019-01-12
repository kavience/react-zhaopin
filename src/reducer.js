import {combineReducers} from 'redux';
import {user} from './redux/user.redux';
import {nav} from './redux/nav.redux';
import {message} from './redux/message.redux';

export default combineReducers({user, nav, message});