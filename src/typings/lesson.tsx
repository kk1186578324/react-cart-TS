export interface Lesson{
    "title":String;
    "author":String;
    "fav_nums":Number;
    "like_status":Number;
    "price":String;
    "score":Number;
    "classify":String;
    "image":String;
    "id":Number;
    "pubdate":String;
    "validity":String;
}

export interface LessonData {
    success:boolean;
    content: Lesson[];//当页的数据
    hasMore: boolean;//后面是否还有更多
}
export interface GetLessonData {
    success:boolean;
    content: Lesson;//详情的数据
}
