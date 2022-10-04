import React from "react";
import { Lgn } from "./styled-component/Login.style";
import { Checkbox, Form, Input, Divider, notification } from "antd";
import { useDispatch } from "react-redux";
import { signIn } from "../store/reducers/User";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "antd/dist/antd.min.css";
import { Modal } from "antd";

const Login = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch((state) => state.User);
  const navigate = useNavigate();

  const addNotification = (value) => {
    notification.success({
      message: `Hoşgeldin ${value.name}`,
      duration: 2,
    });
  };

  const warnNotification = (value) => {
    notification.warn({
      message: value,
      duration: 2,
    });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (value) => {
    const user = await axios.post(
      `http://${process.env.REACT_APP_IP}/users/login`,
      value
    );
    if (user.data.response === 1) {
      dispatch(signIn({ ...user.data.user }));
      handleClose();
      navigate("/");
      addNotification(user.data.user);
    } else if (user.data.response === 2) {
      warnNotification("E-mail veya şifre hatalı");
    } else {
      warnNotification("E-mail veya şifre hatalı");
    }
  };

  return (
    <Modal
      title="Giriş Yap"
      width={600}
      visible={isModalVisible}
      footer={null}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Lgn.Container>
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Lgn.Title>E-mailiniz :</Lgn.Title>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "E-mail boş bırakılamaz !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Lgn.Title>Şifreniz :</Lgn.Title>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Şifre boş bırakılamaz !",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Beni hatırla</Checkbox>
          </Form.Item>

          <Form.Item>
            <Lgn.Button>GİRİŞ YAP</Lgn.Button>
          </Form.Item>
        </Form>
      </Lgn.Container>
      <Divider />
      <Lgn.Yet>
        Henüz üye değil misiniz ?{" "}
        <Lgn.Span onClick={handleClose}>
          <Link style={{ color: "#000" }} to={"/signup"}>
            Üye olun.
          </Link>
        </Lgn.Span>
      </Lgn.Yet>
    </Modal>
  );
};

export default Login;
