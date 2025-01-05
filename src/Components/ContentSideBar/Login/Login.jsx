import InputCommon from '@Components/InputCommon/InputCommon'
import React from 'react'
import style from "./style.module.scss"
import Button from '@Components/Button/Button';
const Login = () => {
    const{container,title,boxRememberMe,lostPw} =style;
  return (
    <div className={container}>
        <div className={title}>SIGN IN</div>
        <InputCommon label={'email'} isRequired={true}/>
        <InputCommon type={'password'}  label={'password'} isRequired={true} />
        <div className={boxRememberMe}> 
          <input type="checkbox" name="" id="" /><span>Remember Me</span>
        </div>
        <Button content={'Sign in'}/>
        <div className={lostPw}>Lost your password</div>
    </div>
  )
}

export default Login