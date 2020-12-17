import * as actionTypes from '@/store/action-types'
import {getSliders,getLessons} from "@/api/home";
import {StoreDispatch, StoreGetState} from "@/store";
import {LessonData, Lessons} from "@/typings";
export default {
    setCurrentCategory(currentCategory:string){
        return{
            type:actionTypes.SET_CURRENT_CATEGORY,
            payload:currentCategory
        }
    },
    getSliders(){

        return{
            type:actionTypes.GET_SLIDERS,
            payload:getSliders()
        }
    },
    //获取课程列表数据
    getLessons(){
        return function (dispatch:StoreDispatch,getState:StoreGetState) {
            (async function () {

                let {classify,lessons:{hasMore,page,pageSize,loading}} = getState().home;
                if(!loading&&hasMore){
                    dispatch({ type: actionTypes.SET_LESSONS_LOADING, payload: true });//先把loading设置为true
                  let result:LessonData =  await getLessons<LessonData>(classify,page,pageSize);

                    dispatch({
                        type:actionTypes.SET_LESSONS,
                        payload:{
                            list:result.content,
                            hasMore:result.hasMore
                        }
                    });
                }

            })()
        }
    },

    /**
    * @param
    *获取详情
    * */

    // getLesson(){
    //
    // },
    refreshLessons() {
        return function (dispatch: StoreDispatch, getState: StoreGetState) {
            (async function () {
                let { classify, lessons: { pageSize, loading } } = getState().home;
                if (!loading) {
                    dispatch({ type: actionTypes.SET_LESSONS_LOADING, payload: true });//先把loading设置为true
                    let result: LessonData = await getLessons<LessonData>(classify, 0, pageSize);
                    //调接口加载数据
                    dispatch({
                        type:actionTypes.REFRESH_LESSONS,
                        payload:{
                            list:result.content,
                            hasMore:result.hasMore
                        }
                    });
                }
            })();
        }
    }
}
