import React from 'react';
import ReactDOM from'react-dom';
import './Mask.css'

const Mask = (props) => {
    return (
        <div className={"mask " + (props.show && 'show')} >

        </div>
    )
}
 
let div = document.createElement('div');

let props = {
   
};

let Box = ReactDOM.render(React.createElement(
    Mask,
    props
  ),div);

export default Box;