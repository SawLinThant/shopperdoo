import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { CartItemCard } from "../../components/cart";

const CartItems = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Stack direction={"column"} gap={2}>
        <Paper
          variant="outlined"
          sx={{
            py: 2,
            px: {
              xs: 2,
              md: 5,
            },
          }}
        >
          <Grid2 container spacing={2}>
            <Grid2 size={5}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Checkbox sx={{ p: 0 }} />
                <Typography variant="body2">Product</Typography>
              </Box>
            </Grid2>
            <Grid2
              size={1.75}
              sx={{
                display: {
                  xs: "none",
                  md: "grid",
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "3px" }}
                textAlign={"center"}
              >
                Unit Price
              </Typography>
            </Grid2>
            <Grid2
              size={1.75}
              sx={{
                display: {
                  xs: "none",
                  md: "grid",
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "3px" }}
                textAlign={"center"}
              >
                Quantity
              </Typography>
            </Grid2>
            <Grid2
              size={1.75}
              sx={{
                display: {
                  xs: "none",
                  md: "grid",
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "3px" }}
                textAlign={"center"}
              >
                Total Price
              </Typography>
            </Grid2>
            <Grid2
              size={1.75}
              sx={{
                display: {
                  xs: "none",
                  md: "grid",
                },
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: "3px" }}
                textAlign={"center"}
              >
                Actions
              </Typography>
            </Grid2>
          </Grid2>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            py: 2,
            px: {
              xs: 2,
              md: 5,
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Grid2 container spacing={2}>
              <Grid2 size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ p: 0 }} />

                  <Typography variant="body2" fontWeight="bold">
                    Shopperdoo
                  </Typography>
                </Box>
              </Grid2>
            </Grid2>
            <Divider />
            <CartItemCard />
            <Divider />
            <CartItemCard />
          </Box>
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            py: 2,
            px: {
              xs: 2,
              md: 5,
            },
            position: "sticky",
            bottom: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                flexDirection: "row",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Checkbox sx={{ p: 0 }} />
              <Typography
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                Select All
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    color: "error.main",
                  },
                }}
              >
                Delete
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                justifyContent: {
                  xs: "space-between",
                  md: "",
                },
                width: {
                  xs: "100%",
                  md: "auto",
                },
              }}
            >
              <Typography>
                Total (0 item):{" "}
                <Typography
                  component={"span"}
                  color="primary.main"
                  fontWeight="bold"
                >
                  $0.00
                </Typography>
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: {
                    md: "180px",
                  },
                }}
              >
                Join
              </Button>
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Container>
  );
};

export default CartItems;
