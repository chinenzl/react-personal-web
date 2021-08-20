import React from 'react';
import Icon from '@@/Icon/Icon'
import './Loading.css'

export default () => {

    return (
        <div className="loader">
            {
                (new Array(20).toString().split(',')).map((a, i) =>
                    <span key={i.toString()} style={{ '--i': i + 1 }}></span>
                )
            }
            <div className='rocket'>
                <span>
                    <Icon type='rocket' width='30px' height='30px' />
                </span>
            </div>
        </div>
    )
}