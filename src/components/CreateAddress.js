import React, { useState } from "react";
import { Cad } from "./styled-component/CreateAddress.style";
import { Select } from "antd";

const CreateAddress = () => {
  const { Option } = Select;
  const [where, setWhere] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [buildNo, setBuildNo] = useState("");
  const [departmentNo, setDepartmentNo] = useState("");

  const addressObj = {
    where,
    name,
    city,
    district,
    address,
    buildNo,
    departmentNo,
  };

  const onWhereChange = (e) => {
    setWhere(e);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onCityChange = (e) => {
    setCity(e.target.value);
  };

  const onDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const onBuildChange = (e) => {
    setBuildNo(e.target.value);
  };

  const onDepartmentChange = (e) => {
    setDepartmentNo(e.target.value);
  };

  return (
    <Cad.Container>
      <Cad.InputBox>
        <Cad.InfoRow>
          <Cad.Wrapper>
            <Cad.InputName>İL</Cad.InputName>
            <Cad.SmallInput onChange={onCityChange} />
          </Cad.Wrapper>
          <Cad.Wrapper>
            <Cad.InputName>İLÇE</Cad.InputName>
            <Cad.SmallInput onChange={onDistrictChange} />
          </Cad.Wrapper>
        </Cad.InfoRow>
      </Cad.InputBox>
      <Cad.InputBox>
        <Cad.InputName>ADRES</Cad.InputName>
        <Cad.Input onChange={onAddressChange} />
      </Cad.InputBox>
      <Cad.InputBox>
        <Cad.InfoRow>
          <Cad.Wrapper>
            <Cad.InputName>BİNA NO</Cad.InputName>
            <Cad.SmallInput onChange={onBuildChange} />
          </Cad.Wrapper>
          <Cad.Wrapper>
            <Cad.InputName>DAİRE NO</Cad.InputName>
            <Cad.SmallInput onChange={onDepartmentChange} />
          </Cad.Wrapper>
          <Cad.Wrapper>
            <Cad.InputName>ADRES İSMİ</Cad.InputName>
            <Cad.SmallInput onChange={onNameChange} />
          </Cad.Wrapper>
          <Cad.Select>
            <Cad.InputName>KAYIT YERİ</Cad.InputName>
            <Select defaultValue="" onChange={onWhereChange}>
              <Option value="home">Ev</Option>
              <Option value="business">İş Yeri</Option>
              <Option value="other">Diğer</Option>
            </Select>
          </Cad.Select>
        </Cad.InfoRow>
      </Cad.InputBox>

      <Cad.Button onClick={() => console.log(addressObj)}>KAYDET</Cad.Button>
    </Cad.Container>
  );
};

export default CreateAddress;
