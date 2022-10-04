import React from "react";
import { Modal } from "antd";
import OrderCard from ".././OrderCard";

const OrderModal = ({ isModalVisible, setIsModalVisible, data }) => {
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Siparişi İncele"
      width={600}
      visible={isModalVisible}
      footer={null}
      onOk={handleOk}
      onCancel={handleClose}
    >
      <OrderCard order={data} />
    </Modal>
  );
};

export default OrderModal;
