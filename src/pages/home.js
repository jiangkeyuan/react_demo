import React from 'react';
import Headers from "../component/header/header";
import TitleScroll from '../component/headerScroll/index';
import Swiper from '../component/Swiper/Swiper';
import Content from '../component/content/content.js';
// import noScroll from '../until/noScroll';
const Home = (props) => {
  // useEffect(()=>{
  //   let ids = document.getElementById('home');
  //   new noScroll(ids);
  // })
  return (
    <div id = "home">
      <Headers history = {props.history}></Headers>
      <TitleScroll></TitleScroll>
      <Swiper></Swiper>
      <Content></Content>
      
    </div>
  )
}
export default Home;