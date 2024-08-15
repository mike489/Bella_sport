import React from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = ({ categories }) => {
  return (
    <React.Fragment>
      {categories.map((category) => (
        <CategoryPreview
          key={category.title}
          title={category.title}
          products={category.items}
        />
      ))}
    </React.Fragment>
  );
};

export default CategoriesPreview;
