import React,{PropsWithChildren,useRef,useEffect} from 'react';
import './index.less'
import {RouteComponentProps} from 'react-router-dom'
import {connect} from 'react-redux';
import HomeHeader from './component/HomeHeader'
import {CombinedState,HomeState} from "@/typings";

import mapDispatchToProps from "@/store/actions/home";
import HomeSliders from './component/HomeSliders'
import LessonList from './component/LessonList'
import {loadMore,downRefresh} from "@/utils/loadMore";
import { Spin } from 'antd';

type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps>
function Home(props:Props) {
    let homeContainer = useRef<HTMLDivElement>(null)
    let lessonList = useRef(null)
    useEffect(()=>{
        loadMore(homeContainer.current,props.getLessons)
        downRefresh(homeContainer.current, props.refreshLessons);
        homeContainer.current.addEventListener('scroll',lessonList.current)
        if (props.lessons.list.length > 0) {
            homeContainer.current.scrollTop = parseFloat(localStorage.getItem('homeScrollTop'));
        }
        return () => {
            localStorage.setItem('homeScrollTop', homeContainer.current.scrollTop + '');
        }
    },[])
    return(
        <>
            <HomeHeader
                currentCategory={props.classify}
                setCurrentCategory={props.setCurrentCategory}
                refreshLessons={props.refreshLessons}
            />
            <div className="refresh-loading">
                <Spin size="large"/>
            </div>
            <div className="home-container" ref={homeContainer} >
                <HomeSliders
                    sliders={props.sliders}
                    getSliders={props.getSliders}
                />
                <LessonList
                    ref={lessonList}
                    container={homeContainer}
                    lessons={props.lessons}
                    getLessons={props.getLessons}
                />
            </div>
        </>
    )
}
const mapStateToProps = (state:CombinedState):HomeState => state.home
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)

/**
* @param
* 因为此组件是由路由渲染出来的
 * 所以属性对象会包括路由属性
 * 另外此组件需要连接仓库
* */
