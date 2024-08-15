// import { createContext, useEffect, useState } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
// import { get } from "firebase/database";

// export const ProductsContext = createContext({
//     products: [],
// });

// export const ProductsProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         getCategoriesAndDocuments().then((categories) => {
//             setProducts(categories);
//         });
//     }, []);
//     const value = {products}
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };
