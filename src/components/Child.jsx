import React from 'react';


export default function Child(props) {

    return (
        <div>
            子组件
            <input type='text' onChange={(e) => props.chgMsg(e.target.value)} />
            <button onClick={() => props.chgMsg('name')}>点击</button>
        </div>
    )
}