import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import LoggedInReducer from './auth';
import SendCoinReducer from './currentCoin';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const rootReducer = combineReducers({
    LoggedInReducer, SendCoinReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;
