import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom';
import Icon from '@/components/Icon/Icon'
import './Message.css'
export const Message = props => {


    const type = props.type || 'normal';

    //该句等于 const rootDom = props.rootDom && const parentDom = props.parentDom......
    const { rootDom, parentDom, content } = props;

    const unmount = useMemo(() => {
        return () => {
            if (parentDom && rootDom) {
                ReactDOM.unmountComponentAtNode(parentDom);
                rootDom.removeChild(parentDom);
            }
        };
    }, [parentDom, rootDom]);

    useEffect(() => {
        setTimeout(() => {
            unmount()
            props.callback && props.callback()
        }, props.duration)
    }, [unmount]);

    return (
        <div className="wrap-Message">
            {
                type === 'normal' &&
                <div className="message-contain">
                    <Icon type='success'></Icon><p>{content}</p>
                </div>
            }
            {
                type === 'warning' &&
                <div className="message-contain">
                    <Icon type='warning'></Icon><p>{content}</p>
                </div>
            }
            {
                type === 'error' &&
                <div className="message-contain">
                    <Icon type='error'></Icon><p>{content}</p>
                </div>
            }

        </div>
    )
}

let wrap;
export const createMessage = (type, content, duration = 4000, callback) => {

    if (!wrap) {
        // 创建一个div标签 叫 wrap
        wrap = document.createElement("div");
    }

    //把 wrap 标签扔进body里面
    document.body && document.body.appendChild(wrap);

    //再创建一个div标签 叫 divs
    const divs = document.createElement("div");

    // divs 标签 扔进 wrap标签里面 作为子标签
    wrap.appendChild(divs);


    ReactDOM.render(
        <Message rootDom={wrap}
            parentDom={divs}
            content={content}
            type={type}
            duration={duration}
            callback={callback}
        />,
        divs
    );
}

export default {
    info(content, duration, callback) {
        return createMessage('normal', content, duration, callback);
    },
    warning(content, duration, callback) {
        return createMessage('warning', content, duration, callback);
    },
    error(content, duration, callback) {
        return createMessage('error', content, duration, callback);
    },
}