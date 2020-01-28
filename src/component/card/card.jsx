import React from 'react';
import CardList from './card-list';
import './card-style.css'

const card = ({users}) =>  {
    return (
            <div className="user-flex">
            {users && users.length > 0 && users.map((user, index) => {
                return <CardList key={user.id} user={user} />
            })}
            </div>
            
    )
}


export default card;
