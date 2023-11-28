import { useState } from 'react';
import { RegisterForm, LoginForm } from '../data';
import { useAuthContext } from '../hooks/useAuthContext';
const UserLogin = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const { user } = useAuthContext();

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === 'login' || user ? (
        <LoginForm onFormSwitch={toggleForm} />
      ) : (
        <RegisterForm onFormSwitch={toggleForm} />
      )}
    </div>
  );
};
export default UserLogin;
