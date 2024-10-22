import { Box, Container } from "@mui/material";
import {
  Banner,
  DiscoverCampaign,
  HotCampaign,
} from "../../components/product";

const ProductList = () => {
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
