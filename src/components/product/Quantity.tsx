import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Quantity = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          border: "1px solid lightgray",
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          size="small"
          sx={{
            borderRight: "1px solid lightgray",
            borderRadius: "0px",
          }}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50px",
          }}
        >
          <Typography>1</Typography>
        </Box>

        <IconButton
          size="small"
          sx={{
            borderLeft: "1px solid lightgray",
            borderRadius: "0px",
          }}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Quantity;
