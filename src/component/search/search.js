import React from 'react';
import { Icon,Input } from 'antd';
import './search.scss';
const searchValue = (e)=>{
  console.log(e.currentTarget.value)
}
const gotoBack = (history)=>{
  history.history.history.goBack();
}
const searchTitle = (history)=>{
  return (
    <div className='content'>
      <div className = 'search'>
        <div className='searchTitle'>
          <Icon type="search" className = 'searchIcon'/>
          <Input placeholder="Basic usage" onChange={(e)=>searchValue(e)} className='searchInput'/>
        </div>
        <div className = 'gotoBack' onClick={()=>{gotoBack(history)}}>
          取消
        </div>
      </div>
    </div>
    
  )
}
export default searchTitle;