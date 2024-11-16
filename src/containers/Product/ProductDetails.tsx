import {
  Box,
  Button,
  Container,
  // Grid2,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import SBreadcrumbs from "../../components/common/SBreadcrumbs";
import { ProductDetailsImage } from "../../components/product";
import { useParams, useSearchParams } from "react-router-dom";
import { productList } from "../../constant/products";
// import ProductOption from "../../components/product/ProductOption";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const product = productList.find((product) => product.id == id);
  const offerType = searchParams.get("type") || "";
  const joinedNumber = searchParams.get("joined") || "";
  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Stack direction={"column"} gap={3}>
        <SBreadcrumbs
          enableMobile={true}
          crumbs={[
            {
              text: "Shopperdoo",
              href: "/product/list",
            },
            {
              text: product?.name || "",
            },
          ]}
        />
        <Paper variant="outlined" sx={{ padding: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "320px",
                  md: "400px",
                },
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <ProductDetailsImage productImageUrls={product?.image || []}/>
            </Box>
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                // gap: 1,
              }}
            >
              <Typography variant="h6">{product?.name}</Typography>
              <Typography
                // variant="caption"
                color="#fe0019"
                fontSize={"22px"}
                sx={{
                  paddingTop: "17px",
                }}
              >
                <Typography
                  component={"span"}
                  variant="caption"
                  color={"#fe0019"}
                  fontSize={"22px"}
                >
                  {joinedNumber || 0}
                </Typography>{" "}
                joined
              </Typography>
              <Box
                sx={{
                  // bgcolor: "grey.100",
                  // p: 2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  gap: 1,
                  alignItems: "start",
                  marginTop: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: "line-through",
                  }}
                  variant="h5"
                >
                  $21.69
                </Typography>
                <Typography
                  color="#980101"
                  variant="h5"
                  sx={{ fontWeight: 600 }}
                >
                  {product?.price}
                </Typography>
              </Box>
              {/* <Grid2 container spacing={2} mt={1}>
                <Grid2 size={3}>
                  <Typography>Size</Typography>
                </Grid2>
                <Grid2 size={9}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <ProductOption label="39" value="23421" />
                    <ProductOption label="39" value="23421" disabled={true} />
                    <ProductOption label="39" value="23421" />
                    <ProductOption label="39" value="23421" />
                  </Box>
                </Grid2>
                <Grid2 size={3}>Color</Grid2>
                <Grid2 size={9}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    <ProductOption
                      label="Black"
                      value="23421"
                      img="https://down-sg.img.susercontent.com/file/sg-11134201-7qvd3-lfjzo988oa7oe2@resize_w48_nl.webp"
                    />
                  </Box>
                </Grid2>
                <Grid2 size={3}>Quantity</Grid2>
                <Grid2 size={9}>
                  <Quantity />
                </Grid2>
              </Grid2> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  height: "100%",
                  paddingBottom: "40px",
                  gap: 2,
                  mt: 3,
                }}
              >
                <Button
                  variant={offerType === "ONGOING" ? "outlined" : "contained"}
                  disableElevation
                  sx={{
                    width: {
                      md: "200px",
                    },
                    height: "45px",
                    fontSize: "20px",
                    backgroundColor:
                      offerType === "ONGOING" ? "transparent" : "primary.main",
                    borderColor: offerType === "ONGOING" ? "blue" : "none",
                    color: offerType === "ONGOING" ? "blue" : "white",
                  }}
                  onClick={(e) => {
                    if (offerType == "OFFER") {
                      window.location.href =
                        product?.shopeeLink || "";
                    } else {
                      e.preventDefault();
                    }
                  }}
                >
                  {offerType == "OFFER" && "Buy Offer"}
                  {offerType == "ONGOING" && "Leave"}
                  {offerType == "JOIN" && "JOIN NOW"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper variant="outlined" sx={{ padding: 2 }}>
          <Stack direction={"column"} gap={2}>
            <Box
              sx={{
                bgcolor: "grey.100",
                p: 2,
              }}
            >
              <Typography fontWeight={500}>Product Description</Typography>
            </Box>
            <Box sx={{ p: 2,whiteSpace:'pre-line' }}>
              <span>{`${product?.description}`}</span>
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
