import React from "react";
import Slider from "react-slick";
import { Bsl } from "./styled-component/BestSeller.style";
import { CaretRight } from "phosphor-react";
import BestItem from "./BestItem";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../store/reducers/User";
import { notification } from "antd";
import { Link } from "react-router-dom";

const BestSeller = ({ bestProduct, login }) => {
  const { isLoggedIn } = useSelector((state) => state.User);
  const dispatch = useDispatch((state) => state.User);

  const addNotification = (placement, data) => {
    notification.success({
      message: "Sepete Eklendi",
      description: data.title,
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

  const addItemToBasket = (data) => {
    if (isLoggedIn) {
      dispatch(addBasket({ ...data, quantity: 1 }));
      addNotification("topRight", data);
    } else {
      addNotificationWarn("topRight");
      login();
    }
  };

  var settings = {
    infinite: true,
    speed: 500,
    lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div>
      <Bsl.Container>
        <Bsl.TitleContainer>
          <Bsl.Title>Çok Satanlar</Bsl.Title>
          <Bsl.SeeAll>
            <Link to={"/products"}>
              <div style={{ color: "#000" }}>GÖZ AT</div>
            </Link>
            <CaretRight size={18}></CaretRight>
          </Bsl.SeeAll>
        </Bsl.TitleContainer>

        <Slider {...settings}>
          {bestProduct.map((item) => (
            <BestItem
              image={item.images[0]}
              price={item.price}
              rate={item.rate}
              title={item.title}
              slug={item.slug}
              isRoute={false}
              addItem={() => addItemToBasket(item)}
            />
          ))}
        </Slider>
      </Bsl.Container>
    </div>
  );
};

export default BestSeller;
