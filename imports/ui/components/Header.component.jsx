import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div className='jumbotron jumbotron-fluid'>
      <div className='container mx-auto my-5'>
        <h1 className='display-4'>Hello, world!</h1>
        <p className='lead'>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-4'></hr>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className='btn btn-primary btn-sm' href='#' role='button'>
          Learn more
        </a>

        <div className='text-center my-5'>
          <h3 className='text-info'>Lorem, ipsum.</h3>
          <div className='display-4 my-4'>Lorem ipsum dolor sit.</div>

          <div className='input-group input-group-lg'>
            <input
              type='text'
              className='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
            <div className='input-group-append bg-transparent'>
              <span className='input-group-text'>Search</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
