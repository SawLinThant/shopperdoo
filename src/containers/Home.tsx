import { Box } from "@mui/material";
import Appbar from "../components/common/Appbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Cart from "./Cart";
import Account from "./Account";

const Home = () => {
  return (
    <Box>
      <Appbar />
      <Routes>
        <Route path="product/*" element={<Product />} />
        <Route path="cart/*" element={<Cart />} />
        <Route path="account/*" element={<Account />} />
        <Route path="*" element={<Navigate to={"product"} replace />} />
      </Routes>
    </Box>
  );
};

export default Home;
