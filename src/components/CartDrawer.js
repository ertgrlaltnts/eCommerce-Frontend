import React from "react";
import { Drw } from "./styled-component/CartDrawer.style";
import { useDispatch, useSelector } from "react-redux";
import { Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { PlusCircle, MinusCircle } from "phosphor-react";
import { removeBasket, addBasket } from "../store/reducers/User";

const CartDrawer = ({ visibleCart, setVisibleCart }) => {
  const { basket, totalCount } = useSelector((state) => state.User);
  const navigate = useNavigate();
  const dispatch = useDispatch((state) => state.User);
  const onClose = () => {
    setVisibleCart(false);
  };

  const getPayment = () => {
    navigate("/payment");
  };

  return (
    <Drawer
      title="Sepetim"
      placement="right"
      onClose={onClose}
      width={
        window.innerWidth > 768 ? 400 : window.innerWidth > 425 ? 300 : 250
      }
      visible={visibleCart}
      style={{ zIndex: 10001 }}
    >
      {basket.length !== 0 ? (
        <React.Fragment>
          <Drw.ItemArea>
            {basket.map((item) => (
              <Drw.Item>
                <Drw.ImageContainer>
                  <Drw.Image src={item.images[0]} />
                </Drw.ImageContainer>
                <Drw.TextContainer>
                  <Drw.ItemTexts>
                    <Drw.ItemName>{item.title}</Drw.ItemName>
                    <Drw.ItemText>{item.subdesc}</Drw.ItemText>
                  </Drw.ItemTexts>
                  <Drw.Buttons>
                    <Drw.Counter>
                      <MinusCircle
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(removeBasket({ ...item, quantity: 1 }))
                        }
                      />
                      <Drw.CounterAmount>{item.quantity}</Drw.CounterAmount>
                      <PlusCircle
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(addBasket({ ...item, quantity: 1 }))
                        }
                      />
                    </Drw.Counter>
                    <Drw.Price>{item.price * item.quantity} TL</Drw.Price>
                  </Drw.Buttons>
                </Drw.TextContainer>
              </Drw.Item>
            ))}
          </Drw.ItemArea>
          <Drw.BottomArea>
            <Drw.PriceContainer>
              <Drw.PriceTitle>Toplam Sepet Tutarı : </Drw.PriceTitle>

              <Drw.TotalCount>{totalCount} TL</Drw.TotalCount>
            </Drw.PriceContainer>
            <Drw.ButtonArea>
              <Drw.Button onClick={getPayment}>Satın al</Drw.Button>
            </Drw.ButtonArea>
          </Drw.BottomArea>
        </React.Fragment>
      ) : (
        <Drw.EmptyContainer>
          <Drw.EmptyText>Sepetiniz boş</Drw.EmptyText>
        </Drw.EmptyContainer>
      )}
    </Drawer>
  );
};

export default CartDrawer;
