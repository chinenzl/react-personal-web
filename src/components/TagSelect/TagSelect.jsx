import React, { useState } from 'react';
import Input from '@/components/Input/Input'
import Label from '@/components/Label/Label'
import './TagSelect.css'
const TagSelect = (props) => {
    const [tagList, setTagList] = useState(['HTML/CSS', 'JavaScript', 'React', 'Vue', 'Git'])
    const [btnFlag, setBtnFlag] = useState(true);
    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState([]);
    let value = '';

    const delTag = (i) => {
        setBtnFlag(!btnFlag);
        // setTagList(key);
    }

    const addTag = () => {
        setInputValue([...inputValue, value])
    }
    const onKeyDownchange = (e) => {
        if (e.keyCode == 13) {
            setInputValue([...inputValue, value])
        }
    }
    return (
        <div className="wrap-tagSelect">

            <div className="tagSelect-box">
                <input type="text"
                    placeholder="类型（选填）"
                    onKeyDown={(e) => { onKeyDownchange(e) }}
                    onChange={(e) => { setInputValue(e.target.value); setVisible(true) }}
                    onBlur={() => setVisible(false)}
                    value={inputValue}
                />

            </div>

            {
                visible &&
                <ul className="select-box">
                    {
                        tagList.map((item, i) => (
                            <li key={i.toString()}>
                                <span onClick={(key) => { setInputValue([...inputValue, tagList[key]]) }}>{item}<button onClick={delTag}>x</button></span>
                            </li>
                        ))
                    }
                </ul>

            }
        </div>
    )
}
export default TagSelect;