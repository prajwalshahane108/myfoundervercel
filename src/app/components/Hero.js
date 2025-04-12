import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AnimatedButton from "./AnimatedButton";
import { makeStyles } from "@mui/styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion } from "framer-motion";
import Review4 from "../components/Review4";
import Navbar from "../components/Navbar";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.6) 1px, transparent 1.5px)",
    backgroundSize: "10px 10px",
    minHeight: "100vh",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow:
      "inset 150px 0 155px -5px rgba(0, 0, 0, 0.8), inset -100px 0 205px -5px rgba(0, 0, 0, 0.8), inset 0 50px 105px -5px rgba(2, 0, 0, 0.8)",
    overflow: "hidden",
  },

  mobileMenu: {
    display: "none",
    "@media (max-width: 1024px)": {
      display: "flex",
      alignItems: "center",
    },
  },
  mobileMenuIcon: {
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
    marginRight: "15px",
  },
  mobileNavItems: {
    position: "fixed",
    top: "80px",
    left: 0,
    right: 0,
    backgroundColor: "#050505",
    borderRadius: "0 0 15px 15px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.5)",
    padding: "20px",
    zIndex: 99,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 1024px)": {
      display: "flex",
    },
  },
  mobileNavLink: {
    color: "white",
    fontSize: "18px",
    margin: "15px 0",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    padding: "8px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      color: "#E87811",
    },
  },
  navLink: {
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
    "@media (max-width: 1200px)": {
      fontSize: "15px",
      margin: "0 8px",
    },
  },

  expandIcon: {
    color: "white",
    fontSize: "16px",
    marginLeft: "2px",
  },
  talkButton: {
    backgroundColor: "#161616",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    padding: "3px 22px",
    textTransform: "none",
    fontSize: "15px",
    marginLeft: "12px",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.05)",
    },
    "@media (max-width: 600px)": {
      padding: "3px 12px",
      fontSize: "14px",
    },
  },
  arrowIcon: {
    fontSize: "14px",
    marginLeft: "4px",
    "@media (max-width: 600px)": {
      fontSize: "12px",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    minHeight: "100vh",
    paddingTop: "50px",
    width: "100%",
    maxWidth: "1200px",
    position: "relative",
    padding: "0 20px",
    "@media (max-width: 600px)": {
      paddingTop: "30px",
      padding: "0 15px",
    },
  },
  availabilityBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "6px 16px",
    marginBottom: "40px",
    marginTop: "140px",
    width: "fit-content",
    "@media (max-width: 768px)": {
      marginTop: "120px",
      marginBottom: "30px",
      padding: "4px 12px",
      maxWidth: "90%",
    },
    "@media (max-width: 480px)": {
      marginTop: "100px",
    },
  },
  availabilityPower: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "6px 16px",
    // marginBottom: "40px",
    // marginTop: "140px",
    width: "fit-content",
    "@media (max-width: 768px)": {
      marginTop: "120px",
      marginBottom: "30px",
      padding: "4px 12px",
      maxWidth: "90%",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
    },
  },
  availabilityPowerSub: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "6px 16px",
    // marginBottom: "40px",
    // marginTop: "140px",
    width: "fit-content",
    "@media (max-width: 768px)": {
      marginTop: "30px",
      marginBottom: "30px",
      padding: "4px 12px",
      maxWidth: "90%",
    },
    "@media (max-width: 480px)": {
      marginTop: "20px",
    },
  },
  greenDot: {
    color: "#4CAF50",
    fontSize: "12px",
    marginRight: "8px",
    flexShrink: 0,
    "@media (max-width: 480px)": {
      fontSize: "10px",
    },
  },
  availabilityText: {
    backgroundColor: "#000",
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
    "@media (max-width: 480px)": {
      fontSize: "11px",
    },
  },
  availabilityTextSub: {
    backgroundColor: "#000",
    color: "white",
    fontSize: "14px",
    fontWeight: "400",
    "@media (max-width: 768px)": {
      fontSize: "12px",
    },
    "@media (max-width: 480px)": {
      fontSize: "11px",
    },
  },
  heading1: {
    color: "#E87811",
    fontSize: "4rem",
    fontWeight: "400",
    lineHeight: 1,
    marginTop: 20,
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
    },
  },
  logoImage: {
    maxWidth: "100%",
    height: "auto",
    "@media (max-width: 768px)": {
      width: "90%",
      height: "auto",
    },
    "@media (max-width: 480px)": {
      width: "95%",
    },
  },
  heading2: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "400",
    width: "100%",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      fontSize: "2.5rem",
      marginBottom: "40px",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      marginBottom: "30px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem",
    },
  },
  diamond: {
    fontSize: "2.5rem",
    color: "#FF5B23",
    margin: "0 15px",
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      margin: "0 10px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.5rem",
      margin: "0 5px",
    },
  },
  heading3: {
    color: "#E87811",
    fontSize: "5rem",
    fontWeight: "400",
    lineHeight: 1.1,
    margin: 0,
    marginBottom: "30px",
    "@media (max-width: 900px)": {
      fontSize: "4rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "2.5rem",
    },
  },
  description: {
    color: "rgb(255, 255, 255)",
    width: "100%",
    fontSize: "1.5rem",
    fontWeight: "400",
    maxWidth: "850px",
    marginBottom: "40px",
    lineHeight: "1.6",
    "@media (max-width: 900px)": {
      fontSize: "1.3rem",
      maxWidth: "90%",
    },
    "@media (max-width: 600px)": {
      fontSize: "1.1rem",
      marginBottom: "90px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1rem",
      lineHeight: "1.5",
      marginBottom: "9px",
    },
  },
  ourai: {
    "@media (max-width: 600px)": {
      fontSize: "1.1rem",
      marginBottom: "30px",
      marginLeft: "30px",
    },
    "@media (max-width: 480px)": {
      justifyContent: "flex-end",
      alignItems: "flex-end",
      marginLeft: "30px",
    },
  },
  highlightedText: {
    color: "#FF5B23",
  },
  learnMoreButton: {
    backgroundColor: "rgba(0, 0, 0, 0.97)",
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    boxShadow: "inset 0 10px 10px -10px rgba(255, 255, 255, 0.3)",
    padding: "6px 40px",
    textTransform: "none",
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "1px",
    "&:hover": {
      backgroundColor: "rgba(2, 0, 0, 0.88)",
    },
    "@media (max-width: 600px)": {
      padding: "8px 16px",
      fontSize: "0.9rem",
    },
  },
  buttonIcon: {
    marginLeft: "5px",
    fontSize: "20px",
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
  },
  statsSection: {
    width: "100%",
    backgroundColor: "#000",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.3) 1px, transparent 1.5px)",
    backgroundSize: "10px 10px",
    padding: "40px 0",
    marginTop: "60px",
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    "@media (max-width: 768px)": {
      padding: "30px 0",
      marginTop: "40px",
    },
    "@media (max-width: 480px)": {
      padding: "20px 0",
      marginTop: "30px",
    },
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      padding: "0 15px",
    },
  },
  statItem: {
    textAlign: "center",
    padding: "15px",
    "@media (max-width: 768px)": {
      width: "45%",
      marginBottom: "20px",
    },
    "@media (max-width: 480px)": {
      width: "100%",
      padding: "10px",
    },
  },
  statNumber: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "600",
    marginBottom: "8px",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.5rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "2.2rem",
    },
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    fontWeight: "400",
    "@media (max-width: 600px)": {
      fontSize: "1rem",
    },
  },
  footerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: "40px",
    width: "100%",
    "@media (max-width: 768px)": {
      position: "relative",
      marginTop: "60px",
      bottom: "auto",
    },
    "@media (max-width: 480px)": {
      marginTop: "40px",
    },
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    fontWeight: "400",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem",
    },
  },
  partnerLogos: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: "40px",
    alignItems: "center",
    opacity: 0.5,
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      gap: "20px",
    },
    "@media (max-width: 480px)": {
      gap: "15px",
    },
  },
  logoItem: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 768px)": {
      fontSize: "1rem",
      gap: "20px",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      gap: "15px",
    },
  },
  circleIcon: {
    fontSize: "1rem",
    marginRight: "8px",
    "@media (max-width: 480px)": {
      fontSize: "0.8rem",
    },
  },
}));

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delay: custom * 0.4, // Custom delay based on sequence
    },
  }),
};

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.root}>
        <Navbar />
        {/* Main Content */}
        <Box className={classes.content}>
          <motion.div
            className={classes.availabilityBadge}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={1}
          >
            <FiberManualRecordIcon className={classes.greenDot} />
            <Typography className={classes.availabilityText}>
              {/* 1000+ startups joined, 1500+ investors database globally */}
              Beyond ✦ Borders.
            </Typography>
          </motion.div>
          <motion.div
            className={classes.heading1}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={2}
          >
            <motion.img
              src="https://framerusercontent.com/images/UDSUes4B94lfLzzemyBwC6LQeEA.png?scale-down-to=1024"
              alt="MyFounders.Club"
              className={classes.logoImage}
              width={isSmallScreen ? 300 : isMobile ? 450 : 600}
              height="auto"
              priority="true"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1,
                duration: 0.8,
              }}
            />
          </motion.div>
          <motion.div
            className={classes.availabilityPowerSub}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={1}
          >
            {/* <FiberManualRecordIcon className={classes.greenDot} /> */}
            <Typography className={classes.availabilityTextSub}>
            Powering the Venture Ecosystems
            </Typography>
          </motion.div>
          <br />
          <br />
          <br />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={3}
          >
            <Typography variant="h2" className={classes.heading2}>
              <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.0, duration: 0.5 }}
              >
                Amplified{" "}<br />
              </motion.span>
              {/* We connect ambitious{" "} */}
               With Connections
              {/* , strategic{" "} */}
              {/* <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.3, duration: 0.5 }}
              >
                capital
              </motion.span> */}
              {/* ,<br /> and{" "} */}
              {/* <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.6, duration: 0.5 }}
              >
                innovation hubs
              </motion.span>{" "} */}
              {/* across borders. <br />
              We're building the{" "} */}
              {/* <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 2.9, duration: 0.5 }}
              >
                infrastructure
              </motion.span>{" "} */}
              {/* that turns vision <br /> into venture in the most{" "} */}
              {/* <motion.span
                className={classes.highlightedText}
                initial={{ color: "white" }}
                animate={{ color: "#FF5B23" }}
                transition={{ delay: 3.2, duration: 0.5 }}
              >
                dynamic market
              </motion.span> */}
              .
            </Typography>
          </motion.div>
          <motion.div
            className={classes.ourai}
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={4}
          >
            <Typography variant="body1" className={classes.description}>
              {/* Our AI & Web3-powered ecosystem connects visionaries with the
              resources they need, positioning Riyadh as the world's
              entrepreneurial capital and accelerating Vision 2030. */}
              Connecting ambitious founders, strategic capital, and innovation hubs across borders.
            </Typography>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            custom={5}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatedButton />
          </motion.div>
          <Review4 />
        </Box>
      </div>
    </>
  );
}
