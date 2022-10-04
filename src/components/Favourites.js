import React from "react";
import { Fvr } from "./styled-component/Favourites.style";
import { Link } from "react-router-dom";
import { X } from "phosphor-react";
import { useSelector } from "react-redux";

const Favourites = () => {
  const { user } = useSelector((state) => state.User);

  return (
    <Fvr.Container>
      {user.favourites.map((item) => (
        <Fvr.Block>
          <Link to={`/products/${item.slug}`} style={{ color: "#000" }}>
            <Fvr.ImageContainer>
              <Fvr.Image src={item.images[0]} />
            </Fvr.ImageContainer>
          </Link>
          <Fvr.Mid>
            <Fvr.Item>{item.title}</Fvr.Item>
            <Link to={`/products/${item.slug}`} style={{ color: "#000" }}>
              <Fvr.See>İncele</Fvr.See>
            </Link>
          </Fvr.Mid>

          <Fvr.Delete>
            <Fvr.DeleteIcon>
              <X />
            </Fvr.DeleteIcon>
            <Fvr.DeleteText>Favorilerden Kaldır</Fvr.DeleteText>
          </Fvr.Delete>
        </Fvr.Block>
      ))}
    </Fvr.Container>
  );
};

export default Favourites;
