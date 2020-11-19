import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../StateProvider";
import AdBanner from "./Checkout/AdBanner";
import CheckoutProduct from "./Checkout/CheckoutProduct";
import Subtotal from "./Checkout/Subtotal";

const CheckoutStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1%;

  .left,
  .right {
    margin: 1em;
  }

  .left {
    .checkoutTitle {
      margin-bottom: 10px;
      padding: 10px;
      border-bottom: 1px solid lightgrey;
    }
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
              <h2 className="checkoutTitle">Your Amazon Cart is empty</h2>
              <p>
                Your Shopping Cart lives to serve. Give it purpose — fill it
                with groceries, clothing, household supplies, electronics, and
                more. Continue shopping on the Amazon.com homepage, learn about
                today's deals, or visit your Wish List.
              </p>
            </>
          ) : (
            <>
              <h2 className="checkoutTitle">Your shopping basket</h2>
              {/* list products */}
              {basket.map((e) => {
                console.log(e);
                return (
                  <>
                    <CheckoutProduct
                      key={e.id}
                      title={e.title}
                      price={e.price}
                      image={e.image}
                      rating={e.rating}
                    />
                  </>
                );
              })}
            </>
          )}
        </div>
        <div className="right">
          <Subtotal basket={basket} />
        </div>
      </CheckoutStyle>
    </>
  );
}
