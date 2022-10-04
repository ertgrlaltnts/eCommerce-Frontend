import React from "react";
import { Drawer, notification } from "antd";
import Logo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Sdw } from "../styled-component/SmallDrawer.style";
import {
  House,
  Wrench,
  DotsNine,
  Buildings,
  User,
  ShoppingCartSimple,
} from "phosphor-react";
import "./style.css";

const SmallDrawer = ({
  visibleSmallDrawer,
  setVisibleSmallDrawer,
  drawer,
  login,
}) => {
  const { isLoggedIn, user } = useSelector((state) => state.User);
  const navigate = useNavigate();

  const addNotification = (placement) => {
    notification.warn({
      message: `Öncelikle giriş yapmalısınız !`,
      placement: placement,
      duration: 3,
    });
  };

  const handleCart = () => {
    if (isLoggedIn) {
      drawer();
    } else {
      addNotification("topRight");
    }
  };

  const onClose = () => {
    setVisibleSmallDrawer(false);
  };
  return (
    <Drawer
      placement="left"
      width={200}
      onClose={onClose}
      visible={visibleSmallDrawer}
      className="small"
    >
      <Sdw.Container>
        <Sdw.LogoContainer>
          <Sdw.Logo src={Logo} />
        </Sdw.LogoContainer>
        <Link to="/" style={{ width: "100%" }} onClick={onClose}>
          <Sdw.Tabs>
            <House />
            <Sdw.TabText>Ana Sayfa</Sdw.TabText>
          </Sdw.Tabs>
        </Link>
        <Link to="/products" style={{ width: "100%" }} onClick={onClose}>
          <Sdw.Tabs>
            <Wrench />
            <Sdw.TabText>Ürünler</Sdw.TabText>
          </Sdw.Tabs>
        </Link>
        <Link to="/products" style={{ width: "100%" }} onClick={onClose}>
          <Sdw.Tabs>
            <DotsNine />
            <Sdw.TabText>Kategoriler</Sdw.TabText>
          </Sdw.Tabs>
        </Link>
        <Link to="/" style={{ width: "100%" }} onClick={onClose}>
          <Sdw.Tabs>
            <Buildings />
            <Sdw.TabText>Hakkımızda</Sdw.TabText>
          </Sdw.Tabs>
        </Link>

        <Sdw.Tabs
          style={{ cursor: "pointer" }}
          onClick={() => {
            onClose();
            isLoggedIn && user ? navigate(`/user/${user.slug}`) : login();
          }}
        >
          <User />
          <Sdw.TabText>Kullanıcı</Sdw.TabText>
        </Sdw.Tabs>

        <Sdw.Tabs
          style={{ cursor: "pointer" }}
          onClick={() => {
            onClose();
            handleCart();
          }}
        >
          <ShoppingCartSimple />
          <Sdw.TabText>Sepetim</Sdw.TabText>
        </Sdw.Tabs>
      </Sdw.Container>
    </Drawer>
  );
};

export default SmallDrawer;
