import React, {useState} from 'react';
import {Meteor} from 'meteor/meteor';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = props => {
  const initialValue = {};
  const [inputsForm, setInputs] = useState(initialValue);

  const handleInputChange = e => {
    const {name, value} = e.target;
    setInputs(inputsForm => ({...inputsForm, [name]: value}));
  };

  const submitHandler = e => {
    e.preventDefault();
    const {email, password} = inputsForm;

    Object.values(inputsForm).forEach(value => {
      if (value == '' || !value) return;
    });

    Object.values(inputsForm).forEach(value => value.trim());

    Meteor.loginWithPassword(email, password, error => {
      if (error) console.log(error.reason);
      props.history.push('/index');
    });
  };

  return (
    <div className='text-center page'>
      <h1 className='h3 mb-3 font-weight-normal'>Please login</h1>
      <Card>
        <Card.Body>
          <form className='form' onSubmit={submitHandler}>
            <div className='form-group'>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                name='email'
                value={inputsForm.email}
                onChange={handleInputChange}
                required
                autofocus
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter password'
                name='password'
                value={inputsForm.password}
                onChange={handleInputChange}
                required
                autofocus
              />
            </div>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
