import './form.css';
import { Input } from '../../data/index';
import { useLoginForm } from '../../hooks/useLoginForm';
const LoginForm = ({ onFormSwitch }) => {
  const { fields, handleChange, handleSubmit } = useLoginForm();

  return (
    <div className="flex-container">
      <div className="form-container">
        <h2>Login:</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {fields.map((field) => (
            <Input key={field.id} {...field} handleChange={handleChange} />
          ))}
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
