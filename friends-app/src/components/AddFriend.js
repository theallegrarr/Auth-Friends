import React, { useRef } from 'react';
import axios from 'axios';


const token = localStorage.getItem('token');
const headers = {
  headers: {
    'Content-Type': 'application/json',
     authorization: token,
  },
};

export default function AddFriend(props) {
  const ageref = useRef();
  const nameref = useRef();
  const emailref = useRef();

  const submit = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/friends',
      data: {
        age: ageref.current.value,
        email: emailref.current.value,
        name: nameref.current.value,
      },
      headers: {
        'Content-Type': 'application/json',
         authorization: token,
      },
    })
      .then(res => {
        
        // SUCCESS! Credentials are valid:
        //   1- Put the token string in local storage under a 'token' key
        props.history.push('/friends');
      })
      .catch(error => {
        // Alert a sensible message pulled from the error object
        alert(error.response.data.message);
      });
  };

  return (
    <div className='login'>
      <div className='login-inputs'>
        Name <input ref={nameref} type="text" />
        <br />
        Age <input ref={ageref} type="text" />
        <br />
        Email <input ref={emailref} type="text" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
