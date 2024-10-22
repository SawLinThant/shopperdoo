import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import { Redeem } from "@mui/icons-material";

const Appbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack
            width="100%"
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="h6"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => navigate("/")}
            >
              Shopperdoo
            </Typography>
            <Paper
              elevation={0}
              square
              sx={{
                p: "4px",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <InputBase sx={{ ml: 1, flex: 1, width: "400px" }} />
              <Button
                variant="contained"
                disableElevation
                sx={{ borderRadius: 0 }}
              >
                <SearchIcon />
              </Button>
            </Paper>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
                size="large"
                onClick={() => {}}
              >
                <SearchIcon fontSize="inherit" sx={{ color: "white" }} />
              </IconButton>
              <IconButton
                size="large"
                onClick={() => {
                  navigate("/account/offer");
                }}
              >
                <Redeem fontSize="inherit" sx={{ color: "white" }} />
              </IconButton>

              <AccountMenu />
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Appbar;
