import React, { useState } from 'react'
import style from './style.module.scss'
import {FiEye, FiEyeOff } from "react-icons/fi";
const InputCommon = ({label, type, isRequired = false }) => {
    const {container,labelInput , boxInput, boxIcon} = style;
    const [showPassword,setShowPassword] = useState(false);
    
    const isPassword = type === 'password';

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
      
    }

    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type; 
  return (
    <div className={container}>
        <div className={labelInput}>{label}{isRequired && <span> *</span>}</div>  
        <div className={boxInput}>
            <input type={isShowTextPassword} name="" id="" />{isPassword && (
              <div className={boxIcon} onClick={handleShowPassword}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
              </div>
            )}
        </div>
    </div>
  )
}

export default InputCommon