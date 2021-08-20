import React, { useMemo } from 'react'
import ReactDOM from 'react-dom';
import Icon from '@/components/Icon/Icon'
import Button from '@/components/Button/Button'
import './Modal.css'

export const Modal = props => {

    const type = props.type || 'normal';
    const { rootDom, parentDom, content } = props;
    const unmount = useMemo(() => {
        return () => {
            if (parentDom && rootDom) {
                ReactDOM.unmountComponentAtNode(parentDom);
                rootDom.removeChild(parentDom);
            }
        };
    }, [parentDom, rootDom]);


    // useEffect(() => {

    //     setTimeout(() => {
    //         unmount()
    //         props.callback && props.callback()
    //     }, props.duration)
    // }, [unmount]);


    return (
        <div className="wrap-Modal">
            {
                type === 'normal' &&
                <div className="modal-contain">
                    <Icon type='success'></Icon><p>{content}</p>
                    <div className="btn-modal">
                        <Button type='primary small' onClick={() => { unmount(); props.callback() }}>确认</Button>
                        <Button type="normal small" onClick={unmount}>返回</Button>
                    </div>
                </div>
            }
            {
                type === 'warning' &&
                <div className="modal-contain">
                    <Icon type='warning'></Icon><p>{content}</p>
                    <div className="btn-modal">
                        <Button type='primary small' onClick={() => { unmount(); props.callback() }}>确认</Button>
                        <Button type="normal small" onClick={unmount}>返回</Button>
                    </div>
                </div>
            }
            {
                type === 'error' &&
                <div className="modal-contain">
                    <Icon type='error'></Icon><p>{content}</p>
                    <div className="btn-modal">
                        <Button type='primary small' onClick={() => { unmount(); props.callback() }}>确认</Button>
                        <Button type="normal small" onClick={unmount}>返回</Button>
                    </div>
                </div>
            }
        </div>
    )
}

let wrap;
export const createModal = (type, content, callback) => {

    if (!wrap) {
        wrap = document.createElement("div");
    }
    document.body && document.body.appendChild(wrap);
    const divs = document.createElement("div");
    wrap.appendChild(divs);

    ReactDOM.render(
        <Modal rootDom={wrap}
            parentDom={divs}
            content={content}
            type={type}
            callback={callback}
        />,
        divs
    );
}
export default {
    normal(content, callback) {
        return createModal('normal', content, callback);
    },
    warning(content, callback) {
        return createModal('warning', content, callback);
    },
    error(content, callback) {
        return createModal('error', content, callback);
    },
}