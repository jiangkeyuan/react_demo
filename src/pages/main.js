import React from 'react';
import Headers from "../component/header/header";
import MainTitle from '../component/mainTitle/index';
export const Mine = (props)=>{
  return (
    <div>
      <Headers history = {props.history}></Headers>
      <MainTitle value={props.history}></MainTitle>
    </div>
  )
}