"use client";
import Image from "next/image";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  TextField,
  useTheme,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextareaAutosize,
  Drawer,
  List,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { motion } from "framer-motion";
import Form from "../../components/Form";
import JoinContacts from "../../components/JoinContacts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const MotionTypography = motion(Typography);

// Create individual styled components
const StyledRoot = styled("div")({
  backgroundColor: "#000",
  minHeight: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow:
    "inset 150px 0 155px -5px rgba(0, 0, 0, 0.8), inset -100px 0 205px -5px rgba(0, 0, 0, 0.8), inset 0 50px 105px -5px rgba(2, 0, 0, 0.8)",
  overflow: "hidden",
});
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
const StyledNavbar = styled(motion.div)(({ theme }) => ({
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
  position: "fixed",
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

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#E87811",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "rgba(255, 255, 255, 0.5)",
  },
  "& .MuiFormLabel-root": {
    color: "#AFAFAF",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#E87811",
  },
  "& .MuiSelect-icon": {
    color: "#AFAFAF",
  },
});

const StyledTextArea = styled(TextareaAutosize)({
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  color: "white",
  fontSize: "1rem",
  padding: "10px 0",
  resize: "vertical",
  minHeight: "80px",
  fontFamily: "inherit",
  "&:focus": {
    outline: "none",
    borderBottomColor: "#E87811",
  },
});

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
  border: "1px solid rgba(253, 245, 245, 0.87)",
  borderRadius: "8px",
  padding: "3px 22px",
  textTransform: "none",
  fontSize: "15px",
  whiteSpace: "nowrap",
  marginRight: "10px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "3px 12px",
    fontSize: "14px",
    marginRight: "5px",
  },
}));

// Mobile Drawer styles
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

const StyledContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  paddingTop: "187px",
  width: "100%",
  maxWidth: "1200px",
  position: "relative",
  padding: "110 20px",
  [theme.breakpoints.down("xs")]: {
    paddingTop: "180px",
    padding: "0 15px",
  },
}));

const StyledSlideUpContainer = styled(motion.div)({
  borderRadius: "8px",
  padding: "15px 25px",
  marginBottom: "64px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
});

const SectionTag = styled(MotionTypography)({
  color: "rgba(255, 255, 255, 0.5)",
  backgroundColor: "rgb(0, 0, 0)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "50px",
  padding: "4px 20px",
  fontSize: "16px",
  fontWeight: "500",
  marginBottom: {
    xs: "10px",
    sm: "20px",
    md : "30px",},
  display: "inline-block",
});

const StyledHeading3 = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "3.3rem",
  fontWeight: "400",
  lineHeight: 1.1,
  marginTop: 19,
  marginBottom: "20px",
  // For screens smaller than lg breakpoint
  [theme.breakpoints.down("lg")]: {
    fontSize: "3rem",
  },
  // For screens smaller than md breakpoint
  [theme.breakpoints.down("md")]: {
    fontSize: "2.5rem",
  },
  // For screens smaller than sm breakpoint
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
  // For very small screens
  '@media (max-width: 400px)': {
    fontSize: "1.8rem",
    marginTop: 55,
    marginBottom: "15px",
  },
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: "#AFAFAF",
  width: "100%",
  fontSize: "1.2rem",
  fontWeight: "400",
  maxWidth: "850px",
  marginBottom: "50px",
  lineHeight: "1.6",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
    maxWidth: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginBottom: "40px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9rem",
    lineHeight: "1.5",
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

// const StyledFormContainer = styled(motion.div)(({ theme }) => ({
//   backgroundColor: "#1A1A1A",
//   borderRadius: "30px",
//   padding: "40px",
//   maxWidth: "850px",
//   width: "100%",
//   marginBottom: "60px",
//   [theme.breakpoints.down("md")]: {
//     padding: "30px 20px",
//   },
// }));
const StyledFormContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  borderRadius: "30px",
  padding: "40px",
  maxWidth: "850px",
  width: "100%",
  marginBottom: "60px",
  position: "relative",
  overflow: "hidden",

  // Add this for the circular glow effect in the top-left corner
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "-50px",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.13) -50%, rgba(255, 255, 255, 0) 60%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 20px",
  },
}));
const StyledFormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "15px",
  },
}));

const StyledFormField = styled(Box)({
  flex: "1",
  width: "100%",
});

const StyledInputLabel = styled("label")({
  color: "white",
  fontSize: "0.9rem",
  marginBottom: "8px",
  display: "block",
  textAlign: "left",
});

const StyledSubmitButton = styled("button")({
  padding: "14px 25px",
  backgroundColor: "#E87811",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#D16700",
  },
});

const StyledSubmitContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "15px",
  },
}));

const StyledContactNote = styled(Box)({
  color: "#AFAFAF",
  fontSize: "1.1rem",
  textAlign: "right",
});

const StyledContactInfoSection = styled(motion.div)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  maxWidth: "1000px",
  marginTop: "40px",
  marginBottom: "60px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
}));

const StyledContactInfoItem = styled(Box)({
  
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
});

const StyledContactIcon = styled(Box)({
  backgroundColor: "#222",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "15px",
});

const StyledContactTitle = styled("h3")({
  color: "white",
  fontSize: "1.1rem",
  marginBottom: "10px",
});

const StyledContactDetail = styled("p")({
  color: "#AFAFAF",
  fontSize: "0.9rem",
  textAlign: "center",
});

// Animation variants for Framer Motion
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const slideUp = {
  // hidden: { y: 50, opacity

  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delay: custom * 0.2,
    },
  }),
};

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

const StyledRadio = styled(Radio)({
  color: "rgba(255, 255, 255, 0.5)",
  "&.Mui-checked": {
    color: "#E87811",
  },
});

const StyledRadioLabel = styled(Typography)({
  color: "white",
  fontSize: "0.95rem",
});
export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    details: "",
    role: "founder",
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <StyledRoot>
        {/* Navbar */}
        <StyledNavbar
          initial="hidden"
          animate="visible"
          variants={navbarAnimation}
        >
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
          {/* <StyledNavItems sx={{ justifyContent: "center", flex: "1" }}>
            <motion.div
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <StyledNavLink variant="body1">
                Partners
                <ExpandMoreIcon style={{ fontSize: 16, marginLeft: 4 }} />
              </StyledNavLink>
            </motion.div>
          </StyledNavItems> */}

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
                    background:
                      "linear-gradient(90deg, #E87811 0%, white 200%)",
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

            {/* <StyledDrawerList>
              <StyledDrawerItem>
                <StyledDrawerLink>
                  Founders
                </StyledDrawerLink>
              </StyledDrawerItem>
              <StyledDrawerItem>
                <StyledDrawerLink>
                  Investors
                </StyledDrawerLink>
              </StyledDrawerItem>
              <StyledDrawerItem>
                <StyledDrawerLink>
                  Partners <ExpandMoreIcon style={{ fontSize: 20, marginLeft: 4 }} />
                </StyledDrawerLink>
              </StyledDrawerItem>
            </StyledDrawerList> */}

            {/* <Box sx={{ mt: 3, px: 1 }}>
              <StyledDrawerButton
                disableRipple
                endIcon={<ArrowOutwardIcon style={{ fontSize: 16 }} />}
              >
                Join
              </StyledDrawerButton>
            </Box> */}
          </StyledDrawer>

          {/* Button on right side */}
          {/* <StyledNavButtonContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover="hover"
            variants={buttonHover}
          >
            <StyledTalkButton
              // href="/pages/NewJoin"
              disableRipple
              endIcon={
                <ArrowOutwardIcon style={{ fontSize: 14, marginLeft: 4 }} />
              }
            >
              Join
            </StyledTalkButton>
          </StyledNavButtonContainer> */}
        </StyledNavbar>

        {/* Main Content */}
        <StyledContent>
          <StyledSlideUpContainer
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={0.5}
          >
            <SectionTag variant="body1" variants={itemVariants}>
            Join Our Global Network
            </SectionTag>

            <StyledHeading3 variant="h2" style={{ marginBottom: 0 }}>
            We're Here To Connect You
            </StyledHeading3>

            <StyledDescription
              variant="body1"
              style={{ marginTop: "25px", marginBottom: "10px" }}
            >
              Our team is ready to support your cross-border journey with expert guidance & connections.
            </StyledDescription>
          </StyledSlideUpContainer>
          {/* Contact Form */}
          <Form />
          {/* Contact Information */}
          <JoinContacts/>
        </StyledContent>
      </StyledRoot>
    </>
  );
}
