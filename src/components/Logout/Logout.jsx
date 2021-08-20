import React, { useContext } from 'react';
import localStorage from "localStorage";
import CommonContext from '@/utils/context';
import './Logout.css'


export default (props) => {
    const { user, setUser } = useContext(CommonContext);
    let isOver = false;

    const handleLogout = () => {
        setUser({});
        localStorage.removeItem("capturexUser");
        props.goBack()
    }

    const close = () => {
        isOver || props.goBack();
    }

    const handleMouseOut = () => {
        isOver = false
        setTimeout(() => close(), 2000);
    }
    return (
        <div className="com-logout-wrap"
            onMouseOver={e => isOver = true}
            onMouseOut={handleMouseOut}
        >
            <ul>
                <li>欢迎{user.name}!</li>
                <li onClick={handleLogout}>退出</li>
            </ul>
        </div>
    )
}
