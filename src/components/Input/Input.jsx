import React from "react";
import './Input.css'

const Input = (props) => {
  const type = props.type || 'text'
  const placeholder = props.placeholder || '搜索'
  return (
    <div className="wrap-input" >
      <input
        className={type}
        placeholder={placeholder}
        onChange={e => props.onChange && props.onChange(e)}
        value={props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        type={props.type.indexOf("password") !== -1 ? "password" : ''}
      />
    </div >
  )
}

export default Input;