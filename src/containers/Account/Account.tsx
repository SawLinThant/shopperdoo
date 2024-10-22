import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Profile from "./Profile";
import Offer from "./Offer";

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Box
          sx={{
            flex: 0.2,
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname.includes("profile")}
                onClick={() => {
                  navigate("/account/profile");
                }}
                sx={{
                  "&.Mui-selected": {
                    borderRight: "8px solid",
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                selected={location.pathname.includes("offer")}
                onClick={() => {
                  navigate("/account/offer");
                }}
                sx={{
                  "&.Mui-selected": {
                    borderRight: "8px solid",
                    borderColor: "primary.main",
                  },
                }}
              >
                <ListItemText primary="Offers" />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ mt: 2 }} />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            flex: {
              xs: 1,
              md: 0.8,
            },
            width: "100%",
          }}
        >
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="offer" element={<Offer />} />
            <Route path="*" element={<Navigate to={"profile"} replace />} />
          </Routes>
        </Box>
      </Box>
    </Container>
  );
};

export default Account;
