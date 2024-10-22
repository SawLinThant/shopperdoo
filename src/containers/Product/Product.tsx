import { Navigate, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

const Product = () => {
  return (
    <Routes>
      <Route path="list" element={<ProductList />} />
      <Route path=":id" element={<ProductDetails />} />
      <Route path="*" element={<Navigate to={"list"} replace />} />
    </Routes>
  );
};

export default Product;
