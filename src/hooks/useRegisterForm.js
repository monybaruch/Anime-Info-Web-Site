import { useState } from 'react';

export const useRegisterForm = () => {
  const [registerData, setResiterData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const fields = [
    {
      id: 1,
      name: 'fullname',
      value: registerData.fullname,
      type: 'text',
      placeholder: 'enter full name please!',
      labelName: 'Full name',
      htmlFor: 'fullname',
    },
    {
      id: 2,
      name: 'email',
      value: registerData.email,
      type: 'email',
      placeholder: 'enter email please!',
      labelName: 'Email',
      htmlFor: 'email',
    },
    {
      id: 3,
      name: 'password',
      value: registerData.password,
      type: 'password',
      placeholder: 'enter password please!',
      labelName: 'Password',
      htmlFor: 'password',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerData);
  };
  const handleChange = (e) => {
    setResiterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    registerData,
    fields,
    handleChange,
    handleSubmit,
  };
};

export default useRegisterForm;
