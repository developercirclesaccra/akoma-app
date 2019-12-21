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
      skill
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
      skill
    };

    Meteor.call('profile.create', userObj);

    // redirect to home
    props.history.push('/index');
  };

  return (
    <div className='container h-100'>
      <div className='row h-100 justify-content-center align-items-center'>
        <Card>
          <Card.Body>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='fullName'>Fullname</label>
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
                <label htmlFor='gender'>Gender</label>
                <select
                  value={inputsForm.gender}
                  onChange={handleInputChange}
                  className='form-control'>
                  <option>Select an option...</option>
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
                <label htmlFor='phone'>Phonenumber</label>
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
                <label htmlFor='address'>Address</label>
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
                <label htmlFor='password'>Qualification</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter qualification'
                  name='qualification'
                  value={inputsForm.qualification}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='skill'>Skill</label>
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

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CreateProfile;
