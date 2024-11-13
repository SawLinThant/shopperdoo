import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import { Login } from "../account/login";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const isAuthorized = true; // change to session hook when convert to t3
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
    handleClose();
  };

  const handleCloseLogin = () => setOpenLogin(false);

  return (
    <>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            // border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            borderRadius:'5px'
          }}
        >
          <Login />
        </Box>
      </Modal>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton size="large" onClick={handleClick}>
          <AccountCircleIcon fontSize="inherit" sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            padding: "0.5rem",
            borderRadius: "0.5rem",
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isAuthorized && (
          <>
            <MenuItem
              onClick={() => {
                navigate("/account/profile");
              }}
              sx={{
                borderRadius: "0.3rem",
                width: "200px",
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/account/offer");
              }}
              sx={{
                borderRadius: "0.3rem",
              }}
            >
              Offers
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleLogout}
              sx={{
                borderRadius: "0.3rem",
              }}
            >
              Logout
            </MenuItem>
          </>
        )}
        {!isAuthorized && (
          <>
            <MenuItem
              onClick={handleOpenLogin}
              sx={{
                borderRadius: "0.3rem",
                width: "200px",
              }}
            >
              Login
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
};

export default AccountMenu;
