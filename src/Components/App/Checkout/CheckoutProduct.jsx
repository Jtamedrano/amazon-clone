import React from "react";
import styled from "styled-components";

const CheckoutProductStyle = styled.div`
  display: flex;

  .imageContainer {
    flex-basis: 20%;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

function CheckoutProduct({ title, price, image, rating }) {
  return (
    <CheckoutProductStyle>
      <div className="imageContainer">
        <img src={image} alt="" />
      </div>
      <div>
        <p className="checkoutProductTitle">{title}</p>
        <p className="checkoutProductTitle">${price}</p>
        <p className="checkoutProductRating">
          {Array(Math.round(rating))
            .fill()
            .map((_, i) => {
              return <div key={i}>⭐️</div>;
            })}
        </p>
      </div>
    </CheckoutProductStyle>
  );
}

export default CheckoutProduct;
