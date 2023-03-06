import { Button, Typography, Form, Input } from 'antd';
const { Title } = Typography;

const Login = ({ setLogin }) => {
  return (
    <div className="loginContainer">
      <Title level={1}>Login</Title>
      <Form name="basic" onFinish={() => setLogin(true)} autoComplete="off">
        <Form.Item
          style={{ fontWeight: 700 }}
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          style={{ fontWeight: 700 }}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
