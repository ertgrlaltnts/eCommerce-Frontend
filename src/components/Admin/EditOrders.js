import React, { useState } from "react";
import PageTransition from "../PageTransition";
import orders from "../../data/orderData.json";
import { Eos } from "./styled-component/EditOrders.style";
import { Check, X, Package, MagnifyingGlass, Binoculars } from "phosphor-react";
import { Input } from "antd";
import OrderModal from "./OrderModal";

const EditOrders = () => {
  const [search, setSearch] = useState("");
  const [id, setId] = useState(2);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState();
  let orderList = orders;

  const handleSearchFilter = () => {
    let temp = orderList.filter(
      ({ customer }) =>
        customer.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );

    orderList = temp;
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterOrders = () => {
    if (id === 1) {
      let temp = orders.filter((item) => item.isDelivery === true);
      orderList = temp;
    } else if (id === 2) {
      orderList = orders;
    } else {
      let temp = orders.filter((item) => item.isDelivery === false);
      orderList = temp;
    }
  };

  const handleButton = (e) => {
    setData(e);
    setIsModalVisible(true);
  };
  filterOrders();
  handleSearchFilter();

  return (
    <>
      <PageTransition>
        <Eos.Block>
          <Eos.Settings>
            <Eos.SettingItem onClick={() => setId(1)}>
              <Check style={{ color: "#48E81C", fontSize: 20 }} />
              <Eos.Text>Teslim Edilenler</Eos.Text>
            </Eos.SettingItem>
            <Eos.SettingItem onClick={() => setId(2)}>
              <Package style={{ color: "#000", fontSize: 20 }} />
              <Eos.Text>Hepsi</Eos.Text>
            </Eos.SettingItem>
            <Eos.SettingItem onClick={() => setId(3)}>
              <X style={{ color: "#E41212", fontSize: 20 }} />
              <Eos.Text>Teslim Edilmeyenler</Eos.Text>
            </Eos.SettingItem>
            <Eos.Input>
              <Input
                placeholder="İsime göre ara"
                bordered={false}
                size="default-size"
                prefix={<MagnifyingGlass />}
                onChange={onSearchChange}
                value={search}
              />
              <Eos.Subscribe>
                <X onClick={() => setSearch("")} />
              </Eos.Subscribe>
            </Eos.Input>
          </Eos.Settings>

          {orderList.length === 0 ? (
            <Eos.Empty>
              <Binoculars size={100} />
              <Eos.EmptyText>Sipariş bulunamadı ...</Eos.EmptyText>
            </Eos.Empty>
          ) : (
            orderList.map((item) => (
              <Eos.Container>
                <Eos.Date>{item.date}</Eos.Date>
                <Eos.TotalPrice>{item.totalPrice} TL</Eos.TotalPrice>
                <Eos.TotalPrice>{item.customer}</Eos.TotalPrice>
                <Eos.Delivery>
                  {item.isDelivery ? (
                    <Eos.Wrapper>
                      <Check style={{ color: "#48E81C", fontSize: 20 }} />
                      <Eos.Text>Teslim Edildi</Eos.Text>
                    </Eos.Wrapper>
                  ) : (
                    <Eos.Wrapper>
                      <X style={{ color: "#E41212", fontSize: 20 }} />
                      <Eos.Text>Teslim Edilmedi</Eos.Text>
                    </Eos.Wrapper>
                  )}
                </Eos.Delivery>
                <Eos.Button onClick={() => handleButton(item)}>
                  İncele
                </Eos.Button>
              </Eos.Container>
            ))
          )}
          <OrderModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            data={data}
          />
        </Eos.Block>
      </PageTransition>
    </>
  );
};

export default EditOrders;
