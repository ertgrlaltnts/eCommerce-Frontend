import React from "react";
import PageTransition from "../components/PageTransition";
import { Row, Col, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { removeBasket, addBasket } from "../store/reducers/User";
import { PlusCircle, MinusCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Pym } from "./styled-components/Payment.style";
import WrapView from "../components/WrapView";

const Payment = () => {
  const { basket, totalCount } = useSelector((state) => state.User);
  const dispatch = useDispatch((state) => state.User);
  const navigate = useNavigate();

  const getConfirm = () => {
    navigate("/payment/confirm");
  };
  return (
    <>
      <PageTransition>
        <WrapView>
          <Pym.Container>
            <Row gutter={[16, 16]}>
              <Col span={18}>
                <Pym.Right>
                  {basket.map((item) => (
                    <Pym.Item>
                      <Pym.ImageContainer>
                        <Pym.Image src={item.images[0]} />
                      </Pym.ImageContainer>
                      <Pym.TextContainer>
                        <Pym.ItemName>{item.title}</Pym.ItemName>
                        <Pym.Counter>
                          <MinusCircle
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch(removeBasket({ ...item, quantity: 1 }))
                            }
                          />
                          <Pym.CounterAmount>{item.quantity}</Pym.CounterAmount>
                          <PlusCircle
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch(addBasket({ ...item, quantity: 1 }))
                            }
                          />
                        </Pym.Counter>
                        <Pym.Price>{item.price * item.quantity} TL</Pym.Price>
                      </Pym.TextContainer>
                    </Pym.Item>
                  ))}
                </Pym.Right>
              </Col>
              <Col span={6}>
                <Pym.Left>
                  <Pym.Button onClick={getConfirm}>Sepeti Onayla</Pym.Button>
                  <Pym.Summary>
                    <Pym.BigText>Sipariş Özeti</Pym.BigText>
                    <Pym.RowText style={{ marginTop: 20 }}>
                      <Pym.Text>Toplam Fiyat</Pym.Text>
                      <Pym.Text>{totalCount} TL</Pym.Text>
                    </Pym.RowText>
                    <Pym.RowText>
                      <Pym.Text>Kargo Ücreti</Pym.Text>
                      <Pym.Text>0 TL</Pym.Text>
                    </Pym.RowText>
                    <Divider />
                    <Pym.Total>{totalCount} TL</Pym.Total>
                  </Pym.Summary>
                  <Pym.Button onClick={getConfirm}>Sepeti Onayla</Pym.Button>
                </Pym.Left>
              </Col>
            </Row>
          </Pym.Container>
        </WrapView>
      </PageTransition>
    </>
  );
};

export default Payment;
