import './styles/loginform.css';
import { useState } from 'react';
const LoginForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="enter your email please!"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="enter your password please!"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button onClick={() => onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
    </div>
  );
};
export default LoginForm;
