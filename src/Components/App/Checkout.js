import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../StateProvider";
import AdBanner from "./Checkout/AdBanner";

const CheckoutStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1%;

  .left,
  .right {
    margin: 1em;
  }

  .left {
  }

  .right {
    flex-basis: 50%;
  }
`;

export default function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <CheckoutStyle>
        <div className="left">
          <AdBanner />
          {basket?.length === 0 ? (
            <>
              <h2>Your Amazon Cart is empty.</h2>
              <p>
                Your Shopping Cart lives to serve. Give it purpose — fill it
                with groceries, clothing, household supplies, electronics, and
                more. Continue shopping on the Amazon.com homepage, learn about
                today's deals, or visit your Wish List.
              </p>
            </>
          ) : (
            <>
              <h2>Your shopping basket</h2>
              {/* list products */}
              {basket.map((e) => {
                console.log(e);
                return (
                  <>
                    <CheckoutProduct
                      title={e.title}
                      price={e.price}
                      image={e.image}
                    />
                  </>
                );
              })}
            </>
          )}
        </div>
        <div className="right">
          <h2>Subtotal: 0.00</h2>
        </div>
      </CheckoutStyle>
    </>
  );
}

function CheckoutProduct({ title, price, image }) {
  return (
    <>
      <p className="checkoutProductTitle">{title}</p>
      <p className="checkoutProductTitle">{price}</p>
      <img src={image} alt="" />
    </>
  );
}
