import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import WrapView from "../components/WrapView";
import { useSelector } from "react-redux";
import { Row, Col, Divider, Modal } from "antd";
import { Pcf } from "./styled-components/PaymentConfirm.style";
import { Plus, House, Buildings, AddressBook } from "phosphor-react";
import Chip from "../assets/chip.png";
import Logo from "../assets/logo.png";
import CreateAddress from "../components/CreateAddress";
import CreditCard from "../components/CreditCard";

const PaymentConfirm = () => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  const [select, setSelect] = useState();
  const [selectAddress, setSelectAddress] = useState();
  const [selectC, setSelectC] = useState();
  const [selectCard, setSelectCard] = useState();
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);
  const { totalCount, user } = useSelector((state) => state.User);

  const handleLeft = () => {
    setLeft(true);
    setRight(false);
  };
  const handleRight = () => {
    setLeft(false);
    setRight(true);
  };

  const handleAddress = (index, item) => {
    setSelect(index);
    setSelectAddress(item);
  };

  const handleCard = (index, item) => {
    setSelectC(index);
    setSelectCard(item);
  };

  const complete = () => {
    const obj = {
      address: selectAddress,
      card: selectCard,
    };
    console.log(obj);
  };

  const handleOkAddress = () => {
    setIsAddressModalVisible(false);
  };

  const handleCloseAddress = () => {
    setIsAddressModalVisible(false);
  };

  const handleOkCard = () => {
    setIsCardModalVisible(false);
  };

  const handleCloseCard = () => {
    setIsCardModalVisible(false);
  };

  return (
    <>
      <WrapView>
        <PageTransition>
          <Pcf.Container>
            <Row gutter={[16, 16]}>
              <Col span={18}>
                <Pcf.Right>
                  <Pcf.Tabs>
                    <Pcf.Tab
                      active={left}
                      style={{
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                      onClick={handleLeft}
                    >
                      Adres Bilgileri
                    </Pcf.Tab>
                    <Pcf.Tab
                      active={right}
                      style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                      onClick={handleRight}
                    >
                      Ödeme Bilgileri
                    </Pcf.Tab>
                  </Pcf.Tabs>
                  <Pcf.TabContainer>
                    <Pcf.BigText style={{ margin: "30px 0 40px 0" }}>
                      Teslimat Adresi
                    </Pcf.BigText>

                    {left === true ? (
                      <Pcf.AddressContainer>
                        <Row gutter={[8, 8]}>
                          {user.address.map((item, index) => (
                            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                              <Pcf.AddressBlock>
                                <Pcf.AddressCard
                                  style={{
                                    border:
                                      select === index
                                        ? "3px solid #000"
                                        : "none",
                                  }}
                                  onClick={() => handleAddress(index, item)}
                                >
                                  <Pcf.AddressTop>
                                    {item.where === "home" ? (
                                      <House />
                                    ) : item.where === "business" ? (
                                      <Buildings />
                                    ) : (
                                      <AddressBook />
                                    )}
                                  </Pcf.AddressTop>
                                </Pcf.AddressCard>
                                <Pcf.AddressTitle>{item.name}</Pcf.AddressTitle>
                              </Pcf.AddressBlock>
                            </Col>
                          ))}

                          <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                            <Pcf.AddressBlock
                              onClick={() => setIsAddressModalVisible(true)}
                            >
                              <Pcf.AddressCreate>
                                <Plus
                                  style={{
                                    color: "#d9d9d9",
                                    fontWeight: "bold",
                                    fontSize: 25,
                                  }}
                                />
                              </Pcf.AddressCreate>
                              <Pcf.AddressTitle>OLUŞTUR</Pcf.AddressTitle>
                            </Pcf.AddressBlock>
                          </Col>
                        </Row>
                      </Pcf.AddressContainer>
                    ) : (
                      <Pcf.CardContainer>
                        <Row gutter={[8, 8]}>
                          {user.cards.map((item, index) => (
                            <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                              <Pcf.CardBlock>
                                <Pcf.CardCard
                                  style={{
                                    border:
                                      selectC === index
                                        ? "3px solid #000"
                                        : "none",
                                  }}
                                  onClick={() => handleCard(index, item)}
                                >
                                  <Pcf.CardTop>
                                    <Pcf.CardItemChip
                                      style={{ marginTop: 5 }}
                                      src={Chip}
                                    />
                                    <Pcf.CardItem
                                      style={{ marginRight: 10 }}
                                      src={Logo}
                                    />
                                  </Pcf.CardTop>
                                  <Pcf.CardMid>
                                    <Pcf.CardNumber>
                                      {item.number}
                                    </Pcf.CardNumber>
                                    <Pcf.CardNumber>{item.name}</Pcf.CardNumber>
                                  </Pcf.CardMid>
                                  <Pcf.CardBot>
                                    <Pcf.CardNumber>
                                      {item.month} / {item.year}
                                    </Pcf.CardNumber>
                                    <Pcf.CardNumber>{item.ccv}</Pcf.CardNumber>
                                  </Pcf.CardBot>
                                </Pcf.CardCard>
                                <Pcf.CardTitle>{item.cardName}</Pcf.CardTitle>
                              </Pcf.CardBlock>
                            </Col>
                          ))}

                          <Col xs={24} sm={24} md={12} lg={6} xl={6}>
                            <Pcf.CardBlock
                              onClick={() => setIsCardModalVisible(true)}
                            >
                              <Pcf.CardCreate>
                                <Plus />
                              </Pcf.CardCreate>
                              <Pcf.CardTitle>OLUŞTUR</Pcf.CardTitle>
                            </Pcf.CardBlock>
                          </Col>
                        </Row>
                      </Pcf.CardContainer>
                    )}
                  </Pcf.TabContainer>
                </Pcf.Right>
              </Col>
              <Col span={6}>
                <Pcf.Left>
                  <Pcf.Button onClick={complete}>Ödemeyi Yap</Pcf.Button>
                  <Pcf.Summary>
                    <Pcf.BigText>Sipariş Özeti</Pcf.BigText>
                    <Pcf.RowText style={{ marginTop: 20 }}>
                      <Pcf.Text>Toplam Fiyat</Pcf.Text>
                      <Pcf.Text>{totalCount} TL</Pcf.Text>
                    </Pcf.RowText>
                    <Pcf.RowText>
                      <Pcf.Text>Kargo Ücreti</Pcf.Text>
                      <Pcf.Text>0 TL</Pcf.Text>
                    </Pcf.RowText>
                    <Divider />
                    <Pcf.Total>{totalCount} TL</Pcf.Total>
                  </Pcf.Summary>
                  <Pcf.Button onClick={complete}>Ödemeyi Yap</Pcf.Button>
                </Pcf.Left>
              </Col>
            </Row>
            <Modal
              title="Adres Ekle"
              width={600}
              visible={isAddressModalVisible}
              footer={null}
              onOk={handleOkAddress}
              onCancel={handleCloseAddress}
            >
              <CreateAddress />
            </Modal>

            <Modal
              title="Adres Ekle"
              width={600}
              visible={isCardModalVisible}
              footer={null}
              onOk={handleOkCard}
              onCancel={handleCloseCard}
            >
              <CreditCard />
            </Modal>
          </Pcf.Container>
        </PageTransition>
      </WrapView>
    </>
  );
};

export default PaymentConfirm;
