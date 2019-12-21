import React from 'react';
import {Link} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';

import {Profiles} from '../../api/user.js';

import NavBar from '../components/NavBar.component.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const UserProfile = props => {
  console.log(props);
  const id = props.match.params.id;

  const doc = Profiles.findOne({_id: id});

  console.log(doc);

  if (!doc) return 'Loading ...';

  return (
    <div>
      <NavBar />
      <div className='mx-auto page'>
        <div className='card'>
          <div className='card-body'>
            <form>
              <div className='form-group row'>
                <label for='staticEmail' className='col-sm-2 col-form-label'>
                  Name
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    readonly
                    className='form-control-plaintext'
                    defaultValue={doc.fullName}
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
                    defaultValue={doc.age}
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
                    defaultValue={doc.address}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label for='staticEmail' className='col-sm-2 col-form-label'>
                  About
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    readonly
                    className='form-control-plaintext'
                    defaultValue={doc.bio}
                  />
                </div>
              </div>
            </form>

            <Link to='/' className='btn btn-secondary-outline'>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTracker(() => {
  Meteor.subscribe('profiles');
  return {
    profiles: Profiles.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(UserProfile);
