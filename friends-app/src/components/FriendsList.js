import React, { useRef, useState, useEffect } from 'react';
import withAuth from './axios';
import axios from 'axios';

const token = localStorage.getItem('token');

export default function Login(props) {
  const [friends, setFriends] = useState([]);

  const Delete = (id) => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/api/friends/${id}`,
      data: {},
      headers: {
        'Content-Type': 'application/json',
         authorization: token,
      },
    }).then((res) => {
      setFriends(res.data);
    }).catch(e => console.log(e));
  }
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
              <button onClick={() => Delete(friend.id)}>Delete</button>
            </div>
          )) : 'No Friends in your List' 
      }
    </div>
  );
}
