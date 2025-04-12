'use client';
import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

// Styled Components for Navbar
const StyledNavbar = styled(motion.div)(({ theme }) => ({
  // position: "fixed",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "50px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backgroundColor: "#050505",
  backgroundSize: "20px 20px",
  margin: "17px 20px",
  padding: "0 30px 0px 30px",
  height: "72px",
  width: "calc(72.5% - 40px)",
  position: "absolute",
  top: 5,
  zIndex: 100,
  [theme.breakpoints.down("lg")]: {
    width: "calc(95% - 40px)",
    padding: "0 15px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(90% - 20px)",
    padding: "0 10px",
    margin: "10px",
  },
}));

const StyledNavItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  marginLeft: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledNavLink = styled(Typography)({
  color: "#AFAFAF",
  margin: "0 12px",
  fontSize: "16.5px",
  fontWeight: "400",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  "&:hover": {
    color: "#E87811",
  },
});

const StyledMobileMenu = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
}));

const StyledNavButtonContainer = styled(motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledTalkButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#161616",
  color: "white",
  // border: "1px solid rgba(253, 245, 245, 0.87)",
  borderRadius: "8px",
  fontWeight: "300",
  padding: "6px 44px",
  textTransform: "none",
  fontSize: "18px",
  // whiteSpace: "nowrap",
  marginRight: "19px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 12px",
    fontSize: "14px",
    marginRight: "5px",
  },
}));

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "75%",
    maxWidth: "300px",
    backgroundColor: "#111111",
    color: "white",
    boxSizing: "border-box",
    padding: "20px",
  },
});

const StyledDrawerHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px 0",
  marginBottom: "20px",
});

const StyledDrawerList = styled(List)({
  padding: 0,
});

const StyledDrawerItem = styled(ListItem)({
  padding: "15px 0",
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  "&:last-child": {
    borderBottom: "none",
  },
});

const StyledDrawerLink = styled(Typography)({
  color: "white",
  fontSize: "1.1rem",
  display: "flex",
  alignItems: "center",
  width: "100%",
  "&:hover": {
    color: "#E87811",
  },
});

const StyledDrawerButton = styled(Button)({
  backgroundColor: "#E87811",
  color: "white",
  borderRadius: "8px",
  padding: "10px 25px",
  textTransform: "none",
  fontSize: "1rem",
  marginTop: "20px",
  width: "100%",
  "&:hover": {
    backgroundColor: "#D16700",
  },
});

// Animation variants
const navbarAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      delay: 0.2,
    },
  },
};

const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <StyledNavbar
        initial="hidden"
        animate="visible"
        variants={navbarAnimation}
      >
        {/* Logo Section */}
        <Link href="/" style={{ textDecoration: "none" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ display: "flex", alignItems: "center" }}
        >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{ marginRight: "4px" }}
            />
            <Typography
              variant="h6"
              style={{
                background: "linear-gradient(90deg, #E87811 0%, white 200%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 500,
                fontSize: "1.3rem",
                marginRight: "auto",
              }}
            >
              MyFounders.Club
            </Typography>
        </motion.div>
          </Link>

        {/* Desktop Navigation */}
        <StyledNavItems sx={{ justifyContent: "center", flex: "1" }}>
          {/* Uncomment and populate navigation items as needed */}
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <StyledNavLink variant="body1">Founders</StyledNavLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <StyledNavLink variant="body1">Investors</StyledNavLink>
          </motion.div> */}
        </StyledNavItems>

        {/* Mobile Menu Icon */}
        <StyledMobileMenu>
          <motion.div transition={{ duration: 0.3 }}>
            <MenuIcon
              style={{
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                marginRight: "8px",
              }}
              onClick={toggleDrawer(true)}
            />
          </motion.div>
        </StyledMobileMenu>

        {/* Mobile Drawer */}
        <StyledDrawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <StyledDrawerHeader>
            <Box display="flex" alignItems="center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={35}
                height={35}
                style={{ marginRight: "8px" }}
              />
              <Typography
                variant="h6"
                style={{
                  background: "linear-gradient(90deg, #E87811 0%, white 200%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                }}
              >
                MyFounders.Club
              </Typography>
            </Box>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: "white", padding: "8px" }}
            >
              <CloseIcon />
            </IconButton>
          </StyledDrawerHeader>

          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", my: 1 }} />

          {/* Uncomment and populate drawer navigation items as needed */}
          {/* <StyledDrawerList>
            <StyledDrawerItem>
              <StyledDrawerLink>Founders</StyledDrawerLink>
            </StyledDrawerItem>
            <StyledDrawerItem>
              <StyledDrawerLink>Investors</StyledDrawerLink>
            </StyledDrawerItem>
          </StyledDrawerList> */}

          <Box sx={{ mt: 3, px: 1 }}>
            <StyledDrawerButton
             href="/pages/NewJoin"
              disableRipple
              endIcon={<ArrowOutwardIcon style={{ fontSize: 16 }} />}
            >
              Join
            </StyledDrawerButton>
          </Box>
        </StyledDrawer>

        {/* Button on right side */}
        <StyledNavButtonContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover="hover"
          variants={buttonHover}
        >
          <StyledTalkButton
            disableRipple
            href="/pages/NewJoin"
            endIcon={
              <ArrowOutwardIcon style={{ fontSize: 19, marginLeft: 4 }} />
            }
          >
            Join
          </StyledTalkButton>
          {/* <StyledTalkButton
            disableRipple
            href='/admin/AppLayout'
            endIcon={
              <ArrowOutwardIcon style={{ fontSize: 14, marginLeft: 4 }} />
            }
          >
            Login
          </StyledTalkButton> */}
        </StyledNavButtonContainer>
      </StyledNavbar>
    </>
  );
}
