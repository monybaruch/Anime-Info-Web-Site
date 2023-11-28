import './form.css';
import { Input } from '../../data/index';
import { useAuthContext } from './../../hooks/useAuthContext';

const LoginForm = ({ onFormSwitch }) => {
  const { fields, handleChange, handleLoginSubmit } = useAuthContext();

  return (
    <div className="flex-container">
      <div className="form-container">
        <h2>Login:</h2>
        <form onSubmit={handleLoginSubmit} className="login-form">
          {fields.slice(1).map((field) => (
            <Input key={field.id} {...field} handleChange={handleChange} />
          ))}
          <button type="submit" className="btn">
            Log In
          </button>
        </form>
        <button onClick={() => onFormSwitch('register')} className="link-btn">
          Do not have an account? Register here.
        </button>
      </div>
    </div>
  );
};
export default LoginForm;
