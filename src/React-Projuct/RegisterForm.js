import React, { useState } from 'react';
import AuthForm from './AuthForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {Link} from 'react-router-dom'

const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/user/signup', {
        name,
        email,
        password,
      });

      if (response.data.msg === "New user registered successfully!") {
        toast.success("Register Successfully", {
          autoClose: 5000, // Duration in milliseconds (e.g., 5000ms = 5 seconds)
        });
      
        setTimeout(() => {
          navigate('/Admin/Products', { state: { id: email } });
        }, 1000); // Delay navigation to match the toast duration
      } 
       else {
        toast.error('Registration failed.');
      }

      console.log(response.data);
    } catch (error) {
      toast.error('An error occurred during registration. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
      <AuthForm title="Sign Up" onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder='Enter Your Name'
          />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter Your Email Address'
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='Enter Your Password...'
          />
        </div>
        
      </AuthForm>
      <ToastContainer />
    </>
  );
};

export default RegisterForm;
