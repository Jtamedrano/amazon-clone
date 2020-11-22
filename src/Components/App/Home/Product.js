import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../../StateProvider";

const ProductStyle = styled.div`
  display: flex;
  justify-content: space-between;
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
    .productTitle {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* after 3 line show ... */
      -webkit-box-orient: vertical;
    }

    .productPrice {
      margin-top: 5px;
    }
    .productRating {
      display: flex;
      margin-bottom: 1px;
    }
    .productRating > div {
      margin-right: 8px;
    }
  }

  .productImage {
    max-height: 150px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .productImage > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
  }

  @media (max-width: 550px) {
    button {
      width: 90%;
      padding: 1em;
      font-size: 1.25rem;
    }
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
    <ProductStyle className="product">
      <div className="productInfo">
        <p className="productTitle">{title}</p>
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
