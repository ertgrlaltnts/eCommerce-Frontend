import React from "react";
import { Por } from "./styled-component/PastOrder.style";
import { useSelector } from "react-redux";
import { Package, Check, X } from "phosphor-react";

const PastOrder = ({ setActiveTab, setOrder }) => {
  const { user } = useSelector((state) => state.User);

  const examineHandle = (item) => {
    setOrder(item);
    setActiveTab(8);
  };

  return (
    <Por.Container>
      {user.pastOrder.map((item) => (
        <Por.Block>
          <Por.Left>
            <Package size={20} />
            <Por.Text>{item.date}</Por.Text>
          </Por.Left>
          <Por.Mid>
            {item.isDelivery === true ? (
              <Por.Wrapper>
                <Check style={{ color: "#48E81C", fontSize: 20 }} />
                <Por.Text>Teslim Edildi</Por.Text>
              </Por.Wrapper>
            ) : (
              <Por.Wrapper>
                <X style={{ color: "#E41212", fontSize: 20 }} />
                <Por.Text>Teslim Edilmedi</Por.Text>
              </Por.Wrapper>
            )}
          </Por.Mid>
          <Por.Rigth>
            <Por.Examine onClick={() => examineHandle(item)}>
              İncele
            </Por.Examine>
          </Por.Rigth>
        </Por.Block>
      ))}
    </Por.Container>
  );
};

export default PastOrder;
