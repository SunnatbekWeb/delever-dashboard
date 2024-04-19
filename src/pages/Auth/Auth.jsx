import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import iMac from "../../assets/iMac.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate('/');
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <div className="login__container">
      <div className="login__container-left h-screen">
        <h2 className="text-4xl text-white font-extrabold ml-12 mt-12">
          Bootcamp
        </h2>
        <div className="img_wrapper w-full h-[calc(100vh-90px)] grid place-content-center">
          <img src={iMac} alt="iMac" />
        </div>
      </div>
      <div className="px-16 py-10 w-[50%]">
        <div className="grid place-content-center h-[calc(100vh-104px)]">
          <div className="w-[592px]">
            <h3 className="text-4xl font-bold text-[#001A49] mb-10">
              Вход в платформу
            </h3>
            <Form
              name="basic"
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Имя пользователья"
                style={{ fontWeight: 600 }}
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  placeholder="Ведите имя пользователья"
                  style={{ height: "48px" }}
                />
              </Form.Item>

              <Form.Item
                label="Пароль"
                name="password"
                style={{ fontWeight: 600 }}
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="Ведите пароль"
                  style={{ height: "48px" }}
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%", height: "56px" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <p className="text-base text-[#6E8BB7] font-medium">
          Copyright &copy; Girgitton. Все права защищены
        </p>
      </div>
    </div>
  );
};

export default Auth;
