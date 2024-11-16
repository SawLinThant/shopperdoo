import { Box, Container } from "@mui/material";
import {
  Banner,
  DiscoverCampaign,
  HotCampaign,
} from "../../components/product";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  useEffect(() => {
    // Scroll to the top when the component is loaded
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Banner />
        <HotCampaign />
        <DiscoverCampaign />
      </Box>
    </Container>
  );
};

export default ProductList;
