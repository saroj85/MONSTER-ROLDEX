import React from 'react';
import './search-style.css';


export default function search({placholder, handlerChange, }) {
    return (
        <input type="text"  placeholder={placholder} onChange={handlerChange} />
    )
}
