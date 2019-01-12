import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducer'

import thunk from 'redux-thunk';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

export default store;