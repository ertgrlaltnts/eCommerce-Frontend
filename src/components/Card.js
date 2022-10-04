import React from "react";
import { Crd1 } from "./styled-component/Card.style";
import Chip from "../assets/chip.png";
import Logo from "../assets/logo-2.png";

const Card = ({ val, name, month, year, cvv }) => {
  console.log(val);
  return (
    <Crd1.Container>
      <Crd1.Top>
        <Crd1.ChipItem src={Chip} />
        <Crd1.LogoItem src={Logo} />
      </Crd1.Top>
      <Crd1.Mid>
        <Crd1.Number>{val}</Crd1.Number>
        <Crd1.Number>{name.toUpperCase()}</Crd1.Number>
      </Crd1.Mid>
      <Crd1.Bot>
        <Crd1.Number>
          {month} / {year}
        </Crd1.Number>
        <Crd1.Number>{cvv}</Crd1.Number>
      </Crd1.Bot>
    </Crd1.Container>
  );
};

export default Card;
