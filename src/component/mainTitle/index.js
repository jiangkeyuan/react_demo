import React from 'react';
import './index.scss'
import HeadPortrait from './HeadPortrait';
const mainTitle = ()=>{
  return (
    <div className='mainTitle'>
      <div className='mainTitleImg'>
        <img src='http://s1.hdslb.com/bfs/static/mult/images/bannerTop.png' alt=''/>
      </div>
      <HeadPortrait></HeadPortrait>
    </div>
  )
}
export default mainTitle;