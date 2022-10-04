import React, { useState } from "react";
import PageTransition from "../PageTransition";
import { Utb } from "./styled-component/UserTab.style";
import { useDispatch } from "react-redux";
import { Row, Col, notification } from "antd";
import axios from "axios";
import { AddressBook } from "phosphor-react";
import AddressModal from "./AddressModal";
import { deleteUser } from "../../store/reducers/Admin";

const UserTab = ({ user, setTab }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    id: "",
    where: "",
    name: "",
    city: "",
    district: "",
    address: "",
    buildNo: "",
    departmentNo: "",
  });
  const dispatch = useDispatch((state) => state.Admin);

  const handleBlock = (item) => {
    setData(item);
    setIsModalVisible(true);
  };

  const successNotification = () => {
    notification.success({
      message: "Kullanıcı başarıyla silindi",
    });
  };

  const errorNotification = () => {
    notification.warn({
      message: "Bir hata oluştu",
    });
  };

  const handleDelete = async () => {
    const val = await axios.post(
      `http://${process.env.REACT_APP_IP}/users/delete`,
      user
    );
    if (val.data.response === 1) {
      successNotification();
      dispatch(deleteUser(user));
      setTab(4);
    } else {
      errorNotification();
    }
  };

  return (
    <>
      <PageTransition>
        <Utb.Container>
          <Utb.Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
          <Utb.Name>
            {user.name} {user.surName}
          </Utb.Name>
          <Utb.Block>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Utb.Text>ID : 12315413215642</Utb.Text>
              </Col>
              <Col span={12}>
                <Utb.Text>Email : {user.email}</Utb.Text>
              </Col>
              <Col span={12}>
                <Utb.Text>Şifre : *********</Utb.Text>
              </Col>

              <Col span={12}>
                <Utb.Text>Rolü : {user.role}</Utb.Text>
              </Col>
              <Col span={24}>
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Utb.AddressName>Adresler</Utb.AddressName>
                  </Col>
                  {user.address.map((item) => (
                    <Col span={8}>
                      <Utb.BlockAddress onClick={() => handleBlock(item)}>
                        <Utb.Card>
                          <Utb.Top>
                            <AddressBook />
                          </Utb.Top>
                        </Utb.Card>
                        <Utb.Title>{item.name}</Utb.Title>
                      </Utb.BlockAddress>
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col span={24}>
                <Utb.DeleteButton onClick={handleDelete}>
                  Kullanıcıyı Sil
                </Utb.DeleteButton>
              </Col>
            </Row>
          </Utb.Block>
        </Utb.Container>
        <AddressModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          data={data}
        />
      </PageTransition>
    </>
  );
};

export default UserTab;
