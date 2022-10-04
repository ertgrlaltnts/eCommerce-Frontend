import React from "react";
import { BackTop } from "antd";
import { ArrowUp } from "phosphor-react";
import { Bti } from "./styled-component/BackTopIcon.style";

const BackTopIcon = () => {
  return (
    <BackTop>
      <Bti.BackTop>
        <ArrowUp />
      </Bti.BackTop>
    </BackTop>
  );
};

export default BackTopIcon;
