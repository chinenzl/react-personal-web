import React from 'react';
export default function List(){
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <div>
            {listItems}
        </div>
    )
}