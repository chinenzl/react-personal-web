import React, { useState, useEffect } from 'react';
import Tag from '@@/Tag/Tag';
import './TagInput.css'

export default (props) => {

    const [tags, setTags] = useState([])
    const list = props.tags || ['html']

    const [tagList, setTagList] = useState(list)
    let isOver = false

    const addTag = tag => {
        // console.log('addTag',tag)
        tag.length > 0 &&
            tags.indexOf(tag) === -1 &&
            setTags([...tags, tag])
    }
    const handleKeydown = e => {

        if (e.keyCode === 188) {
            addTag(e.target.value);
            e.target.value = '';
            e.preventDefault();
        } else if (e.keyCode === 8 && e.target.value.length === 0) {
            tags.pop();
            setTags([...tags])
            let newList = list.filter(tag => tags.indexOf(tag) === -1)
            newList.length > 0 && setTagList(newList);
        }
    }

    const handleBlur = e => {
        const value = e.target.value;
        if (value.length > 0 && !isOver) {
            addTag(value);
            e.target.value = '';
            setTagList([]);
        } else {
            e.target.value = '';
            isOver || setTagList([]);
        }

    }

    const handleTagClick = tag => {
        // console.log('tag', tag)
        addTag(tag);
        setTagList([]);
    }

    useEffect(() => {
        props.onChange &&
            props.onChange(tags);

    }, [tags])


    useEffect(() => {
        if(props.value.length > 0){
            setTags(props.value.split(','))
        } else {
            setTags([])
        }
            
    }, [props.value])


    const showList = e => {
        const value = e.target.value;

        if (value.length === 0) {
            // setTagList(list);
            let newList = list.filter(tag => tags.indexOf(tag) === -1)
            setTagList(newList);
        } else {
            const newlist = list.filter((tag) => tag.indexOf(value) != -1)
            setTagList(newlist);
        }
    }

    return (
        <div className="com-tag-input">
            <div className="com-tag-input-tag">
                {
                    tags.map((tag, i) =>
                        <Tag key={i.toString()}>{tag}</Tag>
                    )
                }
            </div>
            <div className="com-tag-input-com">
                <div className="com-tag-input-input">
                    <input type="text"
                        placeholder={tags.length === 0 ? '标签（用","号分割）' : ''}
                        onKeyDown={e => handleKeydown(e)}
                        onBlur={e => handleBlur(e)}
                        onFocus={e => showList(e)}
                        onChange={e => showList(e)}

                    />

                </div>
                {
                    tagList.length > 0 &&
                    <ul className="com-tag-input-list"
                        onMouseOver={e => isOver = true}
                        onMouseOut={e => isOver = false}
                    >
                        {
                            tagList.map((tag, i) =>
                                <li tag={tag} onClick={() => handleTagClick(tag)} key={i.toString()}>{tag}</li>
                            )
                        }
                    </ul>
                }
            </div>

        </div>
    )
}
