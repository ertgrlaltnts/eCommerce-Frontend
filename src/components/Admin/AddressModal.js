import React from "react";
import { Modal } from "antd";
import { Utb } from "./styled-component/UserTab.style";
import { Row, Col } from "antd";

const AddressModal = ({ isModalVisible, setIsModalVisible, data }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title={data.name}
      width={600}
      visible={isModalVisible}
      footer={null}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <Utb.Container>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Utb.TextAddress>Ad : {data.name}</Utb.TextAddress>
          </Col>
          <Col span={12}>
            <Utb.TextAddress>Şehir : {data.city}</Utb.TextAddress>
          </Col>
          <Col span={12}>
            <Utb.TextAddress>İlçe : {data.district}</Utb.TextAddress>
          </Col>

          <Col span={24}>
            <Utb.TextAddress>Adres : {data.address}</Utb.TextAddress>
          </Col>

          <Col span={12}>
            <Utb.TextAddress>Bina No : {data.buildNo}</Utb.TextAddress>
          </Col>

          <Col span={12}>
            <Utb.TextAddress>Daire No: {data.departmentNo}</Utb.TextAddress>
          </Col>
        </Row>
      </Utb.Container>
    </Modal>
  );
};

export default AddressModal;
