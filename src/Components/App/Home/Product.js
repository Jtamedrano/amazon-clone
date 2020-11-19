import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../../StateProvider";

const ProductStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column;
  max-height: 400px;
  min-height: 100px;
  background-color: #ffffff;
  margin: 10px;
  padding: 20px;
  width: 100%;
  z-index: 1;

  .productInfo {
    height: 100px;
    margin-bottom: 15px;
  }

  .productPrice {
    margin-top: 5px;
  }

  .productRating {
    display: flex;
  }
  .productRating > div {
    margin-right: 8px;
  }

  .productImage > img {
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
  }
`;

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <ProductStyle>
      <div className="productInfo">
        <p>{title}</p>
        <p className="productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="productRating">
          {Array(Math.round(rating))
            .fill()
            .map((_, i) => {
              return <div key={i}>⭐️</div>;
            })}
        </div>
      </div>
      <div className="productImage">
        <img src={image} alt="product" />
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </ProductStyle>
  );
}

export default Product;
