import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {createHashHistory} from 'history';

const history = createHashHistory();

// screens
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';
import Signup from './screens/Signup.jsx';
import UserProfile from './screens/UserProfile.jsx';
import CreateProfile from './screens/CreateProfile.jsx';

const App = () => {
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/createprofile' component={CreateProfile} />
      <Route exact path='/userprofile/:id' component={UserProfile} />
      <Route exact path='/index' component={Home} />
    </Switch>
  </Router>;
};

export default App;
