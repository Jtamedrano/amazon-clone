import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../../StateProvider";

const CheckoutProductStyle = styled.div`
  display: flex;
  margin-bottom: 1em;
  justify-content: flex-start;
  height: fit-content;

  .imageContainer {
    flex-basis: 20%;
    height: 180px;
    width: 180px;
    margin-right: 1em;
    align-self: stretch;
    display: flex;

    img {
      width: 180px;
      height: 180px;
      object-fit: contain;
    }
  }

  .checkoutRight {
    height: fit-content;
    .checkoutProductTitle {
      font-size: 17px;
      font-weight: 800;
      margin-bottom: 1em;
    }
    .checkoutProductRating {
      display: flex;

      div {
        margin-left: 0.3em;
      }
    }

    button {
      margin-top: 1em;
      background-color: #f0c14b;
      border: 1px solid;
      border-color: #a88734 #9c7e31 #846a29;
      border-radius: 3px;
      height: 30px;
      color: #111111;
    }
  }
`;

function CheckoutProduct({ id, title, price, image, rating }) {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // Remove Item from basket
    dispatch({
      type: "REMOVED_FROM_BASKET",
      payload: { id },
    });
  };

  return (
    <CheckoutProductStyle>
      <div className="imageContainer">
        <img src={image} alt="" />
      </div>
      <div className="checkoutRight">
        <p className="checkoutProductTitle">
          <strong>{title}</strong>
        </p>
        <p className="checkoutProductTitle">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProductRating">
          {Array(Math.round(rating))
            .fill()
            .map((_, i) => {
              return <div key={i}>⭐️</div>;
            })}
        </p>
        <button onClick={() => removeFromBasket()}>Remove From Basket</button>
      </div>
    </CheckoutProductStyle>
  );
}

export default CheckoutProduct;
