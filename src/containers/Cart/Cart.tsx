import { Navigate, Route, Routes } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = () => {
  return (
    <Routes>
      <Route path="items" element={<CartItems />} />
      <Route path="*" element={<Navigate to={"items"} replace />} />
    </Routes>
  );
};

export default Cart;
