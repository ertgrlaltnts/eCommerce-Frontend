import React, { useState } from "react";
import PageTransition from "../PageTransition";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, notification } from "antd";
import axios from "axios";
import { Adp } from "./styled-component/AddProduct.style";
import { addProduct } from "../../store/reducers/Admin";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [degree, setDegree] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch((state) => state.Admin);
  const { productList } = useSelector((state) => state.Admin);

  const handleButton = async () => {
    const obj = {
      title: title,
      desc: desc,
      rate: parseInt(degree),
      price: parseInt(price),
      amount: parseInt(amount),
      images: [image1, image2, image3, image4],
      category: "62d023d9521511f0235b7c81",
    };

    const successNotification = () => {
      notification.success({
        message: "Başarıyla ürün eklendi",
      });
    };

    const errorNotification = () => {
      notification.warn({
        message: "Bir hata oluştu",
      });
    };

    const product = await axios.post(
      `http://${process.env.REACT_APP_IP}/product/create`,
      obj
    );

    if (product.data.response === 1) {
      successNotification("topRight");
      dispatch(addProduct(obj));
      console.log(productList);
    } else if (product.data.response === 2) {
      errorNotification();
    }
  };

  return (
    <>
      <PageTransition>
        <Adp.Wrapper>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Adp.Input
                placeholder="Ürün Adı"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Ürün Açıklaması"
                onChange={(e) => setDesc(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Derece"
                onChange={(e) => setDegree(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Fiyat"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Miktar"
                onChange={(e) => setAmount(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Fotoğraf-1"
                onChange={(e) => setImage1(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Fotoğraf-2"
                onChange={(e) => setImage2(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Fotoğraf-3"
                onChange={(e) => setImage3(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Fotoğraf-4"
                onChange={(e) => setImage4(e.target.value)}
              />
            </Col>
            <Col span={12}>
              <Adp.Input
                placeholder="Kategori"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <Adp.Button onClick={handleButton}>ÜRÜNÜ EKLE</Adp.Button>
            </Col>
          </Row>
        </Adp.Wrapper>
      </PageTransition>
    </>
  );
};

export default AddProduct;
