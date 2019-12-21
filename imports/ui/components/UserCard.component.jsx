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
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' className='card-link'>
          View
        </a>
        <a href='#' className='card-link'>
          Book
        </a>
      </div>
    </div>
  );
};

export default UserCard;
