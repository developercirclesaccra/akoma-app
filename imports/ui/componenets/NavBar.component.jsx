import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#features'>Features</Nav.Link>
        <Nav.Link href='#pricing'>Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <Button variant='outline-primary'>Login</Button>
        <Button variant='outline-info'>Sign Up</Button>
      </Form>
    </Navbar>
  );
};
