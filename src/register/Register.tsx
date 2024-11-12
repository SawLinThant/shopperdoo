import { Box, Container } from "@mui/material";
import RegisterComponent from "../components/common/RegisterComponent";

const Register = () => {
  return (
    <Container
      maxWidth="lg"
      
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent:'center',
        alignItems: "center",
        justifyContent: "start",
        height:"100vh",
        marginTop:'100px'
      }}
    >
      <Box
        sx={{
          width: 400,
          bgcolor: "background.paper",
          // border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          borderRadius: "5px",
        }}
      >
        <RegisterComponent />
      </Box>
    </Container>
  );
};

export default Register;
