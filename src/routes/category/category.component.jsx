import React, {  useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";
import { CategoryContainer, Title } from "./category.styles";

const Category = ({ categories }) => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const selectedCategory = categories.find(
      (cat) => cat.title.toLowerCase() === category.toLowerCase()
    );
    if (selectedCategory) {
      setProducts(selectedCategory.items);
    }
  }, [category, categories]);

  return (
    <React.Fragment>
      {products.length === 0 ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Title>{category.toUpperCase()}</Title>
          <CategoryContainer>
            {products.map(
              (product) => (
                <ProductCard key={product.id} product={product} />
              ),
              [category, products]
            )}
          </CategoryContainer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Category;
