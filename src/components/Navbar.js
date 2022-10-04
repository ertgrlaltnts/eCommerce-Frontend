import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo-2.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { notification } from "antd";
import { Nbr } from "./styled-component/Navbar.style";
import { User, ShoppingCartSimple } from "phosphor-react";

const Navbar = ({ drawer, login }) => {
  const [navSize, setnavSize] = useState("80px");
  const [navColor, setnavColor] = useState("transparent");
  const [navTextColor, setnavTextColor] = useState("#000");
  const { isLoggedIn, user } = useSelector((state) => state.User);
  const [logo, setLogo] = useState(true);
  const navigate = useNavigate();
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgba(0, 0, 0, 0.8)")
      : setnavColor("#fff");
    window.scrollY > 10 ? setnavSize("70px") : setnavSize("80px");
    window.scrollY > 10 ? setnavTextColor("#fff") : setnavTextColor("#000");
    window.scrollY > 10 ? setLogo(false) : setLogo(true);
  };

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

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Nbr.Container height={navSize} color={navColor}>
      <Nbr.Wrapper>
        <Nbr.ItemContainer>
          <Link to="/">
            <Nbr.Logo src={logo === true ? Logo : Logo2} />
          </Link>
        </Nbr.ItemContainer>
        <Nbr.TabsContainer>
          <Link to="/">
            <Nbr.Item color={navTextColor}>ANA SAYFA</Nbr.Item>
          </Link>
          <Link to="/products">
            <Nbr.Item color={navTextColor}>ÜRÜNLER</Nbr.Item>
          </Link>

          <Nbr.Item color={navTextColor}>KATEGORİLER</Nbr.Item>

          <Nbr.Item color={navTextColor}>HAKKIMIZDA</Nbr.Item>
        </Nbr.TabsContainer>
        <Nbr.LogoContainer>
          <Nbr.Item color={navTextColor}>
            <User
              size={24}
              onClick={() => {
                isLoggedIn && user ? navigate(`/user/${user._id}`) : login();
              }}
            />
          </Nbr.Item>
          <Nbr.Item color={navTextColor}>
            <ShoppingCartSimple size={24} onClick={handleCart} />
          </Nbr.Item>
        </Nbr.LogoContainer>
      </Nbr.Wrapper>
    </Nbr.Container>
  );
};

export default Navbar;
