import './styles/loginform.css';
import { useState } from 'react';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="enter your email please!"
          className="username"
          name="email"
        />
        <br />
        <br />
        <br />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="enter your password please!"
          className="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <button>Don't have an account? Register here.</button>
    </div>
  );
};
export default LoginForm;
