import React, { useState } from "react";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";
import SmallNavbar from "./SmallNavbar";
import SmallDrawer from "./SmallDrawer/SmallDrawer";
import Footer from "./Footer";
import Login from "./Login";

const WrapView = ({ children }) => {
  const [visibleCart, setVisibleCart] = useState(false);
  const [visibleSmallDrawer, setVisibleSmallDrawer] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showDrawer = () => {
    setVisibleCart(true);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showSmallDrawer = () => {
    setVisibleSmallDrawer(true);
  };
  return (
    <>
      <Navbar drawer={showDrawer} login={showModal} />
      <CartDrawer visibleCart={visibleCart} setVisibleCart={setVisibleCart} />
      <Login
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <SmallNavbar
        drawer={showSmallDrawer}
        login={showModal}
        visibleSmallDrawer={visibleSmallDrawer}
      />
      <SmallDrawer
        visibleSmallDrawer={visibleSmallDrawer}
        setVisibleSmallDrawer={setVisibleSmallDrawer}
        visibleCart={visibleCart}
        setVisibleCart={setVisibleCart}
        drawer={showDrawer}
        login={showModal}
      />

      {children}
      <Footer />
    </>
  );
};

export default WrapView;
