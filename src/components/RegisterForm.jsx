import './styles/registerform.css';
import { useState } from 'react';
const RegisterForm = ({ onFormSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="fullname">Full name</label>
          <input
            value={fullname}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="enter your full name please!"
            name="fullname"
          />
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
        <button onClick={() => onFormSwitch('login')}>Already have an account? Login here.</button>
      </div>
    </div>
  );
};
export default RegisterForm;
