import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const useRegisterForm = () => {
  const [registerData, setResiterData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    console.log(registerData);
    e.preventDefault();
    try {
      const response = await axios.post('https://65647590ceac41c0761e3990.mockapi.io/users', registerData);
      if (response.status === 201) {
        console.log('You have registered successfully!');
        toast.success('You have registered successfully!');
        navigate('/');
      } else {
        console.log('You have failed to register');
        toast.error('You have registered successfully!');
      }
    } catch (error) {
      toast.error('An error ocurred: ' + error.message);
      console.error('Error:', error);
    }
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
