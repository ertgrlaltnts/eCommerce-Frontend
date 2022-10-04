import React from "react";
import { Pch } from "./styled-component/PasswordChange.style";
import { Form, Input, notification } from "antd";
import { useSelector } from "react-redux";
import "antd/dist/antd.min.css";
import { Modal } from "antd";

const PasswordChange = ({ isVisible, isSetVisible }) => {
  const { user } = useSelector((state) => state.User);

  const addNotification = (placement) => {
    notification.success({
      message: `Şifre Başarıyla Değiştirildi`,
      placement: placement,
      duration: 3,
    });
  };

  const handleOk = () => {
    isSetVisible(false);
  };

  const handleClose = () => {
    isSetVisible(false);
  };

  const onFinish = (value) => {
    if (value.oldPass === user.password) {
      if (value.newPass === value.newPassAgain) {
        handleClose();
        addNotification("topRight");
      } else {
        console.log("Şifreler uyuşmuyor !");
      }
    } else {
      console.log("eski şifre yanlış !");
    }
  };

  return (
    <Modal
      title="Şifreni Değiştir"
      width={600}
      visible={isVisible}
      footer={null}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Pch.Container>
        <Form
          name="basic"
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Pch.Title>Eski Şifreniz :</Pch.Title>
          <Form.Item
            name="oldPass"
            rules={[
              {
                required: true,
                message: "Şifre boş bırakılamaz !",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Pch.Title>Yeni Şifreniz :</Pch.Title>
          <Form.Item
            name="newPass"
            rules={[
              {
                required: true,
                message: "Şifre boş bırakılamaz !",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Pch.Title>Yeni Şifreniz (Tekrar) :</Pch.Title>
          <Form.Item
            name="newPassAgain"
            rules={[
              {
                required: true,
                message: "Şifre boş bırakılamaz !",
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>

          <Form.Item>
            <Pch.Button>KAYDET</Pch.Button>
          </Form.Item>
        </Form>
      </Pch.Container>
    </Modal>
  );
};

export default PasswordChange;
