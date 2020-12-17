import React,{useState,CSSProperties} from 'react';
let logo = require('../../../../assets/images/header.png')
import classnames from 'classnames';
import {Transition} from 'react-transition-group'
import './index.less'
import {
    UnorderedListOutlined
} from '@ant-design/icons';
//如果是用require加载的话，返回值得defult属性才是那个图片地址
//如果非要用import如何解决
const duration = 1000;
//CSSProperties行内样式的对象定义
const defaultStyle:any = {
    transtion:`all ${duration} ease-in-out`,
    opacity:0,
    display:'none'
}
//在不同的阶段给不同的样式
//
interface TransitionStyles {
    entering:CSSProperties,
    entered:CSSProperties,
    exiting:CSSProperties,
    exited:CSSProperties,
}
const transitionStyles:TransitionStyles={
    entering:{opacity: 1,display: 'block'},
    entered:{opacity: 1,display: 'block'},
    exiting:{opacity: 0,display: 'none'},
    exited:{opacity: 0,display: 'none'}

}
interface Props {
   currentCategory:string;//当前选中的分类 此数据会放在redux仓库中
   setCurrentCategory:(CurrentCategory:string)=>any;
    refreshLessons: Function
}
function HomeHeader(props:Props) {
   let [isMenuVisible,setIsMenuVisible] = useState(false)
   const setCurrentCategory = (event:any)=>{
        let target:any = event.target;
         let category = target.dataset.category
        props.setCurrentCategory(category);
        props.refreshLessons();
        setIsMenuVisible(false)
   }
   return(
       <header className="home-header">
          <div className="logo-header">
              <img alt=""/>
              <UnorderedListOutlined className="unorder-list" onClick={()=>setIsMenuVisible(!isMenuVisible)}/>
          </div>
           <Transition in={isMenuVisible} timeout={duration}>
               {
                   (state:keyof TransitionStyles)=>(
                       <ul className="category"
                           onClick={setCurrentCategory}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}
                       >
                           <li data-category="" className={classnames({active:props.currentCategory===''})} >全部课程</li>
                           <li data-category="React" className={classnames({active:props.currentCategory==='React'})} >react</li>
                           <li data-category="Vue" className={classnames({active:props.currentCategory==='Vue'})} >vue课程</li>
                           <li data-category="Webpack" className={classnames({active:props.currentCategory==='Webpack'})} >webpack课程</li>
                       </ul>
                   )
               }
           </Transition>
       </header>
   )
}
export default HomeHeader
