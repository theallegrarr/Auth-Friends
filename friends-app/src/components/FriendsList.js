import React, { useRef, useState, useEffect } from 'react';
import withAuth from './axios';

export default function Login(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // We need the wrapped axios instead, to send token
    // along automatically, in an Authorization header
    // axios.get('http://localhost:5000/api/quotes')
    withAuth().get('http://localhost:5000/api/friends')
      .then(res => {
        setFriends(res.data);
      })
      .catch(error => {
        // props.history.push('/'); // could be improved
        alert(error.response.data.message);
      });
  }, []);

  return (
    <div className='friends'>
      {
        friends.length > 0 ?
          friends.map(friend => (
            <div className='each-friend'>
              <h1>ID: {friend.id}</h1>
              <h1>Name: {friend.name}</h1>
              <h1>Email: {friend.email}</h1>
            </div>
          )) : 'No Friends in your List' 
      }
    </div>
  );
}
