import './styles/form.css';
import { useState } from 'react';
const LoginForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex-container">
      <div className="form-container">
        <h2>Login:</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="enter email please!"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="enter password please!"
            name="password"
          />
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
        <button onClick={() => onFormSwitch('register')} className="link-btn">
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};
export default LoginForm;
