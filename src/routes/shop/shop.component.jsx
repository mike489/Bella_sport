import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import SHOP_DATA from "../../shop-data";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview categories={SHOP_DATA} />} />
      <Route path=":category" element={<Category categories={SHOP_DATA} />} />
    </Routes>
  );
};

export default Shop;
