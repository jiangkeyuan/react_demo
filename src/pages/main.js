import React from 'react';
import Headers from "../component/header/header";
const Mine = (props)=>{
  return (
    <div>
      <Headers history = {props.history}></Headers>
      Mine
    </div>
  )
}
export default Mine;