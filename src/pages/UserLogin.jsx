import { useState } from 'react';
import { RegisterForm, LoginForm } from '../data';
const UserLogin = () => {
  const [currentForm, setCurrentForm] = useState('login');
  return <div>{currentForm === 'login' ? <LoginForm /> : <RegisterForm />}</div>;
};
export default UserLogin;
