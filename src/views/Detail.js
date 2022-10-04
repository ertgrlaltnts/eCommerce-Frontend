import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Divider, Rate, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../store/reducers/User";
import { Dtl } from "./styled-components/Detail.style";
import BackTopIcon from "../components/BackTopIcon";
import { Heart } from "phosphor-react";
import Counter from "../components/Counter";
import PageTransition from "../components/PageTransition";
import WrapView from "../components/WrapView";

const Detail = ({ login }) => {
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(1);
  const [bigImg, setBigImg] = useState();
  const { slug } = useParams();
  const dispatch = useDispatch((state) => state.User);
  const { productList } = useSelector((state) => state.Admin);
  const { isLoggedIn } = useSelector((state) => state.User);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      setData(await productList.find((item) => item.slug === slug));
      setBigImg(await productList.find((item) => item.slug === slug).images[0]);
    };

    fetchData();
  }, [productList, slug]);

  const changeBigImg = (img) => {
    setBigImg(img);
  };
  const addNotification = (placement) => {
    notification.success({
      message: "Sepete Eklendi",
      description: data?.title,
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
      dispatch(addBasket({ ...data, quantity: counter }));
      addNotification("topRight");
    } else {
      addNotificationWarn("topRight");
      login();
    }
  };

  return (
    <>
      <WrapView>
        <PageTransition>
          <Dtl.Container>
            <Row gutter={[4, 4]}>
              <Col xs={24} sm={24} md={24} lg={16} xl={16}>
                <Dtl.Left>
                  <Row gutter={[8, 8]}>
                    <Col span={3}>
                      <Dtl.SmallImages>
                        {data?.images?.map((item) => (
                          <Dtl.SmallImg
                            onClick={() => changeBigImg(item)}
                            src={item}
                          />
                        ))}
                      </Dtl.SmallImages>
                    </Col>
                    <Col span={21}>
                      <Dtl.BigImg>
                        <Image src={bigImg}></Image>
                      </Dtl.BigImg>
                    </Col>
                  </Row>
                </Dtl.Left>
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={8}>
                <Dtl.Right>
                  <Dtl.Name>{data?.title}</Dtl.Name>
                  <Dtl.Price>{data?.price} TL</Dtl.Price>
                  <Rate disabled value={data?.rate} />
                  <Divider />
                  <Dtl.Subtitle>Çok Portatif bir üründür.</Dtl.Subtitle>
                  <Dtl.Amount>
                    <Counter
                      counter={counter}
                      setCounter={setCounter}
                      amount={data?.amount}
                    />
                  </Dtl.Amount>
                  <Dtl.CartBtn onClick={() => addProductInBasket()}>
                    SEPETE EKLE
                  </Dtl.CartBtn>
                  <Dtl.FavouriteBtn>
                    <Heart size={18} style={{ marginRight: 10 }} />
                    <div>FAVORİLERE EKLE</div>
                  </Dtl.FavouriteBtn>
                </Dtl.Right>
              </Col>
            </Row>
            <BackTopIcon />
          </Dtl.Container>
        </PageTransition>
      </WrapView>
    </>
  );
};

export default Detail;
