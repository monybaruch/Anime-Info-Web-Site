import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const userFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(userFromLocalStorage);
  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    favorites: [],
  });

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://65647590ceac41c0761e3990.mockapi.io/users');
      const logedInUser = response.data.find(
        (user) => user.email === formData.email && user.password === formData.password
      );
      if (logedInUser) {
        localStorage.setItem('user', JSON.stringify(logedInUser));
        console.log(logedInUser);
        setUser(logedInUser);
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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://65647590ceac41c0761e3990.mockapi.io/users', formData);
      if (response.status === 201) {
        console.log('You have registered successfully!');
        toast.success('You have registered successfully!');
        setIsRegistered(true);
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const saveUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const fields = [
    {
      id: 1,
      name: 'fullname',
      value: formData.fullname,
      type: 'text',
      placeholder: 'enter full name please!',
      labelName: 'Full name',
      htmlFor: 'fullname',
    },
    {
      id: 2,
      name: 'email',
      value: formData.email,
      type: 'email',
      placeholder: 'enter email please!',
      labelName: 'Email',
      htmlFor: 'email',
    },
    {
      id: 3,
      name: 'password',
      value: formData.password,
      type: 'password',
      placeholder: 'enter password please!',
      labelName: 'Password',
      htmlFor: 'password',
    },
  ];

  return (
    <AuthContext.Provider
      value={{
        formData,
        fields,
        handleChange,
        handleLoginSubmit,
        handleRegisterSubmit,
        saveUser,
        user,
        isRegistered,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
