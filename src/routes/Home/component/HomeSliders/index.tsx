import React,{useState,PropsWithChildren,useEffect} from 'react'
import './index.less'
import {Carousel} from 'antd';
import { Slider } from "@/typings";
import {config} from '@/config'
type Props = PropsWithChildren<{
    sliders:Slider[],
    getSliders:()=>void
}>

function HomeSliders(props:Props) {

    useEffect(()=>{
        if(props.sliders.length===0){
            let result = props.getSliders();
            console.log('HomeSliders',props.sliders, result);
        }
    },[])
    return(
        <Carousel autoplay effect="scrollx" draggable={false} touchMove={false} >
            {
                props.sliders.map((item:Slider,index:number)=>(
                     <div key={index}>
                         <img src={`${config.img_url}${item.url}`} alt=""/>
                     </div>
               ))
            }
        </Carousel>
    )
}
export default HomeSliders
