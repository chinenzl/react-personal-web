import React from 'react'
import './Button.css'

export default function Button(props) {
  const type = props.type || 'normal';
  const handleClick = e => {
    props.onClick && props.onClick();
    e.preventDefault();
  }
  return (
    <div className="com-button">
      <a className={type} href='/' onClick={e => { handleClick(e) }}>{props.children}</a>
    </div >
  )
}
