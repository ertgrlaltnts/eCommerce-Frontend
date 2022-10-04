import React, { useState, useEffect } from "react";
import { Uif } from "./styled-component/UserInfo.style";
import { useSelector } from "react-redux";
import PasswordChange from "./PasswordChange";

const UserInfo = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passChange, setPassChange] = useState(false);

  const { user } = useSelector((state) => state.User);
  console.log(password);

  useEffect(() => {
    setName(user.name);
    setSurName(user.surName);
    setEmail(user.email);
    setPassword(user.password);
  }, [user.email, user.name, user.surName, user.password]);

  return (
    <Uif.Container>
      <Uif.InputBox>
        <Uif.InfoRow>
          <Uif.Wrapper>
            <Uif.InputName>AD</Uif.InputName>
            <Uif.SmallInput value={name} />
          </Uif.Wrapper>
          <Uif.Wrapper>
            <Uif.InputName>SOYAD</Uif.InputName>
            <Uif.SmallInput value={surName} />
          </Uif.Wrapper>
        </Uif.InfoRow>
      </Uif.InputBox>
      <Uif.InputBox>
        <Uif.InputName>EMAİL</Uif.InputName>
        <Uif.Input value={email} disabled />
      </Uif.InputBox>
      <Uif.InputBox>
        <Uif.InputName>ŞİFRE</Uif.InputName>
        <Uif.Input value={"*************"} disabled />
      </Uif.InputBox>
      <Uif.Change onClick={() => setPassChange(true)}>
        Şifreyi Değiştir
      </Uif.Change>
      <Uif.Button>KAYDET</Uif.Button>
      <PasswordChange isVisible={passChange} isSetVisible={setPassChange} />
    </Uif.Container>
  );
};

export default UserInfo;
