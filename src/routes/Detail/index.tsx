import React,{useState,useEffect,PropsWithChildren,useCallback}from 'react'
import {connect} from 'react-redux'
import {CombinedState, Lesson} from '@/typings';
import {RouteComponentProps} from 'react-router-dom'
import { StaticContext } from 'react-router';
import Nav from "@/components/Nav";
import {Card,Button} from 'antd'
import {config} from "@/config";
import {getLesson} from "@/api/home";
import {GetLessonData}from "@/typings"
import actions from '@/store/actions/cart'
import './index.less'
import {
    ShoppingCartOutlined
} from '@ant-design/icons';
const { Meta } = Card;
interface Params{
    id:string
}
type Props = PropsWithChildren<RouteComponentProps<Params,StaticContext,Lesson>>& typeof actions

function Detail(props:Props) {
    let [lesson,setLesson] = useState<Lesson>({} as Lesson)
    useEffect(()=>{
        (async function () {
            let lesson = props.location.state;
            if(!lesson){
                let result =   await getLesson<GetLessonData>(props.match.params.id)

                if(result.success){
                    lesson = result.content
                }
            }
            setLesson(lesson)
        })()


    },[])
    const addCartItem =useCallback((lesson:Lesson)=>{
        let cover:HTMLDivElement = document.querySelector('.ant-card-cover');
        let coverLeft = cover.getBoundingClientRect().left;//距离左边的距离
        let coverTop = cover.getBoundingClientRect().top;//顶部距离
        let coverWidth = cover.offsetWidth;//购物车图标宽度
        let coverHeight = cover.offsetHeight;//购物车图标高度

        let cart:HTMLAreaElement = document.querySelector('a .anticon.anticon-shopping-cart');
        let cartWidth = cart.offsetWidth;//购物车图标宽度
        let cartHeight = cart.offsetHeight;//购物车图标高度
        let cartRight = cart.getBoundingClientRect().right//距离右边的距离
        let cartBottom= cart.getBoundingClientRect().bottom//距离顶部的距离

        let clonedCover:HTMLDivElement = cover.cloneNode(true) as HTMLDivElement;
        clonedCover.style.cssText = (
            `
              z-index:1000;
              opacity:.8;
              position:fixed;
              width:${coverWidth}px;
              height:${coverHeight}px;
              top:${coverTop}px;
              left:${coverLeft}px;
              transition: all 2s ease-in-out;
            `
        )
        document.body.appendChild(clonedCover);
        setTimeout(() => {
            clonedCover.style.left = `${cartRight - cartWidth / 2}px`;
            clonedCover.style.top = `${cartBottom - cartHeight / 2}px`;
            clonedCover.style.width = '0px';
            clonedCover.style.height = '0px';
            clonedCover.style.opacity = '.5';
        }, 0);
        setTimeout(() => {
            clonedCover.parentNode.removeChild(clonedCover);
        }, 2000);
       props.addCartItem(lesson)
    },[])
    return(
        <>
        <Nav history={props.history}>课程详情</Nav>
        <Card
            hoverable
            style={{width:'100%'}}
            cover={<img src={`${config.img_url}${lesson.image}`}/>}
        >
        <Meta
         title={lesson.title}
          description={
              <>
              <p>{`价格:￥${lesson.price}元`}</p>
              <p>
              <Button
               icon={<ShoppingCartOutlined />}
               className="add-cart"
               onClick = {()=>addCartItem(lesson)}
              >
              加入购物车
              </Button>

              </p>
              </>
          }
        />
        </Card>
        </>
    )
}

export default connect(
    (state: CombinedState): CombinedState => state,
    actions
)(Detail);
