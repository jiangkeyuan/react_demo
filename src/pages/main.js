import React,{useEffect} from 'react';
import Headers from "../component/header/header";
import MainTitle from '../component/mainTitle/index';
const Mine = (props)=>{
  useEffect(()=>{
    console.log(props.history)
  },[props.history])
  return (
    <div>
      <Headers history = {props.history}></Headers>
      <MainTitle></MainTitle>
    </div>
  )
}
export default Mine;