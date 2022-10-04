import React from "react";
import { Ocr } from "./styled-component/OrderCard.style";
import { Check, X } from "phosphor-react";

const OrderCard = ({ order }) => {
  return (
    <div>
      {order.order.map((item) => (
        <Ocr.Item>
          <Ocr.ImageContainer>
            <Ocr.Image src={item.images[0]} />
          </Ocr.ImageContainer>
          <Ocr.Text>{item.title}</Ocr.Text>
          <Ocr.Text>{item.subdesc}</Ocr.Text>
          <Ocr.Text>{item.count} Adet</Ocr.Text>
          <Ocr.Text>{item.price * item.count} TL</Ocr.Text>
        </Ocr.Item>
      ))}
      <Ocr.BottomArea>
        <Ocr.Block>
          <Ocr.Text>Sipariş Adresi : Songülün Evi</Ocr.Text>
        </Ocr.Block>
        <Ocr.Block>
          {" "}
          <Ocr.Text>Sipariş Tarihi : {order.date}</Ocr.Text>
        </Ocr.Block>
        <Ocr.Block>
          <Ocr.Text>Toplam Tutar : {order.totalPrice} TL</Ocr.Text>
        </Ocr.Block>
        <Ocr.Block>
          {order.isDelivery === true ? (
            <Ocr.Wrapper>
              <Check style={{ color: "#48E81C", fontSize: 20 }} />
              <Ocr.Text>Teslim Edildi</Ocr.Text>
            </Ocr.Wrapper>
          ) : (
            <Ocr.Wrapper>
              <X style={{ color: "#E41212", fontSize: 20 }} />
              <Ocr.Text>Teslim Edilmedi</Ocr.Text>
            </Ocr.Wrapper>
          )}
        </Ocr.Block>
      </Ocr.BottomArea>
    </div>
  );
};

export default OrderCard;
