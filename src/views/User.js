import React, { useState } from "react";
import { Col, Row, notification } from "antd";
import { Usr } from "./styled-components/User.style";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../store/reducers/User";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CreditCard from "../components/CreditCard";
import TotalCard from "../components/TotalCard";
import Address from "../components/Address";
import CreateAddress from "../components/CreateAddress";
import PastOrders from "../components/PastOrders";
import OrderCard from "../components/OrderCard";
import Favourites from "../components/Favourites";
import UserInfo from "../components/UserInfo";
import PageTransition from "../components/PageTransition";
import WrapView from "../components/WrapView";

const User = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [order, setOrder] = useState();
  const { user } = useSelector((state) => state.User);
  const dispatch = useDispatch((state) => state.User);
  const navigate = useNavigate();
  const addNotification = (placement) => {
    notification.success({
      message: "Başarıyla Çıkış Yapıldı",
    });
  };

  const handleTab = (value) => {
    setActiveTab(value);
  };

  const signOutUser = async () => {
    await axios.get(`http://${process.env.REACT_APP_IP}/users/logout`);
    dispatch(signOut());
    addNotification("topRight");
    navigate("/");
  };

  return (
    <>
      <WrapView>
        <PageTransition>
          <div
            style={{
              paddingTop: 150,
              paddingLeft: 60,
              paddingRight: 60,
              paddingBottom: 50,
            }}
          >
            <Row gutter={[8, 8]}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Usr.Left>
                  <Usr.ImageContainer>
                    <Usr.Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Usr.Name>
                      {user.name} {user.surName}
                    </Usr.Name>
                  </Usr.ImageContainer>
                  <Usr.UserContainer>
                    <Usr.Tab onClick={() => handleTab(1)}>Adreslerim</Usr.Tab>
                    <Usr.Tab onClick={() => handleTab(2)}>Kartlarım</Usr.Tab>
                    <Usr.Tab onClick={() => handleTab(3)}>Siparişlerim</Usr.Tab>
                    <Usr.Tab onClick={() => handleTab(4)}>Favorilerim</Usr.Tab>
                    <Usr.Tab onClick={() => handleTab(5)}>
                      Kullanıcı Bilgilerim
                    </Usr.Tab>
                    <Usr.Tab onClick={signOutUser}>Çıkış Yap</Usr.Tab>
                  </Usr.UserContainer>
                </Usr.Left>
              </Col>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Usr.Right>
                  {activeTab === 1 ? (
                    <Address setActiveTab={setActiveTab} />
                  ) : activeTab === 2 ? (
                    <TotalCard setActiveTab={setActiveTab} />
                  ) : activeTab === 3 ? (
                    <PastOrders
                      setActiveTab={setActiveTab}
                      setOrder={setOrder}
                    />
                  ) : activeTab === 4 ? (
                    <Favourites />
                  ) : activeTab === 5 ? (
                    <UserInfo />
                  ) : activeTab === 6 ? (
                    <CreditCard setActiveTab={setActiveTab} />
                  ) : activeTab === 7 ? (
                    <CreateAddress setActiveTab={setActiveTab} />
                  ) : (
                    <OrderCard order={order} />
                  )}
                </Usr.Right>
              </Col>
            </Row>
          </div>
        </PageTransition>
      </WrapView>
    </>
  );
};

export default User;
