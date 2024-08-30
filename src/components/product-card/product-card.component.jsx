import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  // const addProductToCart = () => addItemToCart(product);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addItemToCart(product); // Add product to cart
    navigate("/contact"); // Navigate to contact page
  };

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleBuyNow}>
        Buy Now
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
