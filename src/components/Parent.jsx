import React, { useState } from 'react';
import Child from '../components/Child'
export default function Parent() {
    const [msg, setMsg] = useState('')
    const changeMsg = (str) => { setMsg(str) }

    return (
        <div>
            <p>
                父组件
                子组件传值是：{msg}
            </p>
            <hr />
            <Child chgMsg={changeMsg} />
        </div>
    )
}