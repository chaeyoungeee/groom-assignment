import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const CartItem = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <h3>Price: ${item.price}</h3>
      </div>
      <div className="buttons">
        <Button size="small" disableElevation variant="contained" onClick={() => removeFromCart(item.id)}>-</Button>
        <p>{item.quantity}</p>
        <Button size="small" disableElevation variant="contained" onClick={() => addToCart(item)}>+</Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding-bottom: 20px;

  div {
    flex: 1;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 120px;
    object-fit: cover;
    margin-left: 40px;
  }
`;
