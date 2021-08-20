import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import SearchBar from '@@/SearchBar/SearchBar'
import Avatar from '@@/Avatar/Avatar'
import Icon from '@@/Icon/Icon'
import Login from '@@/Login/Login'
import Logout from '@@/Logout/Logout'
import CommonContext from '@/utils/context';
import Logo from '@/assets/images/logo3.png'
import "./NavBar.css"
const NavBar = (props) => {
    let history = useHistory();
    const [searchText, setSearchText] = useState('');
    const [visible, setVisible] = useState(false);

    const ctx = useContext(CommonContext);

    const changeVisible = () => {
        setVisible(!visible);
    }

    const handleSearch = () => {
        searchText.length === 0 ||
            history.push({
                pathname: `/search/${searchText}`,
            })
        setSearchText('');
    }

    return (
        <div className="navbar clearfix">
            <nav className='com-nav'>
                <ul>
                    <li className='com-nav-logo'><img src={Logo} alt="" /><span>云兮小栈</span></li>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
                <ul>
                    <li>
                        <SearchBar
                            onChange={e => setSearchText(e.target.value)}
                            onSearch={handleSearch}
                            value={searchText}
                        />
                    </li>
                    {
                        ctx.user.name &&
                        <li><Link to="/new-article"><Icon type="write"></Icon></Link></li>
                    }


                    {/* <li><Avatar imgLink={headPic} /></li> */}
                    <li><Avatar image={require(`@/assets/images/avatars/${ctx.user.avatar ? ctx.user.avatar : '0.png'}`)} onClick={changeVisible} /></li>
                </ul>
            </nav>

            {
                visible &&
                (ctx.user.name ?
                    <Logout goBack={changeVisible} /> :
                    <Login goBack={changeVisible}></Login>)
            }
        </div>

    )
}
export default NavBar;