import React, { useState } from "react";
import { Crd } from "./styled-component/CreditCard.style";
import { Select, notification } from "antd";
import { useDispatch } from "react-redux";
import axios from "axios";
import Card from "./Card";
import { createCard } from "../store/reducers/User";

const CreditCard = ({ setActiveTab }) => {
  const { Option } = Select;
  const [val, setVal] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvv, setCvv] = useState("000");
  const dispatch = useDispatch((state) => state.User);

  const addNotification = (value) => {
    notification.success({
      message: value,
      duration: 2,
    });
  };

  const warnNotification = (value) => {
    notification.warn({
      message: value,
      duration: 2,
    });
  };

  const onNumberChange = (e) => {
    setVal(e.target.value);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onMonthChange = (e) => {
    setMonth(e);
  };

  const onYearChange = (e) => {
    setYear(e);
  };

  const onCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const cc_format = (value) => {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  };

  const handleButton = async () => {
    const obj = {
      val,
      name,
      month,
      year,
      cvv,
    };

    const card = await axios.post(
      `http://${process.env.REACT_APP_IP}/users/card`,
      obj
    );

    if (card.data.response === 1) {
      dispatch(createCard(obj));
      addNotification("Adres başarıyla oluşturuldu");
      setActiveTab(2);
    } else {
      warnNotification("Bir hata oluştu");
    }
  };

  return (
    <Crd.Container>
      <Crd.CardContainer>
        <Card val={val} name={name} month={month} year={year} cvv={cvv} />
      </Crd.CardContainer>
      <Crd.InputBox>
        <Crd.InputName>KART NUMARASI</Crd.InputName>
        <Crd.Input
          pattern="[0-9]*"
          maxLength={19}
          value={cc_format(val)}
          onChange={onNumberChange}
        />
      </Crd.InputBox>
      <Crd.InputBox>
        <Crd.InputName>KART SAHİBİ</Crd.InputName>
        <Crd.Input onChange={onNameChange} />
      </Crd.InputBox>
      <Crd.InfoRow>
        <Crd.Select>
          <Crd.InputName>AY</Crd.InputName>
          <Select defaultValue="1" onChange={onMonthChange}>
            <Option value="01">1</Option>
            <Option value="02">2</Option>
            <Option value="03">3</Option>
            <Option value="04">4</Option>
            <Option value="05">5</Option>
            <Option value="06">6</Option>
            <Option value="07">7</Option>
            <Option value="08">8</Option>
            <Option value="09">9</Option>
            <Option value="10">10</Option>
            <Option value="11">11</Option>
            <Option value="12">12</Option>
          </Select>
        </Crd.Select>
        <Crd.Select>
          <Crd.InputName>YIL</Crd.InputName>
          <Select defaultValue="22" onChange={onYearChange}>
            <Option value="22">22</Option>
            <Option value="23">23</Option>
            <Option value="24">24</Option>
            <Option value="25">25</Option>
            <Option value="26">26</Option>
            <Option value="27">27</Option>
            <Option value="28">28</Option>
            <Option value="29">29</Option>
            <Option value="30">30</Option>
            <Option value="31">31</Option>
            <Option value="32">32</Option>
            <Option value="33">33</Option>
            <Option value="34">34</Option>
            <Option value="35">35</Option>
            <Option value="36">36</Option>
            <Option value="37">37</Option>
            <Option value="38">38</Option>
            <Option value="39">39</Option>
            <Option value="40">40</Option>
          </Select>
        </Crd.Select>
        <Crd.Cvv>
          <Crd.InputName>CVV</Crd.InputName>
          <Crd.CvvInput onChange={onCvvChange} maxLength={3} />
        </Crd.Cvv>
      </Crd.InfoRow>
      <Crd.Button onClick={handleButton}>KAYDET</Crd.Button>
    </Crd.Container>
  );
};

export default CreditCard;
