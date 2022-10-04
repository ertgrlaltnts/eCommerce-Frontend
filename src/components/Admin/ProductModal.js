import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Adp } from "./styled-component/AddProduct.style";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Col, Row, notification } from "antd";
import { deleteProduct, updateProduct } from "../../store/reducers/Admin";

const ProductModal = ({ isModalVisible, setIsModalVisible, data }) => {
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

  useEffect(() => {
    setTitle(data.title);
    setDesc(data.desc);
    setDegree(data.rate);
    setPrice(data.price);
    setAmount(data.amount);
    setImage1(data.images[0]);
    setImage2(data.images[1]);
    setImage3(data.images[2]);
    setImage4(data.images[3]);
    setCategory(data.category);
  }, [
    data.amount,
    data.category,
    data.desc,
    data.images,
    data.price,
    data.rate,
    data.title,
  ]);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const successNotification = (message) => {
    notification.success({
      message: message,
    });
  };

  const errorNotification = () => {
    notification.warn({
      message: "Bir hata oluştu",
    });
  };

  const handleButton = async () => {
    const obj = {
      title: title,
      desc: desc,
      rate: parseInt(degree),
      price: parseInt(price),
      amount: parseInt(amount),
      images: [image1, image2, image3, image4],
      category: category,
      slug: data.slug,
    };

    const product = await axios.put(
      `http://${process.env.REACT_APP_IP}/product/${data.slug}`,
      obj
    );

    if (product.data.response === 1) {
      successNotification("Ürün başarıyla düzenlendi");
      dispatch(updateProduct(obj));
      setIsModalVisible(false);
    } else if (product.data.response === 2) {
      errorNotification();
    }
  };

  const handleDelete = async () => {
    const obj = {
      slug: data.slug,
    };
    const product = await axios.delete(
      `http://${process.env.REACT_APP_IP}/product/${data.slug}`
    );
    if (product.data.response === 1) {
      successNotification("Ürün başarıyla silindi");
      dispatch(deleteProduct(obj));
      setIsModalVisible(false);
    } else if (product.data.response === 2) {
      errorNotification();
    }
  };

  return (
    <Modal
      title="Düzenle"
      width={600}
      visible={isModalVisible}
      footer={null}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Adp.Wrapper>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Adp.Input
              placeholder="Ürün Adı"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              defaultValue={desc}
              placeholder="Ürün Açıklaması"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Derece"
              defaultValue={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Fiyat"
              defaultValue={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Miktar"
              defaultValue={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Fotoğraf-1"
              defaultValue={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Fotoğraf-2"
              defaultValue={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Fotoğraf-3"
              defaultValue={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Fotoğraf-4"
              defaultValue={image4}
              onChange={(e) => setImage4(e.target.value)}
            />
          </Col>
          <Col span={12}>
            <Adp.Input
              placeholder="Kategori"
              defaultValue={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Col>
          <Col span={24}>
            <Adp.DeleteButton onClick={handleDelete}>
              ÜRÜNÜ SİL
            </Adp.DeleteButton>
          </Col>
          <Col span={24}>
            <Adp.Button onClick={handleButton}>ÜRÜNÜ KAYDET</Adp.Button>
          </Col>
        </Row>
      </Adp.Wrapper>
    </Modal>
  );
};

export default ProductModal;
