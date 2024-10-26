import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";
import ProductCard from "./ProductCard";

const DiscoverCampaign = () => {
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
          >
            <ProductCard campaign="16112024-0001" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0002" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0003" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0004" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0005" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0006" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0007" />
          </Grid2>
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
          >
            <ProductCard campaign="16112024-0008" />
          </Grid2>
        </Grid2>
      </Stack>
    </Paper>
  );
};

export default DiscoverCampaign;
