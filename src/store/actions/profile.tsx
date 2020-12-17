import * as actionTypes from '@/store/action-types'
import {validate,register,login} from "@/api/profile";
import { message } from 'antd';
import { push } from 'connected-react-router';
export default {
      validate(){
          return{
              type:actionTypes.VALIDATE,
              payload: validate()
          }
      },
     logout(){
          return function (dispatch:any) {
              sessionStorage.removeItem('access_token');
              dispatch(push('/login'));
          }
     },
    register(values: RegisterPayload) {
        return function (dispatch: any, getState: any) {
            (async function () {
                try {
                    //AxiosResponse data才是响应体
                    let result: RegisterData = await register(values);
                    if (result.success) {
                        dispatch(push('/login'));
                    } else {
                        message.error('注册失败');
                    }
                } catch (error) {
                    message.error('注册失败');
                }
            })();
        }
    },
    login(values: LoginPayload) {
        return function (dispatch: any, getState: any) {
            (async function () {
                try {
                    //AxiosResponse data才是响应体
                    let result: LoginData = await login(values);

                    if (result.success) {
                        sessionStorage.setItem('access_token', result.data);
                        dispatch(push('/profile'));
                    } else {
                        message.error('登录失败');
                    }
                } catch (error) {
                    message.error('登录失败');
                }
            })();
        }
    },
}
/**
* @param
*JWT如何退出登录
 * 客户端把本地的token删了就退出登陆了
* */
