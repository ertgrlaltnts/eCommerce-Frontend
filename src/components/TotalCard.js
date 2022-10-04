import React from "react";
import { Ttc } from "./styled-component/TotalCard.style";
import { Plus } from "phosphor-react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import Chip from "../assets/chip.png";
import Logo from "../assets/logo-2.png";

const TotalCard = ({ setActiveTab }) => {
  const { user } = useSelector((state) => state.User);

  return (
    <Ttc.Container>
      <Row gutter={[8, 8]}>
        {user.cards.map((item) => (
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Ttc.Block>
              <Ttc.Card>
                <Ttc.Top>
                  <Ttc.ItemChip style={{ marginTop: 5 }} src={Chip} />
                  <Ttc.Item style={{ marginRight: 10 }} src={Logo} />
                </Ttc.Top>
                <Ttc.Mid>
                  <Ttc.Number>{item.number}</Ttc.Number>
                  <Ttc.Number>{item.name}</Ttc.Number>
                </Ttc.Mid>
                <Ttc.Bot>
                  <Ttc.Number>
                    {item.month} / {item.year}
                  </Ttc.Number>
                  <Ttc.Number>{item.ccv}</Ttc.Number>
                </Ttc.Bot>
              </Ttc.Card>
              <Ttc.Title>{item.cardName}</Ttc.Title>
            </Ttc.Block>
          </Col>
        ))}

        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Ttc.Block onClick={() => setActiveTab(6)}>
            <Ttc.Create>
              <Plus />
            </Ttc.Create>
            <Ttc.Title>OLUŞTUR</Ttc.Title>
          </Ttc.Block>
        </Col>
      </Row>
    </Ttc.Container>
  );
};

export default TotalCard;
