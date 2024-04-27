import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
// import '../../styles/freelancer/login.css'


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
          <Input
            type="email"
            value={email}
            onChange={emailHandler}
            placeholder="Enter your email"
            className="feild"
          />
          <Space direction="vertical">
            <Input.Password
              value={password}
              onChange={passwordHandler}
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Space>
          <Input
            type="submit"
            value="Submit"
            className="feild"
            style={{
              backgroundColor: "rgb(250, 208, 129)",
              color: "#F7F7F7",
            }}
          />
         
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
