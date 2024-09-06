import React from "react";
import image from "../React-Projuct/React-img-folder/Screenshot 2024-08-22 120417.png";
import { Link } from "react-router-dom";

const AuthForm = ({ title, children, onSubmit }) => {
  console.log(title, children, onSubmit, "name");
  const halfColoredStyle = {
    background: "linear-gradient(to right, skyblue 50%, mediumpurple 50%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "36px",
    fontWeight: "bold",
  };
  const iconStyle = {
    fontSize: "20px",
    background: "linear-gradient(45deg, #4285F4, #DB4437, #F4B400, #0F9D58)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  return (
<>
    <div className="auth-container">
    <div className="auth-form">
        <h1>
          <i className="bi bi-alexa" style={halfColoredStyle}></i>Cryptonext
        </h1>
        <div className="tabs d-flex justify-content-center align-item-center">
          <div className="tab1 px-1">
            <Link to="/" className="text-decoration-none text-dark">
              SignUp
            </Link>
          </div>
          <div className="tab2 px-3">
            <Link to="/login" className="text-decoration-none text-dark">
              Login
            </Link>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {children}
          <button type="submit" className="btn w-50 " style={{ backgroundColor: "blueviolet",color:"white" ,marginLeft:"120px"}}>
            {title}
          </button>
        </form>
        <hr />
        <b>or</b>
        <hr />
        <div className="buttons d-flex flex-column   ">
        <button className="btn">
          {" "}
          <i className="bi bi-google fs-3" style={iconStyle}></i> Continue with
          google
        </button>
        <button className="btn">
          <i className="bi bi-apple fs-3" style={{ color: "black" }}></i> Continue
          with Apple
        </button>
        <button className="btn">
          <i className="bi bi-wallet-fill fs-3" style={{ color: "blueviolet" }}></i>{" "}
          Continue with Wallet
        </button>
        </div>
    </div>
      <div className="img-part img-fluid">
         <img src={image} alt="" />
      </div>
    </div>
    </>
  );
};

export default AuthForm;
