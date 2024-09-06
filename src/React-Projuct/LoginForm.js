import React, { useState } from 'react';
import AuthForm from './AuthForm';
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6001/user/signin', {
        email,
        password,
      });

      // Adjusted to check the actual response object
      if (response.data.msg === "User Loggedin Successfully!") {
        toast.success("Login successfully",{
        autoClose : 5000,});

        setTimeout(()=>{
          navigate('/Admin/Products',{ state: { id: email , password:password} })
        })
      } 
       else {
        toast.error('Login failed. Please try again.');
      }

    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
      console.error('Login Error:', error);  // Log the error for debugging
    }
  };

  return (
    <>
      <AuthForm title="Login" onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='Enter your Email'
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
            placeholder='Enter Your Password'
          />
        </div>
        <div className="form-group d-flex justify-content-between p-4">
          <div>
          <input type="checkbox" required /><label>Remember Me</label>
          </div>
          <div>
            <Link to="/login" className='text-dark'>Forgot Password?</Link>
          
          </div>
        </div>
      </AuthForm>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
