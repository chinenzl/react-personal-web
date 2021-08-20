import React, { useState } from 'react';
import Icon from '../Icon/Icon'
import './SearchBar.css'

const SearchBar = (props) => {
    const [focus, setFocus] = useState(false);

    return (
        <div className="search">
            <input className={focus ? 'search-width' : ''}
                type="search"
                placeholder="搜索"
                onBlur={() => setFocus(false)}
                onFocus={() => setFocus(true)}
                onChange={e => { props.onChange(e) }}
                value={props.value}
            />
            <span onClick={() => props.onSearch()}>
                <Icon type="search" width='20px' height='20px'></Icon>
            </span>
        </div>
    )
}


export default SearchBar;