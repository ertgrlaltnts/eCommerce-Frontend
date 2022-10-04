import React from "react";
import { Hm } from "./styled-components/Home.style";
import Carousel from "../components/Carousel";
import BestSeller from "../components/BestSeller";
import Online from "../components/Online";
import BackTopIcon from "../components/BackTopIcon";
import "antd/dist/antd.min.css";
import { Col, Row } from "antd";
import bestProduct from "../data/bestData.json";
import PageTransition from "../components/PageTransition";
import WrapView from "../components/WrapView";

const Home = ({ login }) => {
  return (
    <>
      <WrapView>
        <PageTransition>
          <div
            style={{
              paddingTop: 100,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Hm.Banner
                  url={
                    "https://mageblueskytech.com/utero/media/wysiwyg/banner42.jpg"
                  }
                >
                  <Hm.BannerContainer>
                    <Hm.BannerText size={"20px"}>
                      COATS AND <br /> JACKETS
                    </Hm.BannerText>
                    <Hm.BannerText size={"45px"}>
                      Luxury Outerwear
                    </Hm.BannerText>
                  </Hm.BannerContainer>
                </Hm.Banner>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Hm.Banner
                  url={
                    "https://mageblueskytech.com/utero/media/wysiwyg/banner43.jpg"
                  }
                >
                  <Hm.BannerContainer>
                    <Hm.BannerText>
                      ESSENTIAL <br /> ITEMS
                    </Hm.BannerText>
                    <Hm.BannerText>Ready for Winter</Hm.BannerText>
                  </Hm.BannerContainer>
                </Hm.Banner>
              </Col>
            </Row>
            <Carousel />
            {/* <BestSeller bestProduct={bestProduct} login={login} /> */}
            <Online />
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Hm.SmallBanner>
                  <Hm.SmallImg src="https://mageblueskytech.com/utero/media/wysiwyg/banner45.jpg" />
                  <Hm.SmallTexts>
                    <Hm.TopText>ACCESSORIES</Hm.TopText>
                    <Hm.BottomText>Tailor Gifts</Hm.BottomText>
                  </Hm.SmallTexts>
                </Hm.SmallBanner>
              </Col>
              <Col span={8}>
                <Hm.SmallBanner>
                  <Hm.SmallImg src="https://mageblueskytech.com/utero/media/wysiwyg/banner45.jpg" />
                  <Hm.SmallTexts>
                    <Hm.TopText>ACCESSORIES</Hm.TopText>
                    <Hm.BottomText>Tailor Gifts</Hm.BottomText>
                  </Hm.SmallTexts>
                </Hm.SmallBanner>
              </Col>
              <Col span={8}>
                <Hm.SmallBanner>
                  <Hm.SmallImg src="https://mageblueskytech.com/utero/media/wysiwyg/banner45.jpg" />
                  <Hm.SmallTexts>
                    <Hm.TopText>ACCESSORIES</Hm.TopText>
                    <Hm.BottomText>Tailor Gifts</Hm.BottomText>
                  </Hm.SmallTexts>
                </Hm.SmallBanner>
              </Col>
            </Row>
            <Hm.TextView>
              <Hm.BigText>
                I bought very much clothings, bag, shoes, etc at @uterostore,
                <br /> It’s really a store with quality products & alway catch
                the new trend fashion
                <br /> Much more things that i’m expect. Really awesome &
                satisfied!
              </Hm.BigText>
              <Hm.SmallText>@JOTA.LFC / POSTED ON 15 JULY, 2022</Hm.SmallText>
            </Hm.TextView>
            <BackTopIcon />
          </div>
        </PageTransition>
      </WrapView>
    </>
  );
};

export default Home;
