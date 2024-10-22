import { Box, Checkbox, Grid2, Typography } from "@mui/material";
import { Quantity } from "../product";
import { EllipsisTypography } from "../common/EllipsisTypography";

const CartItemCard = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2
        size={{
          xs: 12,
          md: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Checkbox sx={{ p: 0 }} />
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Box
              component="img"
              sx={{ width: 70, height: 70, objectFit: "cover" }}
              src="https://down-sg.img.susercontent.com/file/4a1162fa73d9dd8a9ac30a8d564348d3@resize_w160_nl.webp"
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <EllipsisTypography variant="body2" fontWeight="bold">
                Unisex Alpha Running sport Shoes Breathable Men's and Women's
                sneakers Kasut Lelaki acweaefaaace
              </EllipsisTypography>
              {/* <Typography variant="caption" color="text.secondary">
                Brand: Alpha
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </Grid2>
      <Grid2
        sx={{
          display: {
            xs: "none",
            md: "grid",
          },
        }}
        size={{
          xs: 4,
          md: 1.75,
        }}
      >
        <Typography variant="body2" sx={{ mt: "3px" }} textAlign={"center"}>
          $21.69
        </Typography>
      </Grid2>
      <Grid2
        size={{
          xs: 4,
          md: 1.75,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Quantity />
        </Box>
      </Grid2>
      <Grid2
        size={{
          xs: 4,
          md: 1.75,
        }}
      >
        <Typography
          variant="body2"
          color="primary.main"
          sx={{ mt: "3px" }}
          textAlign={"center"}
        >
          $21.69
        </Typography>
      </Grid2>
      <Grid2
        size={{
          xs: 4,
          md: 1.75,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mt: "3px",
            "&:hover": {
              cursor: "pointer",
              color: "error.main",
            },
          }}
          textAlign={"center"}
        >
          Delete
        </Typography>
      </Grid2>
    </Grid2>
  );
};

export default CartItemCard;
