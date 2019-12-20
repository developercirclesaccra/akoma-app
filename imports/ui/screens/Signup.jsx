import React, {useState} from 'react';
import {Accounts} from 'meteor/accounts-base';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = props => {
  const initialValue = {};
  const [inputsForm, setInputs] = useState(initialValue);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setInputs(inputsForm => ({...inputsForm, [name]: value}));
  };

  const submitHandler = e => {
    e.preventDefault();
    const {email, password, confirmPassword} = inputsForm;

    Object.values(inputsForm).forEach(value => {
      if (value == '' || !value) return;
    });

    Object.values(inputsForm).forEach(value => value.trim());

    if (password !== confirmPassword) return;

    Accounts.createUser(
      {
        email,
        password
      },
      error => {
        if (error) console.log(error.reason);
        props.history.push('/createprofile');
      }
    );
  };

  return (
    <div className='container h-100'>
      <div className='row h-100 justify-content-center align-items-center'>
        <Card>
          <Card.Body>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter email'
                  name='email'
                  value={inputsForm.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter password'
                  name='password'
                  value={inputsForm.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Confirm password</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Confirm password'
                  name='confirmPassword'
                  value={inputsForm.confirmPassword}
                  onChange={handleInputChange}
                />
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

export default Signup;
