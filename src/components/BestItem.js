import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  TextBox,
  ImageBox,
  Btn,
  LikeBtn,
  LikeRow,
  Comments,
  Title,
  Stars,
  Price,
} from "./styled-component/BestItem.style";
import { Heart } from "phosphor-react";
import QuickView from "./QuickView";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

import "../index.css";
import { Rate } from "antd";

const BestItem = ({ image, rate, title, price, addItem, slug, isRoute }) => {
  const item = {
    image: image,
    rate: rate,
    title: title,
    price: price,
    slug: slug,
  };
  const boxVariant = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };
  const [visible, setVisible] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const imageVariants = {
    beforeHover: { scale: 1 },
    onHover: { scale: 1.1 },
  };

  const textVariants = {
    beforeHover: { opacity: 0 },
    onHover: { opacity: 1 },
  };

  const viewItem = () => {
    setVisible(true);
  };

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Container>
        <Box initial="beforeHover" whileHover="onHover">
          <LikeRow>
            <LikeBtn>
              <Heart />
            </LikeBtn>
          </LikeRow>
          {isRoute ? (
            <Link to={"/products/" + slug}>
              <ImageBox variants={imageVariants} src={`${image}`} />
            </Link>
          ) : (
            <ImageBox variants={imageVariants} src={`${image}`} />
          )}

          <TextBox variants={textVariants}>
            <Btn onClick={viewItem}>İNCELE</Btn>
            <Btn onClick={addItem}>EKLE</Btn>
          </TextBox>
        </Box>
        <Comments>
          <Link to={"/products/" + slug}>
            <Title>{title}</Title>
          </Link>
          <Stars>
            <Rate disabled value={rate} />
          </Stars>
          <Price>{price} TL</Price>
        </Comments>
      </Container>
      <QuickView visible={visible} setVisible={setVisible} itemPr={item} />
    </motion.div>
  );
};

export default BestItem;
