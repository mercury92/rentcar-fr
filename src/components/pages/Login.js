import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import axios from "../../config/axios";
import localStorageService from "../../services/localStorageService";
import {withRouter} from 'react-router-dom'


const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 10,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Login(props) {
 
  const onFinish = async (values) => {
   
    await axios.post("user/login",{
      username:values.username,
      password:values.password,
    })
    .then((result)=>{
      notification.success({
        message:"เข้าสู่ระบบสำเร็จ"
      })
      localStorageService.setToken(result.data.access_token)
      props.setRole("user")
    })
    .catch(err =>{
      notification.error({
        message:`username or password is wrong`
      })
    });

    props.history.push("/profile")
    
  }
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(values)=>onFinish(values)}
        onFinishFailed={(values)=>onFinishFailed(values)}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(Login);
