import { Form } from 'react-router-dom';
import './loginpage.css';
const LoginPage = () => {
  return (
    <form action="/" className="form">
      <label htmlFor="email">email</label>
      <input type="email" placeholder="enter your email please!" className="username" name="email" />
      <label htmlFor="password">password</label>
      <input type="password" placeholder="enter your password please!" className="password" name="password" />
    </form>
  );
};
export default LoginPage;
