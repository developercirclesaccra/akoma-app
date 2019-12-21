import React from 'react';

import {Profiles} from '../../api/user.js';

import NavBar from '../components/NavBar.component.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = props => {
  return (
    <div className='mx-auto page'>
      <NavBar />
      <div className='card w-75'>
        <div className='card-body'>
          <div className='form-group row'>
            <label for='staticEmail' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                readonly
                className='form-control-plaintext'
                value={props.profile.fullName}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label for='staticEmail' className='col-sm-2 col-form-label'>
              Age
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                readonly
                className='form-control-plaintext'
                value={props.profile.age}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label for='staticEmail' className='col-sm-2 col-form-label'>
              Address
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                readonly
                className='form-control-plaintext'
                value={props.profile.address}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label for='staticEmail' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                readonly
                className='form-control-plaintext'
                value={props.profile.bio}
              />
            </div>
          </div>

          <Link to='/' className='btn btn-secondary-outlone'>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
