
import history from '@/history';
import {connectRouter,RouterState} from 'connected-react-router'
import { HomeState } from './';
import {CartState} from "@/typings/cart";
//我们先构建CombinedState 根状态
export interface MineState {

}
//当前用户信息
interface User {
    username:string;
    email:string;
    avatar:string
}
export enum LOGIN_TYPES{
    UN_VALIDATE = 'UN_VALIDATE',//尚未验证登录状态
    LOGINED='LOGINED',//已经登录
    UN_LOGINED='UN_LOGINED'//的确没有登录
}
export interface ProfileState {
   loginState:LOGIN_TYPES;
   user:User|null;
   error:string|null
}
export  interface CombinedState{
    home:HomeState;
    mine:MineState;
    profile:ProfileState;
    router:RouterState;
    cart:CartState
}
