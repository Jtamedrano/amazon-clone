import React from "react";
import CurrencyFormatter from "react-currency-format";
import styled from "styled-components";
import { getBasketTotal } from "../../../reducer";

const SubtotalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  small {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.25em;
    }
  }

  button {
    background-color: #f0c14b;
    border: 1px solid;
    border-color: #a88734 #9c7e31 #846a29;
    border-radius: 3px;
    width: 100%;
    height: 30px;
    color: #111111;
  }
`;

function Subtotal({ basket }) {
  return (
    <SubtotalStyle>
      <CurrencyFormatter
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal({basket.length} items): <strong>{` ${value}`}</strong>
              </p>
              <small>
                <input type="checkbox" name="" id="" />
                <span>This order contains a gift</span>
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </SubtotalStyle>
  );
}

export default Subtotal;
