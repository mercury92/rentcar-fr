import React from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "../../config/axios";
import { withRouter } from "react-router-dom";

function Register(props) {
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 10,
    },
  };

  const createUser = async (value) => {
    try {
      await axios.post("user/register", {
        username: value.user_id,
        password: value.password,
        name: value.name,
        lastname: value.lastname,
        phone:value.phone,
        address: value.address,
      });
      notification.success({
        message: "สมัครสำเร็จ",
      });
    } catch (error) {
      notification.error({
        message: error.response?.data?.message || "มีบางอย่างผิดพลาด",
      });
    }

    props.history.push("/login");
  };

  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={(value) => createUser(value)}
      >
        <Form.Item
          name="user_id"
          label="user_id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          hasFeedback
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastname"
          label="lastname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="phone">
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(Register);
