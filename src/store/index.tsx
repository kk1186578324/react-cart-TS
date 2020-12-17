import {createStore,applyMiddleware,Dispatch} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'
import rootReducer from './reducers'
import { CombinedState } from '@/typings';
import history from '@/history'
// let store = createStore();
//promise和thunk中间件
//promise 可让我们派发promise，thunk让我们可以派发函数

let store = applyMiddleware(routerMiddleware(history), promise, thunk, logger)(createStore)(rootReducer);
export type StoreDispatch = Dispatch;
export type StoreGetState = () => CombinedState;

export default store
