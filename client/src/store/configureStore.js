import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import LoggedInReducer from './auth';
import SendCoinReducer from './currentCoin';
import UpdateFundsReducer from './accountBalance';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const rootReducer = combineReducers({
    LoggedInReducer, SendCoinReducer, UpdateFundsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;
