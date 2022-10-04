import React, { useState } from "react";
import { Alg } from "./styled-components/AdminLogin.style";
import { notification } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInAdmin } from "../store/reducers/Admin";
import axios from "axios";
import Logo from "../assets/logo-2.png";

const AdminLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch((state) => state.Admin);

  const successNotification = (placement) => {
    notification.success({
      message: "Başarıyla giriş yapıldı",
    });
  };

  const errorNotification = (placement) => {
    notification.warn({
      message: "Kullanıcı adı veya şifre hatalı !",
    });
  };

  const handleSubmit = async () => {
    const admin = await axios.post(
      `http://${process.env.REACT_APP_IP}/users/loginAdmin`,
      { name: name, password: password }
    );
    if (admin.data.response === 1) {
      successNotification();
      dispatch(signInAdmin({}));
      navigate("/admin");
    } else {
      errorNotification("topRight");
    }
  };

  return (
    <Alg.Container>
      <Alg.Logo src={Logo} />
      <Alg.Form>
        <Alg.Input
          placeholder="Admin"
          onChange={(e) => setName(e.target.value)}
        />
        <Alg.Input
          type="password"
          placeholder="Şifre"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Alg.Button type="submit" onClick={handleSubmit}>
          GİRİŞ YAP
        </Alg.Button>
      </Alg.Form>
    </Alg.Container>
  );
};

export default AdminLogin;
