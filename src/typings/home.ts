import { Slider,Lesson } from './';
export interface Lessons {
    loading: boolean;// 如果正在加载中的话，loading=true
    hasMore: boolean,//刚开始肯定为true,如果服务器还有更多数据，就为true.
    page: number,//下次去服务器端接数的时候从哪个索引开始拉
    pageSize: number //限定每次拉的条数
    list:Lesson[]
}
export interface HomeState {
    classify: string;
    sliders: Slider[];
    lessons:Lessons
}
