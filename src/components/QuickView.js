import React, { useState, useEffect } from "react";
import { Row, Col, Image, Divider, Rate, notification, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../store/reducers/User";
import { Qvw } from "./styled-component/QuickView.style";
import { Heart } from "phosphor-react";
import bestData from "../data/bestData.json";
import Counter from "../components/Counter";

const QuickView = ({ visible, setVisible, login, itemPr }) => {
  const [data, setData] = useState();
  const [counter, setCounter] = useState(1);
  const [bigImg, setBigImg] = useState();
  const dispatch = useDispatch((state) => state.User);
  const { isLoggedIn } = useSelector((state) => state.User);

  useEffect(() => {
    setData(bestData.find((item) => item.slug === itemPr.slug));

    setBigImg(data?.images[0]);
  }, [itemPr, data]);

  const changeBigImg = (img) => {
    setBigImg(img);
  };
  const addNotification = (placement) => {
    notification.success({
      message: "Sepete Eklendi",
      description: data?.title,
      placement: placement,
      duration: 1,
    });
  };

  const addNotificationWarn = (placement) => {
    notification.warn({
      message: `Öncelikle giriş yapmalısınız !`,
      placement: placement,
      duration: 3,
    });
  };

  const addProductInBasket = () => {
    if (isLoggedIn) {
      setVisible(false);
      addNotification("topRight");
      dispatch(addBasket({ ...data, quantity: counter }));
    } else {
      setVisible(false);
      addNotificationWarn("topRight");
      login();
    }
  };
  const handleOk = () => {
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <Modal
      width={800}
      visible={visible}
      footer={null}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Qvw.Container>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Row gutter={[8, 8]}>
              <Col span={3}>
                <Qvw.SmallImages>
                  {data?.images?.map((item) => (
                    <Qvw.SmallImg
                      onClick={() => changeBigImg(item)}
                      src={item}
                    />
                  ))}
                </Qvw.SmallImages>
              </Col>
              <Col span={21}>
                <Qvw.BigImg>
                  <Image src={bigImg}></Image>
                </Qvw.BigImg>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Qvw.Right>
              <Qvw.Name>{data?.title}</Qvw.Name>
              <Qvw.Price>{data?.price} TL</Qvw.Price>
              <Rate disabled value={data?.rate} />
              <Divider />
              <Qvw.Subtitle>Çok Portatif bir üründür.</Qvw.Subtitle>
              <Qvw.Amount>
                <Counter
                  counter={counter}
                  setCounter={setCounter}
                  amount={data?.amount}
                />
              </Qvw.Amount>
              <Qvw.CartBtn onClick={() => addProductInBasket()}>
                SEPETE EKLE
              </Qvw.CartBtn>
              <Qvw.FavouriteBtn>
                <Heart size={18} style={{ marginRight: 10 }} />
                <div>FAVORİLERE EKLE</div>
              </Qvw.FavouriteBtn>
            </Qvw.Right>
          </Col>
        </Row>
      </Qvw.Container>
    </Modal>
  );
};

export default QuickView;
