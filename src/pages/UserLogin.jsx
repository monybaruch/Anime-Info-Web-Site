import { useState } from 'react';
import { RegisterForm, LoginForm } from '../data';
import { useAuthContext } from '../hooks/useAuthContext';
const UserLogin = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const { isRegistered } = useAuthContext();

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === 'login' || isRegistered ? (
        <LoginForm onFormSwitch={toggleForm} />
      ) : (
        <RegisterForm onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
export default UserLogin;
