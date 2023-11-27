import { useState } from 'react';

export const useLoginForm = () => {
  const [loginData, setResiterData] = useState({
    email: '',
    password: '',
  });
  const fields = [
    {
      id: 1,
      name: 'email',
      value: loginData.email,
      type: 'email',
      placeholder: 'enter email please!',
      labelName: 'Email',
      htmlFor: 'email',
    },
    {
      id: 2,
      name: 'password',
      value: loginData.password,
      type: 'password',
      placeholder: 'enter password please!',
      labelName: 'Password',
      htmlFor: 'password',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };
  const handleChange = (e) => {
    setResiterData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    loginData,
    fields,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
