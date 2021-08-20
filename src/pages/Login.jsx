import React from 'react';
import Parent from '../components/Parent'
import Button from '@@/Button/Button'
import Icon from '../components/Icon/Icon'
import ajax, { api } from '@/utils/Ajax.js';
export default function Login() {
    const handleReg = () => {
        ajax.post(api.register, {
            "params": {
                "email": "admin",
                "password": "admin",
                "name": "管理员",
                "avatar": "18.png",
                "comment": "我是网站管理员！"
            }
        }).then(res => {
            console.log(res)
        })
    }

    const handlelogin = () => {
        ajax.post(api.login, {
            "params": {
                "email": "jasonsf@capturex.fun",
                "password": "capturex.fun",
            }
        }).then(res => {
            console.log(res)
        })
    }
    return (
        <div>
            Login page
            <Parent />
            <Button type="pop">Pop Button</Button>
            <Button type="primary" onClick={handleReg}>Primary Button</Button>
            <Button type="error" onClick={handlelogin}>Primary Button</Button>
            <Button type="warning">Primary Button</Button>
            <Button type="upload"><Icon type='upload' width="40px" height="40px"></Icon></Button>
            <Button type="circle">按钮</Button>
            <Button type="dash">Primary Button</Button>
            <Button type="round">撒dads啊</Button>
            <Button type="link">撒dads啊</Button>

        </div>
    )
}