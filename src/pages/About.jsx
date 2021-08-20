import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import message from '@@/Message/Message'
import modal from '@/components/Modal/Modal'
import Button from '@/components/Button/Button'
import './About.css'

const About = (props) => {
    const [tagList, setTagList] = useState(['jerry', 'tom'])
    const [btnFlag, setBtnFlag] = useState(true);

    const delTag = () => {
        setBtnFlag(!btnFlag);
    }
    let arr = ['jack', 'wilson', 'tommy']
    const addTag = () => {
        setTagList([...tagList, arr])


    }

    return (
        <Layout>

            <div className="wrap-about">
                <ul>
                    {
                        tagList.map((comment, i) => (
                            <li key={i.toString()} >
                                {
                                    btnFlag &&
                                    <span>{comment}<button onClick={delTag}>x</button></span>
                                }
                                <button onClick={addTag}>添加</button>
                            </li>
                        ))
                    }
                </ul>
                <Button onClick={() => message.info('hello world!')}>message</Button>
                <Button onClick={() => modal.normal('是正常的')}>normal</Button>
                <Button onClick={() => modal.warning('提示警报')}>warning</Button>
                <Button onClick={() => modal.error('报错了啊')}>error</Button>
            </div>
        </Layout>

    )

}

export default About;