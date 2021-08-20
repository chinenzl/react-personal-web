import React, { useState } from 'react';
import Button from '@@/Button/Button';
import Avatar from '@@/Avatar/Avatar';
import AvatarImg from '@/assets/images/avatars/5.png'
import './Comments.css'

export default props => {
    const styles = {
        borderColor: 'var(--color-1)'
    }

    const [showBtn, setShowBtn] = useState(false);
    const [comment, setComment] = useState('')



    const handleClick = () => {
        // console.log(comment)
        props.onPublish(comment)
        setComment('')

    }

    // const RandomNum = (Min,Max) =>{
    //     let Range = Max - Min;   
    //     let Rand = Math.random();   
    //     return(Min + Math.round(Rand * Range)); 
    // }

    // const AvatarImg = useMemo(()=>{
    //     const num = RandomNum(1,28);

    //     return require(`@/assets/images/avatars/${num}.png`)

    // })

    return (
        <div className="com-comments">
            <div className="com-comments-title">
                <span>{props.comments.length}条评论</span>
            </div>
            <div className="com-comments-input">
                <input
                    type="text"
                    style={showBtn ? styles : {}}
                    placeholder="写下你的评论……"
                    onChange={e => { setComment(e.target.value) }}
                    value={comment}
                    onBlur={e => e.target.value.length === 0 && setShowBtn(false)}
                    onFocus={e => setShowBtn(true)}
                />
                {
                    showBtn &&
                    <Button type="primary" onClick={handleClick}>发布</Button>
                }

                {/* <button className="com-comments-button">发布</button> */}
            </div>
            <div className="com-comments-list">
                <ul>
                    {
                        props.comments.map((comment, i) => (
                            <li key={i.toString()}>
                                <div>
                                    <span>
                                        <Avatar image={AvatarImg} />
                                        {comment.user_id === -1 && "游客"}
                                    </span>
                                    <span>
                                        {comment.comment_date}
                                    </span>
                                </div>
                                <div>
                                    {comment.comment_content}
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}