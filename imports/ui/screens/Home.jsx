import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Link} from 'react-router-dom';

// collections
import { Profiles } from '../../api/user.js';

import UserCard from '../components/UserCard.component.jsx'
// components
import Header from '../components/Header.component.jsx';
import NavBar from '../components/NavBar.component.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const RenderUser = props => {
  return props.profiles.map(profile => {
    <UserCard {...props} key={profile.id} fullName={profile.fullName} skill={profile.skill} bio={props.bio} />
  })
}

const Home = props => {
  return (
    <div>
      <NavBar {...props} />
      <Header />
      <div className='row'>
        <div className='col-sm-6 info-pic'>
          <img src='/nanny.jpg' alt='feeding baby' />
        </div>
        <div className='col-sm-6'>
          <div className='mx-auto my-5'>
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
            <div>
              <Link to={'/post-job'} className='btn btn-info'>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="col-sm-4">
          <RenderUser {...props}/>
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
})(Home);
