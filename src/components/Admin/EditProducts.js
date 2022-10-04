import React, { useState } from "react";
import PageTransition from "../PageTransition";
import { Row, Col } from "antd";
import { Epr } from "./styled-component/EditProduct.style";
import ProductModal from "./ProductModal";

const EditProducts = ({ products }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  let productList = products;

  const [data, setData] = useState({
    title: "",
    desc: "",
    rate: "",
    price: "",
    amount: "",
    images: ["", "", "", ""],
    category: "",
  });

  const handleTitle = (e) => {
    setData(e);
    setIsModalVisible(true);
  };

  return (
    <>
      <PageTransition>
        <Epr.Container>
          <Row gutter={[16, 16]}>
            {productList.map((item) => (
              <Col span={8}>
                <Epr.Block>
                  <Epr.Card>
                    <Epr.Image src={item.images[0]} />
                    <Epr.Title onClick={() => handleTitle(item)}>
                      {item.title}
                    </Epr.Title>
                  </Epr.Card>
                </Epr.Block>
              </Col>
            ))}
          </Row>
        </Epr.Container>
        <ProductModal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          data={data}
        />
      </PageTransition>
    </>
  );
};

export default EditProducts;
