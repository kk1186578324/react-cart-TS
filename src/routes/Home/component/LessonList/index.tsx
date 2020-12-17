import React,{useState,PropsWithChildren,useEffect,forwardRef} from 'react'
import './index.less'
import {Lessons} from '@/typings'
import {
    MenuOutlined
} from '@ant-design/icons';
import {config} from "@/config";
import {Card,Button,Alert,Skeleton} from 'antd'
import {Link} from 'react-router-dom'
type Props = PropsWithChildren<{
    lessons:Lessons[];
    getLessons:()=>void;
    container:any
}>
function LessonList(props:Props,forwardRef:any) {
    const [_,forceUpdate] = useState(0);

   useEffect(()=>{
       if (props.lessons.list.length == 0) {
           props.getLessons();
       }
       forwardRef.current = ()=>forceUpdate(x=>x+1)
   },[]);
    let start; //开始真正渲染的起始索引，从他开始向下渲染3条数据，除此以外的卡片都用空的DIV撑开发
    let rootFontSize = parseFloat(document.documentElement.style.fontSize)
      console.log(rootFontSize)
     if(props.container.current){
        let scrollTop = props.container.current.scrollTop;
        console.log(scrollTop)
        start = Math.floor((scrollTop-(4.266667+1.33)*rootFontSize)/(6.66667*rootFontSize))

         console.log(start)
     }
   return (
       <section className="lesson-list">
           <h2>
               全部课程
               <MenuOutlined />
           </h2>
           <Skeleton loading={props.lessons.loading&&props.lessons.list.length===0}>
           {
               props.lessons.list.map((item:Lesson,index:number)=>(

                   index>=start&&index<=start+3?(
                   <Link key={item.id} to={{pathname:`/detail/${item.id}`,state:item}}>
                   <Card
                       hoverable={true}
                       key={index}
                       style={{ width: '100%' }}
                       cover={<img src={`${config.img_url}${item.image}`} />}
                   >
                       <Card.Meta title={item.title} description={`价格:¥${item.price}元`} />
                   </Card>
                   </Link>):<div key={item.id} style={{height:`${6.66667*rootFontSize}px`}}></div>
               ))
           }
           </Skeleton>
           {
               props.lessons.hasMore ?
                   <Button onClick={props.getLessons}
                           style={{width: "100%"}}
                           type="ghost"
                           loading={props.lessons.loading}
                   >
                       {props.lessons.loading?'':'加载更多'}
                   </Button>:
                   <Alert style={{textAlign: 'center'}} message=" 到底了"   type="warning"/>
           }
       </section>

   )
}
export default forwardRef(LessonList)
