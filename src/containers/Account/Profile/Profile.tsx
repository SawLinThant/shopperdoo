import {
  Box,
  Button,
  Divider,
  Grid2,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  return (
    <Paper variant="outlined" sx={{ mt: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, m: 2 }}>
        <Box>
          <Typography variant="h6">My Profile</Typography>
          <Typography>Manage and protect your account</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
            mb: 3,
          }}
        >
          <Box
            sx={{
              flex: 0.7,
              mt: 3,
            }}
          >
            <Grid2 container spacing={3} alignItems={"center"}>
              <Grid2 size={4}>
                <Typography textAlign={"end"} color="text.secondary">
                  Name
                </Typography>
              </Grid2>
              <Grid2 size={8}>
                <TextField size="small" placeholder="John Doe" />
              </Grid2>
              <Grid2 size={4}>
                <Typography textAlign={"end"} color="text.secondary">
                  Email
                </Typography>
              </Grid2>
              <Grid2 size={8}>
                <Typography>zm******@gmail.com</Typography>
              </Grid2>
              <Grid2 size={4}>
                <Typography textAlign={"end"} color="text.secondary">
                  Phone Number
                </Typography>
              </Grid2>
              <Grid2 size={8}>
                <Typography>********62</Typography>
              </Grid2>
              <Grid2
                size={{
                  xs: 12,
                  md: 9.5,
                }}
              >
                <Stack alignItems={"center"}>
                  <Button variant="contained" disableElevation>
                    Save
                  </Button>
                </Stack>
              </Grid2>
            </Grid2>
          </Box>

          <Box
            sx={{
              flex: 0.3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderLeft: "1px solid ",
              borderColor: {
                xs: "transparent",
                md: "grey.200",
              },
            }}
          >
            <AccountCircleIcon
              sx={{ width: "180px", height: "180px", color: "grey.300" }}
            />
            <Button variant="outlined">Select Image</Button>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mt: 2 }}
              textAlign={"center"}
            >
              File size: maximum 1 MB
              <br />
              File extension: .JPEG, .PNG
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default Profile;
