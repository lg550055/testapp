import React, { useState } from 'react';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({email, password});
    setToken(token);
    // localStorage.setItem('token', JSON.stringify(token));
  }

  return (
    <section className="hero">
      <form onSubmit={handleSubmit}>
        <h1>Please Log In</h1>
        <label>
          <p>Email</p>
          <input type='email' onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  )
}