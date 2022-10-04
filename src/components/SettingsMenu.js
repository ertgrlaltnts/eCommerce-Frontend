import React from "react";
import "antd/dist/antd.min.css";
import { Minus, Plus } from "phosphor-react";
import { Stm } from "./styled-component/SettingsMenu.style";
import "../index.css";
import { Collapse, Checkbox } from "antd";
const { Panel } = Collapse;

const SettingsMenu = ({
  id,
  onChange,
  categories,
  prices,
  onCategoryChange,
}) => {
  return (
    <Stm.Container>
      <Collapse
        bordered={false}
        defaultActiveKey={["1", "2"]}
        expandIcon={({ isActive }) => (isActive ? <Minus /> : <Plus />)}
        expandIconPosition={"end"}
        className="site-collapse-custom-collapse"
      >
        <Stm.FilterText>Filtrele</Stm.FilterText>
        <Panel header="KATEGORİ" key="1" className="site-collapse-custom-panel">
          <Stm.Ul>
            {categories.map((item, index) => (
              <Stm.Li>
                <Stm.Row>
                  <Stm.Box>
                    <Checkbox
                      key={index}
                      onChange={onCategoryChange}
                      value={item}
                    />
                  </Stm.Box>
                  <Stm.Name>{item}</Stm.Name>
                </Stm.Row>
              </Stm.Li>
            ))}
          </Stm.Ul>
        </Panel>
        <Panel header="FİYAT" key="2" className="site-collapse-custom-panel">
          <Stm.Ul>
            {prices.map((item, index) => (
              <Stm.Li>
                <Stm.Row>
                  <Stm.Box>
                    <Checkbox
                      key={index}
                      onChange={onChange}
                      checked={item.id === id}
                      value={item.id}
                    />
                  </Stm.Box>
                  <Stm.Name>{item.name}</Stm.Name>
                </Stm.Row>
              </Stm.Li>
            ))}
          </Stm.Ul>
        </Panel>
      </Collapse>
    </Stm.Container>
  );
};

export default SettingsMenu;
