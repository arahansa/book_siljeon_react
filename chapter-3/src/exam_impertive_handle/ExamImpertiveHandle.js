import React, {forwardRef, useCallback, useImperativeHandle, useRef, useState} from 'react';
import Child from "./Child";



const ExamImpertiveHandle = () => {
  const childRef = useRef();

  const onClick = useCallback(()=>{
    if(childRef.current){
      childRef.current.addAge(5);
    }
  }, []);

  return (
    <div>
      <Child ref={childRef}></Child>
      <div>
        <button onClick={onClick}>나이 즈악!</button>
      </div>
    </div>
  )
}

export default ExamImpertiveHandle;
