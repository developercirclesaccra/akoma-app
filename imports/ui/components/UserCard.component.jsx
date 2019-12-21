import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = props => {
  return (
    <div className='card' style='width: 18rem;' key={props._id}>
      <div className='card-body'>
        <h5 className='card-title'>{props.fullName}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>{props.skill}</h6>
        <p className='card-text'>{props.bio}</p>
        <Link to={`/userprofile/${props._id}`} className='card-link'>
          View
        </Link>
        <Link to={'/book'} className='card-link'>
          Book
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
