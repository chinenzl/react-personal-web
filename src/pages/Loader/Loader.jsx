import React from 'react';
import Layout from '@@/Layout/Layout';
import Loading from '@@/Loading/Loading';
import './Loader.css'


export default () => {
    
    return (
        <Layout>
            <div className="loading-warp">
                <Loading></Loading>
            </div>

        </Layout>

    )
}




