import React, { useState } from "react";
import PageTransition from "../PageTransition";
import { Input } from "antd";
import { Eus } from "./styled-component/EditUser.style";
import { MagnifyingGlass, X, Binoculars } from "phosphor-react";

const EditUsers = ({ setTab, setUser, users }) => {
  const [search, setSearch] = useState("");
  let list = users;

  const onSearchChange = async (e) => {
    setSearch(e.target.value);
  };

  const handleSearchFilter = () => {
    let temp = list.filter(
      ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
    list = temp;
  };

  const handleClick = (item) => {
    setTab(5);
    setUser(item);
  };

  handleSearchFilter();

  return (
    <>
      <PageTransition>
        <Eus.Input>
          <Input
            placeholder="İsime göre ara"
            bordered={false}
            size="default-size"
            prefix={<MagnifyingGlass />}
            onChange={onSearchChange}
            value={search}
          />
          <Eus.Subscribe>
            <X onClick={() => setSearch("")} />
          </Eus.Subscribe>
        </Eus.Input>
        {list.length === 0 ? (
          <Eus.Empty>
            <Binoculars size={100} />
            <Eus.EmptyText>Kullanıcı bulunamadı ...</Eus.EmptyText>
          </Eus.Empty>
        ) : (
          list.map((item) => (
            <Eus.Container>
              <Eus.Text>ID : 1213343243321</Eus.Text>
              <Eus.Text>
                {item.name} {item.surName}
              </Eus.Text>
              <Eus.Button onClick={() => handleClick(item)}>İncele</Eus.Button>
            </Eus.Container>
          ))
        )}
      </PageTransition>
    </>
  );
};

export default EditUsers;
