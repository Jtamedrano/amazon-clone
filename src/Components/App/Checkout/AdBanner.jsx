import React from "react";
import styled from "styled-components";

const CheckoutStyle = styled.div`
  box-sizing: border-box;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: linear-gradient(
    135deg,
    rgba(235, 248, 250, 1) 25%,
    rgba(255, 255, 255, 1) 75%
  );
  width: 100%;
  margin-bottom: 1em;

  .leftSideAd {
    display: flex;
    flex-flow: column;
    text-align: center;

    img {
      object-fit: contain;
    }
  }

  p {
    margin-left: 0.5em;
    margin-right: 0.25em;
  }

  .learnBtn {
    color: #111;
    height: 29px;
    background-color: #e7e9ec;
    border: 1px solid;
    border-color: #adb1b8 #a2a6ac #8d9096;
    border-radius: 3px;
    cursor: pointer;
    display: inline-block;
    padding: 0;
    text-align: center;
    text-decoration: none !important;
    vertical-align: middle;
  }

  .learnBtn-inner {
    background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  }

  .learnBtn-txt {
    background-color: transparent;
    border: 0;
    display: block;
    font-size: 13px;
    line-height: 29px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
  }
`;

function AdBanner() {
  return (
    <CheckoutStyle className="adBanner">
      <div className="leftSideAd">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CBCC/cardart/thumbnails/coreb_135x85._CB485917812_.png"
          alt="credit card"
        />
        <span>
          <strong>$60 Dollar Instant Gift Card</strong>
        </span>
      </div>
      <p>
        Jesse, <strong>get $60 off intstantly</strong> upon approval of the{" "}
        <strong>Amazon Rewards Visa Card</strong>
      </p>
      <span className="learnBtn">
        <span className="learnBtn-inner">
          <span className="learnBtn-txt">Learn more</span>
        </span>
      </span>
    </CheckoutStyle>
  );
}

export default AdBanner;
