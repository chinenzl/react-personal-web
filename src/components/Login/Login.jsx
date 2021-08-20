import React, { useState, useContext } from 'react';
import localStorage from "localStorage";
import Input from '@@/Input/Input'
import Button from '@@/Button/Button';
import ajax, { api } from '@/utils/Ajax.js';
import CommonContext from '@/utils/context';
import dog_1 from '@/assets/images/dog-1.png'
import dog_2 from '@/assets/images/dog-2.png'
import "./Login.css"
import message from '@/components/Message/Message';

const styles = {
  display: 'none'
}


const Login = (props) => {
  const [eyes_visible, setEyesVisible] = useState(true);
  const [form, setForm] = useState({});
  const ctx = useContext(CommonContext);

  const focusPassword = () => {
    setEyesVisible(false);
  }

  const blurPassword = () => {
    setEyesVisible(true);
  }

  const handleLogin = () => {
    console.log('email:' + form['email'])
    console.log('password:' + form['password'])

    if (!form['email'] || form['email'].length==0) {
      message.warning('请输入用户名')
      return
    }

    if (!form['password'] || form['password'].length==0) {
      message.warning('请输入密码')
      return
    }

    ajax.post(api.login, {
      "params": form
    }).then(res => {
      // console.log(res)
      if (res.data.status === 0) {
        const user = res.data.res[0];
        localStorage.setItem("capturexUser", JSON.stringify(user));
        ctx.setUser(user);
        props.goBack();
      } else {
        message.warning('用户名或密码错误！')
      }

    })
  }

  const setData = (k, v) => {
    form[k] = v;
    setForm(form)
  }



  return (
    <div className="login_page" >
      <div className="login-page" >
        <div className="dog">

          <img style={eyes_visible ? {} : styles} src={dog_1} alt="" />
          {
            eyes_visible &&
            <div className="dogEyes">
              <span className="eyes1"></span>
              <span className="eyes2"></span>
            </div>
          }
          <img style={eyes_visible ? styles : {}} src={dog_2} alt="" />
        </div>
        <div className="wrap-login">
          <div className="logo-title">
            <h2>用户名/密码登陆</h2>
          </div>
          <div>
            <Input type="input-normal" placeholder="用户名"
              onChange={e => setData("email", e.target.value)}
            ></Input>
          </div>
          <div>
            <Input type="input-normal password" placeholder="密码"
              onFocus={focusPassword}
              onBlur={blurPassword}
              onChange={e => setData('password', e.target.value)}
            ></Input>
          </div>
          <div className="btn-input">
            <Button type="primary small" onClick={handleLogin}>提交</Button>
            <Button type="normal small" onClick={props.goBack}>返回</Button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Login;