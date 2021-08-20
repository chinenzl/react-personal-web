import React from 'react';
import NavBar from '../NavBar/NavBar'
import Loading from '@@/Loading/Loading';
import '@/pages/Loader/Loader.css'
const Layout = (props) =>
    <div className="layout">
        <NavBar></NavBar>
        <main>
            {
                props.loading ? (
                    <div className="loading-warp">
                        <Loading></Loading>
                    </div>
                ) : (
                    props.children
                )
            }

        </main>

    </div>


export default Layout;