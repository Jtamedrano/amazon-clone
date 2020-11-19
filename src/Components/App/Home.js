import React from "react";
import styled from "styled-components";
import Product from "./Home/Product";

const HomeStyle = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  .homeImage {
    width: 100%;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    z-index: -100;
    margin-bottom: -200px;
  }

  .homeRow {
    display: flex;
    z-index: 1;
    margin: auto 5px;
  }
`;

function Home() {
  return (
    <HomeStyle>
      <img
        className="homeImage"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-ZDIxMDFkOTAt-w1500._CB418095224_.jpg"
        alt="jumbotron"
      />

      <div className="homeRow">
        <Product
          id="0"
          title="Brita Stainless Steel Water Bottle with Filter, 20 Ounce Premium Double Insulated Water Bottle, BPA Free, Carbon and assorted colors
"
          price={24.97}
          rating={4.6}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/319bEqHGtiL._AC_.jpg"
          }
        />
        <Product
          id="1"
          title="ILIFE V3s Pro Robot Vacuum Cleaner, Tangle-free Suction , Slim, Automatic Self-Charging Robotic Vacuum Cleaner, Daily Schedule Cleaning, Ideal For Pet Hair，Hard Floor and Low Pile Carpet"
          price={109.99}
          rating={4.3}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51ohDLYtzDL._AC_SL1000_.jpg"
          }
        />
      </div>
      <div className="homeRow">
        <Product
          id="2"
          title="Introducing Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release"
          price={17.99}
          rating={4.7}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_SL1000_.jpg"
          }
        />
        <Product
          id="3"
          title="Kasa Smart Plug Mini, Smart Home Wifi Outlet Works with Alexa & Google Home, WiFi Simple Setup, No Hub Required – A Certified for Humans Device (HS105)
"
          price={17.97}
          rating={4.6}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71eY0mJ81uL._AC_SL1500_.jpg"
          }
        />
        <Product
          id="4"
          title="Bigox Face Mask Disposable Earloop Blue 50Pcs
"
          price={9.99}
          rating={4.5}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/61AkOuNdb6L._SL1001_.jpg"
          }
        />
      </div>
      <div className="homeRow">
        <Product
          id="5"
          title="Bigox Face Mask Disposable Earloop Blue 50PcsSAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50TU8000FXZA, 2020 Model)
"
          price={397.99}
          rating={4.6}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
          }
        />
      </div>
    </HomeStyle>
  );
}

export default Home;
