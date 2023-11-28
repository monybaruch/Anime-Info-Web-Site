import { Input } from '../../data';
import './form.css';
import { useAuthContext } from '../../hooks/useAuthContext';

const RegisterForm = ({ onFormSwitch }) => {
  const { fields, handleChange, handleRegisterSubmit } = useAuthContext();

  return (
    <div className="flex-container">
      <div className="form-container">
        <h2>Register:</h2>
        <form onSubmit={handleRegisterSubmit} className="register-form">
          {fields.map((field) => (
            <Input key={field.id} {...field} handleChange={handleChange} />
          ))}
          <button type="submit" className="btn">
            Register
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
