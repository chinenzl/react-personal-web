import React from 'react';
import './Card.css'
import Icon from '@@/Icon/Icon'
import Loadding from '@@/Loading/Loading2'

export default (props) => (
    <div className="card">
        {
            props['title'] &&
            <div className="sample-title">
                {
                    props.icon &&
                    <span className="sample-icon">
                        <Icon type={props.icon}></Icon>

                    </span>

                }
                <span>
                    {props.title}
                </span>
            </div>
        }

        <div className="sample-content">
            { (props.loading || false) ?
            (
            <div className="com-card-loadding">
                <Loadding/>
            </div>
            ):
            props.children
            }
        </div>
    </div>
)