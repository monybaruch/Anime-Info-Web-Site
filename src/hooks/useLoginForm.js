import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
export const useLoginForm = () => {
  const [loginData, setResiterData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://65647590ceac41c0761e3990.mockapi.io/users');
      const user = response.data.find((user) => user.email === loginData.email && user.password === loginData.password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        console.log('You have loged in successfully!');
        toast.success('You have loged in  successfully!');
        navigate('/');
      } else {
        toast.error('Invalid email or password please try again!');
      }
    } catch (error) {
      console.error('error was found', error);
    }
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
