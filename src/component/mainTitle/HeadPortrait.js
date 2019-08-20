import React from 'react';
import './headerPortrait.scss';
import history from '../../store/history';
const showInformation = ()=>{
  console.log(history);
}
const HeadPortrait = ()=>{
  return (
    <div>
      <div className='info_face'>
        <div className='Info_face_img'>
          <img src='http://static.hdslb.com/images/member/noface.gif' alt=''/>
        </div>
        <div className='information' onClick={()=>showInformation()}>账号资料</div>
      </div>
    </div>
  )
}
export default HeadPortrait;