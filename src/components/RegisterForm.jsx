import './styles/form.css';
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
    <div className="flex-container">
      <div className="form-container">
        <h2>Register:</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <label htmlFor="fullname">Full name</label>
          <input
            value={fullname}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="enter full name please!"
            name="fullname"
          />
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
        <button onClick={() => onFormSwitch('login')} className="link-btn">
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};
export default RegisterForm;
