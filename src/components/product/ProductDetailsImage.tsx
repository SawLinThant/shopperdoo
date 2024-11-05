import { Box, Typography } from "@mui/material";
import { useState } from "react";

const ProductDetailsImage = ({
  productImageUrls,
}: {
  productImageUrls: string[];
}) => {
  const [primaryImage, setPrimaryImage] = useState<string>(
    productImageUrls?.[0] || ""
  );
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
        src={primaryImage}
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
        {productImageUrls.map((imageUrl, index) => {
          return (
            <Box
              component={"img"}
              src={imageUrl || ""}
              sx={{
                objectFit: "cover",
                width: "100px",
                minHeight: "100px",
              }}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setPrimaryImage(imageUrl);
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductDetailsImage;
