import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { productList } from "../../constant/products";

const DiscoverCampaign = () => {
  const discoverCampaignProductList = productList.slice(4, 6);
  return (
    <Paper variant="outlined" sx={{ padding: 2, pt: 0 }}>
      <Stack direction={"column"} alignItems={"center"} gap={2}>
        <Box
          sx={{
            borderBottom: "3px solid",
            borderColor: "primary.main",
            pt: 2,
            pb: 1,
            width: "100%",
            position: "sticky",
            zIndex: "100",
            top: {
              xs: "56px",
              md: "64px",
            },
            bgcolor: "white",
          }}
        >
          <Typography
            color="primary.main"
            fontWeight={"bold"}
            textAlign={"center"}
            variant="h5"
          >
            DISCOVER MORE CAMPAIGNS
          </Typography>
        </Box>
        <Grid2 container spacing={2} sx={{ width: "100%" }}>
          {discoverCampaignProductList.map((product, index) => {
            return (
              <Grid2
                size={{
                  md: 3,
                  xs: 6,
                }}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
                key={index + product.id}
              >
                <ProductCard
                  campaign={{
                    campaign: "16112024-000" + (5 + index),
                    joinedNumber: 800 + index * 10,
                  }}
                  detail={product}
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Stack>
    </Paper>
  );
};

export default DiscoverCampaign;
