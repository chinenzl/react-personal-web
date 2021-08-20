import React from 'react';
import './Card.css'
import Icon from '../Icon/Icon'

export default (props) =>
    <div className="card">
        <div className="content-warp">
            <div className="com-card-title">{props.title}</div>
            <div className="com-card-content">{props.children}</div>
        </div>
        <div className="actions">
            <ul>
                <li><span><Icon type='browse' />{props['browseCount']}</span></li>
                <li link='t' onClick={()=>props.action('like',{id:props.id})}><span><Icon type='like' />{props['likeCount']}</span></li>
                <li link='t' onClick={()=>props.action('message',{id:props.id})}><span><Icon type='message' />{props['messageCount']}</span></li>
                {/* <li link='t' onClick={()=>props.action('share',{id:props.id})}><Icon type='share' /></li> */}
                {
                    props['showAction'] &&
                    (
                        <>
                        <li link='t' onClick={()=>props.action('edit',{id:props.id})}><Icon type='editor' /></li>
                        {/* <li link='t' onClick={()=>props.action('trash',{id:props.id})}><Icon type='trash' /></li> */}
                        </>
                    )
                    
                }
            </ul>
            <ul className="update-at">
                <li>编辑于 {props.updateAt}</li>
            </ul>
        </div>
    </div>