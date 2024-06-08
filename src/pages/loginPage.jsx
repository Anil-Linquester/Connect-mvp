import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import "../styles/Login.css";

const LoginPage = ({
  email,
  password,
  emailHandler,
  passwordHandler,
  submitHandler,
  error,
}) => {
  return (
    <div className="login-page">
      <div className="login-box">
        <form action="" className="login-form" onSubmit={submitHandler}>
          <h1 className="for-loginform-text">Sign in to Connect</h1>
          <Input
            type="email"
            value={email}
            onChange={emailHandler}
            placeholder="Enter your email"
            className="input-field"
          />
          <Input
            type="password"
            value={password}
            onChange={passwordHandler}
            placeholder="Enter the password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className="input-field"
          />
          <input type="submit" value="Submit" className="input-feild submit" />
          <label className="checkbox-container">
            <input className="for-checkbox" type="checkbox" value={{}} />
            <span class="for-text">Remember Me</span>
          </label>{" "}
          <p className="for-special">Forget your Password ? </p>
          <h1 className="for-text">
            Don't have a Connect ID ? <span className="for-special">Create your's now</span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
