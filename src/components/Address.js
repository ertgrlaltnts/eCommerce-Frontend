import React from "react";
import { Adr } from "./styled-component/Address.style";
import { useSelector } from "react-redux";
import { Plus, House, Buildings, AddressBook } from "phosphor-react";
import { Row, Col } from "antd";

const Address = ({ setActiveTab }) => {
  const { user } = useSelector((state) => state.User);

  return (
    <Adr.Container>
      <Row gutter={[8, 8]}>
        {user.address.map((item) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Adr.Block>
              <Adr.Card>
                <Adr.Top>
                  {item.where === "home" ? (
                    <House />
                  ) : item.where === "business" ? (
                    <Buildings />
                  ) : (
                    <AddressBook />
                  )}
                </Adr.Top>
              </Adr.Card>
              <Adr.Title>{item.name}</Adr.Title>
            </Adr.Block>
          </Col>
        ))}

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Adr.Block onClick={() => setActiveTab(7)}>
            <Adr.Create>
              <Plus
                style={{ color: "#d9d9d9", fontWeight: "bold", fontSize: 25 }}
              />
            </Adr.Create>
            <Adr.Title>OLUŞTUR</Adr.Title>
          </Adr.Block>
        </Col>
      </Row>
    </Adr.Container>
  );
};

export default Address;
