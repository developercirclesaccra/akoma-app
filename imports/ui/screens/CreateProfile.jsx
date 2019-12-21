import React, {useState} from 'react';
import {Meteor} from 'meteor/meteor';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateProfile = props => {
  const initialValue = {};
  const [inputsForm, setInputs] = useState(initialValue);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setInputs(inputsForm => ({...inputsForm, [name]: value}));
  };

  const submitHandler = e => {
    e.preventDefault();

    const {
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skill,
      bio
    } = inputsForm;

    Object.values(inputsForm).forEach(value => {
      if (value == '' || !value) return;
    });

    Object.values(inputsForm).forEach(value => value.trim());

    const userObj = {
      fullName,
      age,
      gender,
      phone,
      address,
      qualification,
      skill,
      bio
    };

    Meteor.call('profile.create', userObj);

    // redirect to home
    props.history.push('/index');
  };

  return (
    <div className='text-center page'>
      <div className='row h-100 justify-content-center align-items-center'>
        <form className='form' onSubmit={submitHandler}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter fullname'
              name='fullName'
              value={inputsForm.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <select
              value={inputsForm.gender}
              onChange={handleInputChange}
              className='form-control'>
              <option>Select your gender...</option>
              <option value='female'>Female</option>
              <option value='male'>Male</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter age'
              name='age'
              value={inputsForm.age}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter phone number eg +2331234567890'
              name='phone'
              value={inputsForm.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter address'
              name='address'
              value={inputsForm.address}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter your qualification'
              name='qualification'
              value={inputsForm.qualification}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <select
              value={inputsForm.skill}
              onChange={handleInputChange}
              className='form-control'>
              <option>Select an option...</option>
              <option value='homecare'>Home care</option>
              <option value='cleaner'>Cleaner</option>
              <option value='maid'>House help</option>
              <option value='nanny'>Nanny</option>
            </select>
          </div>
          <div className='form-group'>
            <textarea
              type='text'
              className='form-control'
              placeholder='Enter a few words about you'
              name='bio'
              value={inputsForm.bio}
              onChange={handleInputChange}></textarea>
          </div>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProfile;
