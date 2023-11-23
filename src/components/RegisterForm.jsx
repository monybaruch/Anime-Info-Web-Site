import './styles/registerform.css';
const RegisterForm = () => {
  return (
    <form action="/" className="form">
      <input type="text" placeholder="enter your username please!" className="username" name="username" />
      <input type="password" placeholder="enter your password please!" className="password" name="password" />
      <input type="email" placeholder="enter your username please!" className="username" />
    </form>
  );
};
export default RegisterForm;
