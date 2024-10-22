import { Box, Stack } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  return (
    <Box
      sx={{
        gap: "10px",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
          gap: "10px",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "65%",
          },
        }}
      >
        {/* <Box sx={{ width: "85%", margin: "auto" }}> */}
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay
          autoplaySpeed={2500}
          nextArrow={
            <>
              {/* <ArrowForwardIosIcon
                  sx={{
                    color: "black ",
                    "&:hover": {
                      color: "black ",
                    },
                  }}
                /> */}
            </>
          }
          prevArrow={
            <>
              {/* <ArrowBackIosNewIcon
                  sx={{
                    color: "black ",
                    "&:hover": {
                      color: "black ",
                    },
                  }}
                /> */}
            </>
          }
        >
          <Box
            component={"img"}
            src="https://cf.shopee.sg/file/sg-11134258-7rdx6-m0clnib4dfus38_xxhdpi"
            sx={{
              objectFit: "cover",
              height: "230px",
            }}
          />
          <Box
            component={"img"}
            src=" https://cf.shopee.sg/file/sg-11134258-7rdve-m09xcfmthvr4a6_xxhdpi"
            sx={{
              objectFit: "cover",
              height: "230px",
            }}
          />
          <Box
            component={"img"}
            src="https://cf.shopee.sg/file/sg-11134258-7rdvo-m0cncwzfa1ft8f_xxhdpi"
            sx={{
              objectFit: "cover",
              height: "230px",
            }}
          />

          <Box
            component={"img"}
            src=" https://cf.shopee.sg/file/sg-11134258-7rdxm-m0b2vjpmh5nr13_xxhdpi"
            sx={{
              objectFit: "cover",
              height: "230px",
            }}
          />
        </Slider>
      </Box>
      {/* </Box> */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: {
            xs: "100%",
            md: "35%",
          },
          mb: {
            xs: "10px",
            md: "0px",
          },
        }}
      >
        <Stack direction="column" sx={{ gap: "10px" }}>
          <Box
            component={"img"}
            src="https://cf.shopee.sg/file/sg-11134258-7rdx1-m0ctu4anr81171_xhdpi"
            sx={{
              objectFit: "cover",
              height: "110px",
            }}
          />
          <Box
            component={"img"}
            src="https://cf.shopee.sg/file/sg-11134258-7rdxz-m0cskvqeyk7d27_xhdpi"
            sx={{
              objectFit: "cover",
              height: "110px",
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
