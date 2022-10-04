import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import Logo from "../assets/logo.png";
import Logo2 from "../assets/logo-2.png";
import { Link } from "react-router-dom";
import { Snb } from "./styled-component/SmallNavbar.style";
import { List } from "phosphor-react";

const SmallNavbar = ({ drawer, login, visibleSmallDrawer }) => {
  const [navSize, setnavSize] = useState("80px");
  const [navColor, setnavColor] = useState("transparent");
  const [navTextColor, setnavTextColor] = useState("#000");
  const [logo, setLogo] = useState(true);

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgba(0, 0, 0, 0.8)")
      : setnavColor("#fff");
    window.scrollY > 10 ? setnavSize("70px") : setnavSize("80px");
    window.scrollY > 10 ? setnavTextColor("#fff") : setnavTextColor("#000");
    window.scrollY > 10 ? setLogo(false) : setLogo(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Snb.Container height={navSize} color={navColor}>
      <Snb.Wrapper>
        <Snb.ItemContainer>
          <Link to="/">
            <Snb.Logo src={logo === true ? Logo : Logo2} />
          </Link>
        </Snb.ItemContainer>
        <Snb.LogoContainer>
          {/* <Snb.Item color={navTextColor}>
<User
  size={24}
  onClick={() => {
    isLoggedIn && user ? navigate(`/user/${user.slug}`) : login();
  }}
/>
</Snb.Item>
<Snb.Item color={navTextColor}>
<ShoppingCartSimple size={24} onClick={handleCart} />
</Snb.Item> */}
          <Snb.Item color={navTextColor}>
            <List
              size={32}
              style={
                visibleSmallDrawer
                  ? {
                      transform: "rotate(90deg)",
                      transition: "all 0.3s ease-in-out",
                    }
                  : {
                      transition: "all 0.3s ease-in-out",
                    }
              }
              onClick={drawer}
            />
          </Snb.Item>
        </Snb.LogoContainer>
      </Snb.Wrapper>
    </Snb.Container>
  );
};

export default SmallNavbar;
