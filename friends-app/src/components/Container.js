import React from 'react';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import Friends from './FriendsList';
import AddFriends from './AddFriend';
import Login from './Login';

export function Container(props) {
  const onLogout = () => {
    // Implement!
    // 1- We need to flush token from local storage
    localStorage.clear();
    // 2- We need to redirect users to login route
    props.history.replace('/');
  };
  
  return (
    <div className='container'>
      <nav>
        <span>
          <NavLink exact to='/'>Login</NavLink>
          <NavLink to='/friends'>Friends</NavLink>
          <NavLink to='/addfriend'>Add Friend</NavLink>
        </span>

        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route
          exact
          path='/'
          component={Login}
        />
        <Route
          exact
          path='/friends'
          component={Friends}
        />
        <Route
          exact
          path='/addfriend'
          component={AddFriends}
        />
      </main>
    </div>
  );
}

export default withRouter(Container);