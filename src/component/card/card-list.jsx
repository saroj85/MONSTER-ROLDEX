import React from 'react';
import './card-style.css';

export default function cardList({user}) {
    const {name, email,username, phone, website,id} = user;
    return (
        <div className="user-card">
          <div style={{textAlign: "Center"}}>  <img src={`https://i.picsum.photos/id/${id}/200/300.jpg`} alt={id} style={{width: '100px', height: '100px',}}/> </div>
            <h1>{name}</h1>
            {email} <br></br>{phone}<br></br>
            <a target="_blank" href={website}>{website}</a>
        </div>
    )
}


