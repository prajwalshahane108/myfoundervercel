// components/ServicesSection.js
import React, { useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
// Import icons
import BoltIcon from "@mui/icons-material/Wysiwyg";
import DnsIcon from "@mui/icons-material/NearMe";
import CloudIcon from "@mui/icons-material/Public";
import StorageIcon from "@mui/icons-material/CurrencyExchange";
import BarChartIcon from "@mui/icons-material/Leaderboard";
import SecurityIcon from "@mui/icons-material/TipsAndUpdates";
import UpdateIcon from "@mui/icons-material/Handshake";
import CampaignIcon from "@mui/icons-material/Storefront";
import CubeIcon from "@mui/icons-material/ViewInAr";
import CodeIcon from "@mui/icons-material/Code";
import TuneIcon from "@mui/icons-material/Tune";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import BusinessIcon from "@mui/icons-material/Business";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionContainer = motion(Container);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: {
      xs: "100vh",
      sm: "120vh",
      md: "100vh",
    },
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      padding: "40px 15px",
      backgroundSize: "15px 15px",
      minHeight: "100vh",
    },
    "@media (max-width: 480px)": {
      padding: "30px 10px",
      backgroundSize: "10px 10px",
      minHeight: "100vh",
    },
  },
  sectionTag: {
    color: "white",
    backgroundColor: "rgba(7, 0, 0, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "3px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "white",
    fontSize: "2.9rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  sectionDescription: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.1rem",
    textAlign: "center",
    maxWidth: "500px",
    marginBottom: "60px",
    lineHeight: 1.6,
  },
  mainServiceCard: {
    backgroundColor: "#111111",
    borderRadius: "20px",
    padding: "24px",
    height: "100%",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  },
  serviceTitle: {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "25px",
    marginTop: "10px",
    textAlign: "center",
  },
  serviceImageContainer: {
    width: "100%",
    height: "180px",
    backgroundColor: "#0A0A0A",
    borderRadius: "12px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  serviceDescription: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: 1.6,
  },
  planImage: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  planIconCenter: {
    backgroundColor: "rgb(255, 158, 44, 0.1)",
    borderRadius: "50%",
    width: "70px",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#E87811",
    fontSize: "2rem",
    zIndex: 2,
  },
  planIconOuter: {
    position: "absolute",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    backgroundColor: "#1A1A1A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    color: "white",
  },
  planIcon1: {
    top: "30%",
    left: "25%",
  },
  planIcon2: {
    top: "30%",
    right: "25%",
  },
  planIcon3: {
    bottom: "30%",
    left: "25%",
  },
  planIcon4: {
    bottom: "30%",
    right: "25%",
  },
  connector: {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.1)",
    height: "1px",
    width: "80px",
    zIndex: 1,
  },
  connector1: {
    transform: "rotate(45deg)",
    top: "40%",
    left: "30%",
  },
  connector2: {
    transform: "rotate(-45deg)",
    top: "40%",
    right: "30%",
  },
  connector3: {
    transform: "rotate(-45deg)",
    bottom: "40%",
    left: "30%",
  },
  connector4: {
    transform: "rotate(45deg)",
    bottom: "40%",
    right: "30%",
  },
  codeBlock: {
    fontFamily: "monospace",
    fontSize: "0.85rem",
    color: "white",
    padding: "15px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  lineNumber: {
    color: "rgba(255, 255, 255, 0.3)",
    width: "20px",
    marginRight: "10px",
    textAlign: "right",
  },
  codeLine: {
    display: "flex",
    width: "100%",
    marginBottom: "5px",
  },
  codeKeyword: {
    color: "#E87811",
  },
  codeComment: {
    color: "#6A9955",
  },
  codeProperty: {
    color: "#AFAFAF",
  },
  codeString: {
    color: "#CE9178",
  },
  automationInterface: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "10px",
  },
  automationControl: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: "10px 15px",
    borderRadius: "10px",
    color: "white",
  },
  automationIcon: {
    marginRight: "10px",
    color: "rgba(255, 255, 255, 0.7)",
  },
  emailButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 158, 44, 0.1)",
    padding: "10px 15px",
    borderRadius: "10px",
    color: "#E87811",
    width: "fit-content",
    marginTop: "10px",
  },
  smallServiceCard: {
    backgroundColor: "#111111",
    borderRadius: "15px",
    padding: "15px",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  smallServiceIcon: {
    backgroundColor: "rgba(255, 158, 44, 0.1)",
    color: "#E87811",
    borderRadius: "10px",
    padding: "8px",
    marginRight: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  smallServiceTitle: {
    color: "white",
    fontSize: "1rem",
    fontWeight: "500",
  },
}));

function ServicesSection() {
  const classes = useStyles();

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animate when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const smallCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const planCenterIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const planOuterIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }),
  };

  const connectorVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: (i) => ({
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const codeLineVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const automationItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  // Main service cards
  const mainServices = [
    {
      title: "Venture Studio",
      description:
        "Specialised support for Agritech, Robotics, Fintech, AI, Web3, and Deeptech startups.",
      type: "plan",
      icon: <CubeIcon />
    },
    {
      title: "AI & Web3 Academy",
      description:
        "Cutting-edge training to build tomorrow's technology leaders with hands-on workshops.",
      type: "code",
      icon: <CodeIcon />
    },
    {
      title: "Community Hub",
      description:
        "Events and networking opportunities that foster collaboration and mutual growth.",
      type: "automation",
      icon: <EmailIcon />
    },
  ];

  // Small service cards - top row
  const topRowServices = [
    {
      title: "Investment Ready",
      icon: <StorageIcon />,
    },
    {
      title: "Financial Academy",
      icon: <AccountBalanceIcon />,
    },
    {
      title: "Young Founders Club",
      icon: <SchoolIcon />,
    },
    {
      title: "Waha Ventures",
      icon: <BusinessIcon />,
    },
  ];

  // Small service cards - bottom row
  const bottomRowServices = [
    {
      title: "Recognition Platform",
      icon: <EmojiEventsIcon />,
    },
    {
      title: "Global Pitch Roster",
      icon: <CloudIcon />,
    },
    {
      title: "Investor Matching",
      icon: <UpdateIcon />,
    },
    {
      title: "Market Entry Support",
      icon: <DnsIcon />,
    },
  ];

  // Component for the planning service card
  const PlanServiceContent = () => (
    <MotionBox
      className={classes.planImage}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={classes.planIconCenter}
        variants={planCenterIconVariants}
      >
        <CubeIcon fontSize="inherit" />
      </MotionBox>
      <MotionBox
        className={`${classes.planIconOuter} ${classes.planIcon1}`}
        custom={0}
        variants={planOuterIconVariants}
      >
        <CodeIcon fontSize="small" />
      </MotionBox>
      <MotionBox
        className={`${classes.planIconOuter} ${classes.planIcon2}`}
        custom={1}
        variants={planOuterIconVariants}
      >
        <StorageIcon fontSize="small" />
      </MotionBox>
      <MotionBox
        className={`${classes.planIconOuter} ${classes.planIcon3}`}
        custom={2}
        variants={planOuterIconVariants}
      >
        <TuneIcon fontSize="small" />
      </MotionBox>
      <MotionBox
        className={`${classes.planIconOuter} ${classes.planIcon4}`}
        custom={3}
        variants={planOuterIconVariants}
      >
        <CloudIcon fontSize="small" />
      </MotionBox>
      <MotionBox
        className={`${classes.connector} ${classes.connector1}`}
        custom={0}
        variants={connectorVariants}
        style={{ originX: 0 }}
      />
      <MotionBox
        className={`${classes.connector} ${classes.connector2}`}
        custom={1}
        variants={connectorVariants}
        style={{ originX: 1 }}
      />
      <MotionBox
        className={`${classes.connector} ${classes.connector3}`}
        custom={2}
        variants={connectorVariants}
        style={{ originX: 0 }}
      />
      <MotionBox
        className={`${classes.connector} ${classes.connector4}`}
        custom={3}
        variants={connectorVariants}
        style={{ originX: 1 }}
      />
    </MotionBox>
  );

  // Component for the code service card
  const CodeServiceContent = () => (
    <MotionBox
      className={classes.codeBlock}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={classes.codeLine}
        custom={0}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>1</span>
        <span className={classes.codeKeyword}>
          class<span className={classes.codeProperty}> ChatBot&#123; </span>{" "}
        </span>
      </MotionBox>
      <MotionBox
        className={classes.codeLine}
        custom={1}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>2</span>
        <span className={classes.codeProperty}> address public owner;</span>
      </MotionBox>
      <MotionBox
        className={classes.codeLine}
        custom={2}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>3</span>
        <span className={classes.codeProperty}> int private response;</span>
      </MotionBox>
      <MotionBox
        className={classes.codeLine}
        custom={3}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>4</span>
        <span className={classes.codeKeyword}> constructor</span>
        <span className={classes.codeProperty}>() &#123;</span>
      </MotionBox>
      <MotionBox
        className={classes.codeLine}
        custom={4}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>5</span>
        <span className={classes.codeProperty}> owner = msg.sender;</span>
      </MotionBox>
      <MotionBox
        className={classes.codeLine}
        custom={5}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>6</span>
        <span className={classes.codeProperty}> &#125;</span>
      </MotionBox>
      <MotionBox
        className={classes.codeLine}
        custom={6}
        variants={codeLineVariants}
      >
        <span className={classes.lineNumber}>7</span>
        <span className={classes.codeKeyword}>
          function{" "}
          <span className={classes.codeProperty}> response(msg)&#123;</span>
        </span>
      </MotionBox>
    </MotionBox>
  );

  // Component for the automation service card
  const AutomationServiceContent = () => (
    <MotionBox
      className={classes.automationInterface}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={classes.automationControl}
        custom={0}
        variants={automationItemVariants}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
      >
        <TuneIcon className={classes.automationIcon} />
        Connect
      </MotionBox>
      <MotionBox
        className={classes.automationControl}
        custom={1}
        variants={automationItemVariants}
        whileHover={{ y: -3, transition: { duration: 0.2 } }}
      >
        <CodeIcon className={classes.automationIcon} />
        Collaborate
      </MotionBox>
      <MotionBox
        className={classes.emailButton}
        custom={2}
        variants={automationItemVariants}
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 158, 44, 0.15)",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <EmailIcon style={{ marginRight: "8px" }} />
        Network
      </MotionBox>
    </MotionBox>
  );

  // Function to render the appropriate content for each service card
  const renderServiceContent = (type) => {
    switch (type) {
      case "plan":
        return <PlanServiceContent />;
      case "code":
        return <CodeServiceContent />;
      case "automation":
        return <AutomationServiceContent />;
      default:
        return null;
    }
  };

  return (
      <Box id="mission" ref={ref} className={classes.root}>
        <MotionTypography
          variant="body1"
          className={classes.sectionTag}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          Our Programs
        </MotionTypography>

        <MotionTypography
          variant="h2"
          className={classes.sectionTitle}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          From Young Founders to Global Ventures
        </MotionTypography>

        <MotionTypography
          variant="body1"
          className={classes.sectionDescription}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          We provide comprehensive support at every stage, connecting you with the right investors, co-founders, and advisors.
        </MotionTypography>

        {/* Main Service Cards */}
        <Container maxWidth="lg" sx={{ mb: 5 }}>
          <Grid container spacing={3}>
            {mainServices.map((service, index) => (
              <MotionGrid
                item
                xs={12}
                md={4}
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
              >
                <MotionBox
                  className={classes.mainServiceCard}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 10px 25px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(232, 120, 17, 0.1)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <MotionTypography
                    variant="h4"
                    className={classes.serviceTitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    {service.title}
                  </MotionTypography>
                  <MotionBox
                    className={classes.serviceImageContainer}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {renderServiceContent(service.type)}
                  </MotionBox>
                  <MotionTypography
                    variant="body2"
                    className={classes.serviceDescription}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    {service.description}
                  </MotionTypography>
                </MotionBox>
              </MotionGrid>
            ))}
          </Grid>
        </Container>

        {/* Small Service Cards - Top Row */}
        <Container maxWidth="md" sx={{ mb: 3 }}>
          <Grid container spacing={2}>
            {topRowServices.map((service, index) => (
              <MotionGrid
                item
                xs={6}
                sm={3}
                key={index}
                custom={index}
                variants={smallCardVariants}
                initial="hidden"
                animate={controls}
              >
                <MotionBox
                  className={classes.smallServiceCard}
                  whileHover={{
                    backgroundColor: "rgba(17, 17, 17, 0.9)",
                    scale: 1.03,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MotionBox
                    className={classes.smallServiceIcon}
                    whileHover={{
                      backgroundColor: "rgba(255, 158, 44, 0.2)",
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {service.icon}
                  </MotionBox>
                  <Typography className={classes.smallServiceTitle}>
                    {service.title}
                  </Typography>
                </MotionBox>
              </MotionGrid>
            ))}
          </Grid>
        </Container>

        {/* Small Service Cards - Bottom Row */}
        <Container maxWidth="md">
          <Grid container spacing={2}>
            {bottomRowServices.map((service, index) => (
              <MotionGrid
                item
                xs={6}
                sm={3}
                key={index}
                custom={index + 4} // offset to stagger after the first row
                variants={smallCardVariants}
                initial="hidden"
                animate={controls}
              >
                <MotionBox
                  className={classes.smallServiceCard}
                  whileHover={{
                    backgroundColor: "rgba(17, 17, 17, 0.9)",
                    scale: 1.03,
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MotionBox
                    className={classes.smallServiceIcon}
                    whileHover={{
                      backgroundColor: "rgba(255, 158, 44, 0.2)",
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {service.icon}
                  </MotionBox>
                  <Typography className={classes.smallServiceTitle}>
                    {service.title}
                  </Typography>
                </MotionBox>
              </MotionGrid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
}

export default ServicesSection;