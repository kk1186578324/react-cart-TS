import {AnyAction} from 'redux'
import {HomeState} from "@/typings";
import * as actionTypes from '@/store/action-types'
const initialState:HomeState={
    classify:'',
    sliders:[],
    lessons: {
        loading: false,// 如果正在加载中的话，loading=true
        list: [],
        hasMore: true,//刚开始肯定为true,如果服务器还有更多数据，就为true.
        page: 1,//下次去服务器端接数的时候从哪个索引开始拉
        pageSize: 5 //限定每次拉的条数
    }
}
export default function (state:HomeState=initialState,action:AnyAction):HomeState {
    switch(action.type){
        case actionTypes.SET_CURRENT_CATEGORY:
            return {...state,classify:action.payload}
        case actionTypes.GET_SLIDERS:
            return {...state,sliders:action.payload.content}
        case actionTypes.SET_LESSONS_LOADING:
            //redux规定reducer永远要返回一个新的状态
            state.lessons.loading = action.payload;
            return state;
        case actionTypes.SET_LESSONS:

            return {...state,lessons:{
                    ...state.lessons,
                    loading:false,
                    list:[...state.lessons.list,...action.payload.list],
                    hasMore:action.payload.hasMore,
                    page:state.lessons.page+1
                }}
        case actionTypes.REFRESH_LESSONS:
            state.lessons.loading = false;
            state.lessons.list = action.payload.list;
            state.lessons.hasMore = action.payload.hasMore;
            state.lessons.page = 1;
            return state;
        default:
            return state
    }
    return state
}
