import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'

// collections
import {Profiles} from '../../api/user.js'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = props => {
  const logoutHandler = e => {
    e.preventDefault();
    Meteor.logout();
    props.history.push('/');
  }

  const getFirstName = () => {
    const doc = Profiles.findOne({ user_id: this.userId });

    const userName = doc.fullName;
    const firstName = userName.split(' ');
    const firstLetter = firstName.split('')[0].toUpperCase();
    const name = firstName.charAt(0).toUpperCase();

    return `<div className="d-flex flex-row"> <div className="rounded-circle bg-info">${firstLetter}</div> <div className="text-white">${name}</di></div>`
  }

  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Akoma Home Care</Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      {props.currentUser ? (
        <NavDropdown title={getFirstName}>
          <Link  to={'/userprofile'}>Profile</Link>
          <Link to={'/editprofile'}>Edit profile</Link>
          <NavDropdown.Divider />
          <NavDropdown.Item><button className="btn" onClick={logoutHandler}>Sign Out</button> </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <Form inline>
          <Link to={'/login'} className='btn btn-sm btn-outline-info mr-2'>
            Login
          </Link>
          <Link to={'/signup'} className='btn btn-sm btn-outline-primary'>
            Create Account
          </Link>
        </Form>
      )}
    </Navbar>
  );
};

export default NavBar;
