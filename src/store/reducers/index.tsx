import {ReducersMapObject,AnyAction,Reducer} from 'redux'
import {connectRouter,RouterState} from 'connected-react-router'
import home from './home';
import mine from './mine';
import cart from './cart';
import profile from './profile';
import history from '@/history';
import {CombinedState} from '@/typings/state'
import produce from 'immer'
import {combineReducers} from 'redux-immer'

let reducers:ReducersMapObject<CombinedState,AnyAction> = {
    home,
    mine,
    profile,
    cart,
    router:connectRouter(history)
}
const rootReducer: Reducer<CombinedState, any> = combineReducers<CombinedState>(produce, reducers);
export default rootReducer
