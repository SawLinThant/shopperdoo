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
import { useSearchParams } from "react-router-dom";
// import ProductOption from "../../components/product/ProductOption";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const offerType = searchParams.get("type") || "";
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
              text: "[Group Buy] Aroma Bliss Booster Beads for Clothes & Textiles | 200g Content Lasting Fragrance For Up To A Week",
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
              <ProductDetailsImage />
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
              <Typography variant="h6">
                [Group Buy] Aroma Bliss Booster Beads for Clothes & Textiles |
                200g Content Lasting Fragrance For Up To A Week
              </Typography>
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
                  904
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
                  $6.43
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
                        "https://shopee.sg/product/1347290168/25135993923/";
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
            <Box sx={{ p: 2 }}>
              Introducing Fragrance Booster: Unveil the Secret to Long-lasting
              Scents
              <br /> Are you tired of fleeting fragrances that vanish too soon?
              Say hello to our Fragrance Booster, your ultimate solution for a
              scent that lasts.
              <br />
              <br /> FOR BEST PERFORMANCE, USE MINIMUM 2 CAPS
              <br />
              <br />
              Nanoscale Microcapsules: Dive into the realm of advanced fragrance
              technology with our nanoscale microcapsules. These tiny marvels
              encapsulate the essence of your favorite scents, ensuring a
              lasting aroma that stays with you throughout the day.
              <br />
              <br /> Long-lasting Fragrance: Experience the joy of a scent that
              lingers. Our Fragrance Booster doesn't just offer a brief whiff of
              freshness—it delivers a scent experience that endures for up to a
              week. Say goodbye to the disappointment of scents that fade too
              quickly.
              <br />
              <br />
              Easy Application: Incorporating our Fragrance Booster into your
              laundry routine is a breeze. Simply add it to your wash cycle, and
              watch as the fragrance capsules adhere to your clothes, infusing
              them with a delightful aroma that lasts wash after wash.
              <br />
              <br /> Versatile Use: Not limited to just laundry, our Fragrance
              Booster is perfect for enhancing the scent of various textiles.
              From clothing to bedding, enjoy the enduring fragrance in every
              aspect of your daily life.
              <br />
              <br /> Gentle and Effective: Rest assured, our Fragrance Booster
              is formulated to be gentle on fabrics while effectively delivering
              long-lasting scent enhancement. It's the perfect combination of
              efficacy and care for your cherished textiles.
            </Box>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
