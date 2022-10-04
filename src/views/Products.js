import React, { useState } from "react";
import { Row, Col, Input, notification } from "antd";
import { MagnifyingGlass, X } from "phosphor-react";
import SettingsMenu from "../components/SettingsMenu";
import BackTopIcon from "../components/BackTopIcon";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../store/reducers/User";
import { Prs } from "./styled-components/Products.style";
import { ReactComponent as Three } from "../assets/svg/three.svg";
import { ReactComponent as Two } from "../assets/svg/two.svg";
import { ReactComponent as Four } from "../assets/svg/four.svg";
import BestItem from "../components/BestItem";
import PageTransition from "../components/PageTransition";
import WrapView from "../components/WrapView";

const Products = ({ login, products }) => {
  const [grid, setGrid] = useState(8);
  const [id, setId] = useState();
  const [search, setSearch] = useState("");
  const [checkedCategory, setCheckedCategory] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.User);
  const dispatch = useDispatch((state) => state.User);
  let itemList = products;

  console.log(products);

  const addNotification = (placement, data) => {
    notification.success({
      message: "Sepete Eklendi",
      placement: placement,
      description: data.title,
      duration: 1,
    });
  };

  const addNotificationWarn = (placement) => {
    notification.warn({
      message: `Öncelikle giriş yapmalısınız !`,
      placement: placement,
      duration: 3,
    });
  };

  const addProductInBasket = (data) => {
    if (isLoggedIn) {
      dispatch(addBasket({ ...data, quantity: 1 }));
      addNotification("topRight", data);
    } else {
      addNotificationWarn("topRight");
      login();
    }
  };

  const categories = ["Kot", "Pantolon", "Aksesuar"];
  const prices = [
    { id: 1, name: "Azdan Çoka" },
    { id: 2, name: "Çoktan Aza" },
  ];

  const onChange = (checkedValues) => {
    setId(checkedValues.target.value);
  };

  const onCategoryChange = (checkedValues) => {
    let updateList = [...checkedCategory];
    if (checkedValues.target.checked) {
      updateList = [...checkedCategory, checkedValues.target.value];
    } else {
      updateList.splice(checkedCategory.indexOf(checkedValues.target.value), 1);
    }
    setCheckedCategory(updateList);
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onGridClick = (grid) => {
    setGrid(grid);
  };

  const priceFilter = () => {
    if (id === 1) {
      itemList.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (id === 2) {
      itemList.sort(function (a, b) {
        return b.price - a.price;
      });
    } else {
      return itemList;
    }
  };

  const setItemListForCategory = () => {
    let temp = itemList.filter(({ category }) =>
      checkedCategory.includes(category)
    );

    if (temp.length) {
      itemList = temp;
    }
  };

  const handleSearchFilter = () => {
    let temp = itemList.filter(
      ({ title }) => title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    itemList = temp;
  };

  handleSearchFilter();
  setItemListForCategory();
  priceFilter();
  return (
    <>
      <WrapView>
        <PageTransition>
          <div
            style={{
              paddingTop: 150,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <SettingsMenu
                  id={id}
                  onCategoryChange={onCategoryChange}
                  onChange={onChange}
                  categories={categories}
                  prices={prices}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                <Row>
                  <Col span={24}>
                    <Prs.TopSetting>
                      <Prs.Input>
                        <Input
                          placeholder="Ürün ara ..."
                          bordered={false}
                          size="default-size"
                          prefix={<MagnifyingGlass />}
                          onChange={onSearchChange}
                          value={search}
                        />
                        <Prs.Subscribe>
                          <X onClick={() => setSearch("")} />
                        </Prs.Subscribe>
                      </Prs.Input>
                      <Prs.Grid>
                        <Prs.Dots onClick={() => onGridClick(6)}>
                          <Four
                            width={24}
                            height={24}
                            fill={grid === 6 ? "#d9d9d9" : "#000"}
                          />
                        </Prs.Dots>
                        <Prs.Dots
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                          onClick={() => onGridClick(8)}
                        >
                          <Three
                            width={24}
                            height={24}
                            fill={grid === 8 ? "#d9d9d9" : "#000"}
                          />
                        </Prs.Dots>
                        <Prs.Dots onClick={() => onGridClick(12)}>
                          <Two
                            width={24}
                            height={24}
                            fill={grid === 12 ? "#d9d9d9" : "#000"}
                          />
                        </Prs.Dots>
                      </Prs.Grid>
                    </Prs.TopSetting>
                  </Col>
                  {itemList.map((item) => (
                    <Col span={grid}>
                      <BestItem
                        image={item.images[0]}
                        price={item.price}
                        rate={item.rate}
                        title={item.title}
                        slug={item.slug}
                        isRoute={true}
                        addItem={() => addProductInBasket(item)}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
            <div style={{ height: 200 }}></div>
            <BackTopIcon />
          </div>
        </PageTransition>
      </WrapView>
    </>
  );
};

export default Products;
