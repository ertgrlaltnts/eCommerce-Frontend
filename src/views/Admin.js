import React, { useState } from "react";
import { Row, Col, notification } from "antd";
import { Adm } from "./styled-components/Admin.style";
import { signOutAdmin } from "../store/reducers/Admin";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../components/Admin/AddProduct";
import EditOrders from "../components/Admin/EditOrders";
import EditProducts from "../components/Admin/EditProducts";
import EditUsers from "../components/Admin/EditUsers";
import UserTab from "../components/Admin/UserTab";
import Logo from "../assets/logo.png";

const Admin = () => {
  const [tab, setTab] = useState(1);
  const [user, setUser] = useState();
  const { userList, productList } = useSelector((state) => state.Admin);

  console.log(userList);

  const dispatch = useDispatch((state) => state.Admin);

  const addNotification = (placement) => {
    notification.success({
      message: "Başarıyla Çıkış Yapıldı",
    });
  };

  const signOut = () => {
    dispatch(signOutAdmin());
    addNotification("topRight");
  };

  return (
    <Adm.Container>
      <Row>
        <Col span={5}>
          <Adm.Wrapper>
            <Adm.Logo src={Logo} />
            <Adm.Items>
              <Adm.Item onClick={() => setTab(1)}>Ürün Ekle</Adm.Item>
              <Adm.Item onClick={() => setTab(2)}>Ürünleri Listele</Adm.Item>
              <Adm.Item onClick={() => setTab(3)}>Siparişleri Listele</Adm.Item>
              <Adm.Item onClick={() => setTab(4)}>
                Kullanıcıları Listele
              </Adm.Item>
            </Adm.Items>
            <Adm.Item onClick={signOut}>Çıkış Yap</Adm.Item>
          </Adm.Wrapper>
        </Col>
        <Col span={19}>
          <Adm.RightWrapper>
            {tab === 1 ? (
              <AddProduct />
            ) : tab === 2 ? (
              <EditProducts products={productList} />
            ) : tab === 3 ? (
              <EditOrders />
            ) : tab === 4 ? (
              <EditUsers setTab={setTab} setUser={setUser} users={userList} />
            ) : (
              <UserTab user={user} setTab={setTab} />
            )}
          </Adm.RightWrapper>
        </Col>
      </Row>
    </Adm.Container>
  );
};

export default Admin;
