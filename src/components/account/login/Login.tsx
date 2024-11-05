import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 1,
        width: "100%",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          paddingBottom: "10px",
        }}
        fontWeight="bold"
      >
        Log In
      </Typography>
      <TextField
        placeholder="email"
        sx={{
          width: "100%",
        }}
        InputProps={{
          sx: { height: 40, padding: "2px 5px " },
        }}
      />
      <TextField
        type="password"
        placeholder="password"
        sx={{
          width: "100%",
        }}
        InputProps={{
          sx: { height: 40, padding: "2px 5px " },
        }}
      />
      <Button
        variant="contained"
        disableElevation
        size="small"
        sx={{
          width: "100%",
          fontSize: "1rem",
          marginTop: "10px",
          padding: "5px",
        }}
        // onClick={(e) => {
        //   e.stopPropagation();
        // }}
      >
        Sign In
      </Button>
      <Typography
        variant="body2"
        color="primary.main"
        sx={{
          display: "flex",
          columnGap: "1",
        }}
        fontWeight="normal"
      >
        Still don't have an account?
        <Typography
          variant="body2"
          color="primary.main"
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
          fontWeight="normal"
          onClick={() => navigate("/Register")}
        >
          &nbsp;Register Now
        </Typography>
      </Typography>
    </Box>
  );
};

export default Login;
