import { Box, Typography } from "@mui/material";

const ProductDetailsImage = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          bgcolor: "primary.main",
          height: "30px",
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
          pl: 0.5,
          pr: 3,
        }}
      >
        <Typography variant="caption" color="white" fontWeight="bold">
          Ending on 16 Nov 2024
        </Typography>
      </Box>
      <Box
        component={"img"}
        src="https://down-sg.img.susercontent.com/file/sg-11134207-7rdye-m04gl5qw0x8p32.webp"
        sx={{
          objectFit: "cover",
          width: "100%",
          minHeight: "360px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          overflow: "auto",
          maxWidth: "400px",
        }}
      >
        <Box
          component={"img"}
          src="https://down-sg.img.susercontent.com/file/sg-11134207-7rdye-m04gl5qw0x8p32.webp"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        />
        <Box
          component={"img"}
          src="https://down-sg.img.susercontent.com/file/sg-11134207-7rdxy-m04glb5y3hev6d.webp"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        />
        <Box
          component={"img"}
          src="https://down-sg.img.susercontent.com/file/sg-11134207-7rdvc-m04glex2n5pv41.webp"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        />
        {/* <Box
          component={"img"}
          src="https://cf.shopee.sg/file/sg-11134258-7rdx6-m0clnib4dfus38_xxhdpi"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        />
        <Box
          component={"img"}
          src="https://cf.shopee.sg/file/sg-11134258-7rdx6-m0clnib4dfus38_xxhdpi"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        />
        <Box
          component={"img"}
          src="https://cf.shopee.sg/file/sg-11134258-7rdx6-m0clnib4dfus38_xxhdpi"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        />
        <Box
          component={"img"}
          src="https://cf.shopee.sg/file/sg-11134258-7rdx6-m0clnib4dfus38_xxhdpi"
          sx={{
            objectFit: "cover",
            width: "100px",
            minHeight: "100px",
          }}
        /> */}
      </Box>
    </Box>
  );
};

export default ProductDetailsImage;
