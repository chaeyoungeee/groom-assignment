import React, { useEffect, useState } from "react";
import { addToCart } from "../actions/cartActions";
import axios from "../api/axios";
import { Grid } from '@material-ui/core';
import styled from "styled-components";
import requests from "../api/requests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = ({ product, handleAddToCart, handleProductClick }) => (
    <Products item key={product.id} xs={3}>
        <ProductImage onClick={() => handleProductClick(product.id)}>
            <img src={product.image} alt={product.title} />
        </ProductImage>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDetails>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductButton onClick={() => handleAddToCart(product)}>장바구니에 담기</ProductButton>
        </ProductDetails>
    </Products>
)

const Row = () => {

    const category = useSelector(state => state.category);
    const [products, setProducts] = useState([]);
    const loggedIn = useSelector(state => state.user.loggedIn);
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const request = requests[category] || requests.fetchAllProducts;
            const response = await axios.get(request);
            setProducts(response.data);
        };

        fetchProducts();
    }, [category]);

    const handleAddToCart = (clickedItem) => {
        if (!loggedIn) {
            alert('장바구니에 물건을 담으려면 로그인을 해야 합니다.');
            navigate("/auth/login");
            return;
        }
        dispatch(addToCart(clickedItem));
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    const handleProductClick = (id) => {
        navigate(`/detail/${id}`);
    }

    return (
        <Wrapper>
            <div className="grid-container">
                <div>{products.length} items</div>
                <Grid container spacing={5}>
                    {products.map((product) => (
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} handleProductClick={handleProductClick} />
                    ))}
                </Grid>
            </div>
        </Wrapper>
    );
}

export default Row;

const Products = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 200px;
  overflow: hidden
  margin: auto;

  img {
    width: 80%;
    height: 100%;
    object-fit: contain;
  }
`;

const ProductTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductPrice = styled.h3`
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ProductButton = styled.button`
  width: 100%;
  height: 40px;
  background: none;
  font-weight: 700;
  border: none;
  border-bottom: 2px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;

  div {
    margin-top: 10px;
  }
`;
