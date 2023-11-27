import { useRegisterForm } from '../../hooks/useRegisterForm';
import { Input } from '../../data/index';
import './form.css';

const RegisterForm = ({ onFormSwitch }) => {
  const { fields, handleChange, handleSubmit } = useRegisterForm();

  return (
    <div className="flex-container">
      <div className="form-container">
        <h2>Register:</h2>
        <form onSubmit={handleSubmit} className="register-form">
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
