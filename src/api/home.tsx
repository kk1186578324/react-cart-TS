import request from './index'

import {SliderData,LessonData} from "@/typings";

export function getSliders() {
    return request.post<SliderData,SliderData>(`/banner/list`)
}
/**
* @param
*currentCategory  获取哪个分类下面的课程列表 all 是全部 react vue
 * page
 * limit
* */
export function getLessons<T>(
    classify:string = '',
    page:number,
    pageSize:number
) {
    return request.post<LessonData,LessonData>(`/books/list`,{
        classify,
        page,
        pageSize
    })
}
export function getLesson<T>(id:string) {
    return request.get<T,T>(`/books/detail/${id}`)
}
