import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return;
    localStorage.setItem('username', username);
    onLogin(username);
  };

  return (
    <div style={styles.container}>
      <h2>Welcome!</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '100px',
    textAlign: 'center'
  },
  form: {
    marginTop: '20px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    marginRight: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px'
  }
};

export default Login;
