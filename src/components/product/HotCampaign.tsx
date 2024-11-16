import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { productList } from "../../constant/products";

const HotCampaign = () => {
  const hotCampaignProductList = productList.slice(0, 4);
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
            zIndex: "100",
            position: "sticky",
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
            HOT CAMPAIGNS
          </Typography>
        </Box>
        <Grid2 container spacing={2} sx={{ width: "100%" }}>
          {hotCampaignProductList.map((product, index) => {
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
                    campaign: "16112024-000" + (index + 1),
                    joinedNumber: 900 + index * 10,
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

export default HotCampaign;
