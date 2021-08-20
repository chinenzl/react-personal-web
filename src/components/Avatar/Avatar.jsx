import React from 'react';
import "./Avatar.css"
import AvatarImg from '../../assets/images/Avatar.png';

const Avatar = (props) => {
    const styles = {
        cursor: 'pointer'
    }

    const handleClick = () => {
        props.onClick && props.onClick();
    }

    return (
        <span className="avatar">
            <img src={props.image || AvatarImg} style={props.onClick && styles} onClick={handleClick} alt="" />
        </span>
    )
}


export default Avatar;