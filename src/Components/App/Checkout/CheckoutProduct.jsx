import React from "react";
import styled from "styled-components";

const CheckoutProductStyle = styled.div`
  display: flex;
`;

function CheckoutProduct({ title, price, image, rating }) {
  return (
    <CheckoutProductStyle>
      <img src={image} alt="" />
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
