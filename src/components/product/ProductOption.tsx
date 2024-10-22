import { Box, Paper, Typography } from "@mui/material";

interface ProductOptionProps {
  label: string;
  img?: string | undefined;
  value: string;
  disabled?: boolean | undefined;
  selected?: boolean | undefined;
}

const ProductOption = ({
  label,
  img,
  // value,
  disabled = false,
  selected = false,
}: ProductOptionProps) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        py: "4px",
        px: "8px",
        border: selected ? "1px solid transparent" : "",
        borderColor: selected ? "primary.main" : "",
        opacity: disabled ? 0.5 : 1,
        "&:hover": {
          cursor: disabled ? "" : "pointer",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        {img && (
          <Box
            component={"img"}
            src={img}
            sx={{
              objectFit: "contain",
              height: "30px",
              width: "30px",
            }}
          />
        )}

        <Typography>{label}</Typography>
      </Box>
    </Paper>
  );
};

export default ProductOption;
