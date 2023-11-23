import { useState } from 'react';
import { RegisterForm, LoginForm } from '../data';
const UserLogin = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <RegisterForm onFormSwitch={toggleForm} />}
    </div>
  );
};
export default UserLogin;
