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
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TimelineIcon from "@mui/icons-material/Timeline";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionContainer = motion(Container);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#050505",
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
    padding: "20px 20px 50px 20px",
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
    maxWidth: "900px",
    marginBottom: "50px",
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
  // Original plan styles
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
  // Original code styles
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
  // Original automation styles
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

  // NEW COMPONENTS STYLES

  // Timeline visualization - for Venture Studio
  timelineContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  timelineTrack: {
    position: "absolute",
    width: "80%",
    height: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "4px",
  },
  timelineDot: {
    position: "absolute",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: "#E87811",
    bottom: "calc(50% - 8px)",
    zIndex: 3,
  },
  timelineLabel: {
    position: "absolute",
    color: "white",
    fontSize: "0.7rem",
    width: "80px",
    textAlign: "center",
    bottom: "calc(50% + 20px)",
  },
  timelinePhase: {
    position: "absolute",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.65rem",
    width: "80px",
    textAlign: "center",
    bottom: "calc(50% - 40px)",
  },

  // Knowledge grid - for AI & Web3 Academy
  gridContainer: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "10px",
    padding: "10px",
  },
  gridItem: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "0.7rem",
  },
  gridItemHighlight: {
    backgroundColor: "rgba(232, 120, 17, 0.2)",
    color: "#E87811",
  },

  // Network visualization - for Community Hub
  networkContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  networkNode: {
    position: "absolute",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    boxShadow: "0 0 5px rgba(255, 255, 255, 0.1)",
  },
  networkNodeLarge: {
    width: "25px",
    height: "25px",
    backgroundColor: "rgba(232, 120, 17, 0.5)",
    boxShadow: "0 0 10px rgba(232, 120, 17, 0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "0.9rem",
    zIndex: 10,
  },
  networkLine: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    height: "1px",
    transformOrigin: "0 0",
    zIndex: 1,
  },
  networkCentralNode: {
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "calc(50% - 20px)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(232, 120, 17, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    zIndex: 5,
    boxShadow: "0 0 15px rgba(232, 120, 17, 0.4)",
  },

  // Investment funnel - for Investment Ready
  funnelContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
  },
  funnelStage: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    width: "90%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "500",
    overflow: "hidden",
  },
  funnelStage1: {
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    backgroundColor: "rgba(232, 120, 17, 0.5)",
  },
  funnelStage2: {
    width: "75%",
    backgroundColor: "rgba(232, 120, 17, 0.35)",
  },
  funnelStage3: {
    width: "60%",
    backgroundColor: "rgba(232, 120, 17, 0.2)",
  },
  funnelStage4: {
    width: "45%",
    backgroundColor: "rgba(232, 120, 17, 0.1)",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
  },
  funnelIcon: {
    position: "absolute",
    left: "10px",
    color: "white",
    opacity: 0.7,
    fontSize: "0.9rem",
  },

  // Financial dashboard - for Financial Academy
  dashboardContainer: {
    width: "100%",
    height: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  dashboardRow: {
    display: "flex",
    gap: "10px",
    height: "40px",
  },
  dashboardMetric: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    padding: "0 10px",
    color: "white",
    fontSize: "0.8rem",
  },
  dashboardValue: {
    marginLeft: "auto",
    fontWeight: "bold",
    color: "#E87811",
  },
  dashboardChart: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    height: "70px",
    padding: "5px",
    position: "relative",
  },
  chartBar: {
    position: "absolute",
    bottom: "5px",
    width: "10%",
    backgroundColor: "rgba(232, 120, 17, 0.5)",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  },

  // Young Founders - for Young Founders Club
  youngFoundersContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  profileRow: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },
  profileCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1rem",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  profileHighlight: {
    backgroundColor: "rgba(232, 120, 17, 0.3)",
    color: "#E87811",
  },
  pathwayLine: {
    width: "70%",
    height: "2px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    position: "relative",
  },
  pathwayDot: {
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: "#E87811",
    top: "-3px",
  },

  // Investment portfolio - for Waha Ventures
  portfolioContainer: {
    width: "100%",
    height: "100%",
    padding: "10px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "8px",
  },
  portfolioItem: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
  },
  portfolioIcon: {
    color: "white",
    fontSize: "1rem",
    marginBottom: "2px",
  },
  portfolioLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.6rem",
    textAlign: "center",
  },
  portfolioItemHighlight: {
    backgroundColor: "rgba(232, 120, 17, 0.2)",
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  portfolioHighlightIcon: {
    color: "#E87811",
    fontSize: "1.5rem",
    marginBottom: "5px",
  },
  portfolioHighlightLabel: {
    color: "white",
    fontSize: "0.75rem",
    fontWeight: "500",
  },

  // Award podium - for Recognition Platform
  podiumContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "10px",
  },
  podiumStep: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  podiumStage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
  },
  podiumFirst: {
    width: "60px",
    height: "100px",
    backgroundColor: "rgba(232, 120, 17, 0.8)",
    zIndex: 3,
  },
  podiumSecond: {
    width: "50px",
    height: "70px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    margin: "0 10px",
    zIndex: 2,
  },
  podiumThird: {
    width: "50px",
    height: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    zIndex: 1,
  },
  trophy: {
    position: "absolute",
    top: "-30px",
    color: "#E87811",
    filter: "drop-shadow(0 0 5px rgba(232, 120, 17, 0.5))",
  },

  // Small service cards styles
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

  const timelineDotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.4,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  const gridItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const networkNodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 150,
      },
    }),
  };

  const networkLineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: (i) => ({
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: 0.4 + i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const funnelStageVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: (i) => ({
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const dashboardRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const chartBarVariants = {
    hidden: { scaleY: 0 },
    visible: (i) => ({
      scaleY: 1,
      transition: {
        delay: 0.6 + i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const profileRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const pathwayDotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
      },
    }),
  };

  const portfolioItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.07,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const podiumStageVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: (i) => ({
      opacity: 1,
      scaleY: 1,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.5,
        ease: "easeOut",
        transformOrigin: "bottom",
      },
    }),
  };

  const trophyVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };

  // Main service cards with custom types
  const mainServices = [
    {
      title: "Venture Studio",
      description:
        "Specialised support for Agritech, Robotics, Fintech, AI, Web3, and Deeptech startups.",
      type: "timeline",
      icon: <CubeIcon />,
    },
    {
      title: "AI & Web3 Academy",
      description:
        "Cutting-edge training to build tomorrow's technology leaders with hands-on workshops.",
      type: "grid",
      icon: <CodeIcon />,
    },
    {
      title: "Community Hub",
      description:
        "Events and networking opportunities that foster collaboration and mutual growth.",
      type: "network",
      icon: <EmailIcon />,
    },
    {
      title: "Investment Ready",
      description:
        "Structured preparation for founders seeking capital with expert mentorship.",
      type: "funnel",
      icon: <StorageIcon />,
    },
    {
      title: "Financial Academy",
      description: "Comprehencive support for non-financial founders",
      type: "dashboard",
      icon: <AccountBalanceIcon />,
    },
    {
      title: "Young Founders Club",
      description:
        "Nurturing entrepreneurial talent in schools and universities",
      type: "youngfounders",
      icon: <SchoolIcon />,
    },
    {
      title: "Waha Ventures",
      description:
        "Strategic investment in high-potential startups in MENA & Globally",
      type: "portfolio",
      icon: <BusinessIcon />,
    },
    {
      title: "Recognition Platform",
      description: "Awards, demo days, and global showcase opportunities",
      type: "podium",
      icon: <EmojiEventsIcon />,
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

  // COMPONENT FOR TIMELINE VISUALIZATION - Venture Studio
  const TimelineContent = () => (
    <MotionBox
      className={classes.timelineContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox className={classes.timelineTrack} />
      <MotionBox
        className={classes.timelineDot}
        style={{ left: "10%" }}
        custom={0}
        variants={timelineDotVariants}
      />
      <MotionTypography
        className={classes.timelineLabel}
        style={{ left: "calc(10% - 40px)" }}
        custom={0}
        variants={itemVariants}
      >
        Ideation
      </MotionTypography>
      <MotionTypography
        className={classes.timelinePhase}
        style={{ left: "calc(10% - 40px)" }}
        custom={0}
        variants={itemVariants}
      >
        Phase 1
      </MotionTypography>

      <MotionBox
        className={classes.timelineDot}
        style={{ left: "35%" }}
        custom={1}
        variants={timelineDotVariants}
      />
      <MotionTypography
        className={classes.timelineLabel}
        style={{ left: "calc(35% - 40px)" }}
        custom={1}
        variants={itemVariants}
      >
        Development
      </MotionTypography>
      <MotionTypography
        className={classes.timelinePhase}
        style={{ left: "calc(35% - 40px)" }}
        custom={1}
        variants={itemVariants}
      >
        Phase 2
      </MotionTypography>

      <MotionBox
        className={classes.timelineDot}
        style={{ left: "65%" }}
        custom={2}
        variants={timelineDotVariants}
      />
      <MotionTypography
        className={classes.timelineLabel}
        style={{ left: "calc(65% - 40px)" }}
        custom={2}
        variants={itemVariants}
      >
        Launch
      </MotionTypography>
      <MotionTypography
        className={classes.timelinePhase}
        style={{ left: "calc(65% - 40px)" }}
        custom={2}
        variants={itemVariants}
      >
        Phase 3
      </MotionTypography>

      <MotionBox
        className={classes.timelineDot}
        style={{ left: "90%" }}
        custom={3}
        variants={timelineDotVariants}
      />
      <MotionTypography
        className={classes.timelineLabel}
        style={{ left: "calc(90% - 40px)" }}
        custom={3}
        variants={itemVariants}
      >
        Scale
      </MotionTypography>
      <MotionTypography
        className={classes.timelinePhase}
        style={{ left: "calc(90% - 40px)" }}
        custom={3}
        variants={itemVariants}
      >
        Phase 4
      </MotionTypography>
    </MotionBox>
  );

  // COMPONENT FOR KNOWLEDGE GRID - AI & Web3 Academy
  const GridContent = () => (
    <MotionBox
      className={classes.gridContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={`${classes.gridItem} ${classes.gridItemHighlight}`}
        custom={0}
        variants={gridItemVariants}
      >
        AI
      </MotionBox>
      <MotionBox
        className={classes.gridItem}
        custom={1}
        variants={gridItemVariants}
      >
        Blockchain
      </MotionBox>
      <MotionBox
        className={`${classes.gridItem} ${classes.gridItemHighlight}`}
        custom={2}
        variants={gridItemVariants}
      >
        Web3
      </MotionBox>
      <MotionBox
        className={classes.gridItem}
        custom={3}
        variants={gridItemVariants}
      >
        ML/DL
      </MotionBox>
      <MotionBox
        className={`${classes.gridItem} ${classes.gridItemHighlight}`}
        custom={4}
        variants={gridItemVariants}
      >
        Smart Contracts
      </MotionBox>
      <MotionBox
        className={classes.gridItem}
        custom={5}
        variants={gridItemVariants}
      >
        NFTs
      </MotionBox>
      <MotionBox
        className={`${classes.gridItem} ${classes.gridItemHighlight}`}
        custom={6}
        variants={gridItemVariants}
      >
        DApps
      </MotionBox>
      <MotionBox
        className={classes.gridItem}
        custom={7}
        variants={gridItemVariants}
      >
        DeFi
      </MotionBox>
      <MotionBox
        className={classes.gridItem}
        custom={8}
        variants={gridItemVariants}
      >
        DAO
      </MotionBox>
    </MotionBox>
  );

  // COMPONENT FOR NETWORK VISUALIZATION - Community Hub
  const NetworkContent = () => (
    <MotionBox
      className={classes.networkContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={classes.networkCentralNode}
        variants={networkNodeVariants}
        custom={0}
      >
        <GroupIcon />
      </MotionBox>

      {/* Outer nodes and connection lines */}
      <MotionBox
        className={classes.networkNode}
        style={{ top: "20%", left: "30%" }}
        variants={networkNodeVariants}
        custom={1}
      />
      <MotionBox
        className={classes.networkLine}
        style={{
          top: "calc(50% - 10px)",
          left: "calc(50% - 10px)",
          width: "60px",
          transform: "rotate(-40deg)",
        }}
        variants={networkLineVariants}
        custom={0}
      />

      <MotionBox
        className={classes.networkNode}
        style={{ top: "30%", right: "20%" }}
        variants={networkNodeVariants}
        custom={2}
      />
      <MotionBox
        className={classes.networkLine}
        style={{
          top: "calc(50% - 10px)",
          left: "calc(50% + 10px)",
          width: "70px",
          transform: "rotate(30deg)",
        }}
        variants={networkLineVariants}
        custom={1}
      />

      <MotionBox
        className={classes.networkNodeLarge}
        style={{ bottom: "20%", left: "20%" }}
        variants={networkNodeVariants}
        custom={3}
      >
        <EmailIcon fontSize="small" />
      </MotionBox>
      <MotionBox
        className={classes.networkLine}
        style={{
          top: "calc(50% + 10px)",
          left: "calc(50% - 10px)",
          width: "80px",
          transform: "rotate(40deg)",
        }}
        variants={networkLineVariants}
        custom={2}
      />

      <MotionBox
        className={classes.networkNode}
        style={{ bottom: "30%", right: "30%" }}
        variants={networkNodeVariants}
        custom={4}
      />
      <MotionBox
        className={classes.networkLine}
        style={{
          top: "calc(50% + 10px)",
          left: "calc(50% + 10px)",
          width: "60px",
          transform: "rotate(-30deg)",
        }}
        variants={networkLineVariants}
        custom={3}
      />

      <MotionBox
        className={classes.networkNodeLarge}
        style={{ top: "60%", left: "50%" }}
        variants={networkNodeVariants}
        custom={5}
      >
        <UpdateIcon fontSize="small" />
      </MotionBox>
      <MotionBox
        className={classes.networkLine}
        style={{
          top: "calc(50% + 10px)",
          left: "calc(50%)",
          width: "40px",
          transform: "rotate(90deg)",
        }}
        variants={networkLineVariants}
        custom={4}
      />
    </MotionBox>
  );

  // COMPONENT FOR INVESTMENT FUNNEL - Investment Ready
  const FunnelContent = () => (
    <MotionBox
      className={classes.funnelContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={`${classes.funnelStage} ${classes.funnelStage1}`}
        custom={0}
        variants={funnelStageVariants}
        style={{ transformOrigin: "center left" }}
      >
        <MonetizationOnIcon className={classes.funnelIcon} fontSize="small" />
        Business Plan
      </MotionBox>

      <MotionBox
        className={`${classes.funnelStage} ${classes.funnelStage2}`}
        custom={1}
        variants={funnelStageVariants}
        style={{ transformOrigin: "center left" }}
      >
        <AttachMoneyIcon className={classes.funnelIcon} fontSize="small" />
        Financial Modeling
      </MotionBox>

      <MotionBox
        className={`${classes.funnelStage} ${classes.funnelStage3}`}
        custom={2}
        variants={funnelStageVariants}
        style={{ transformOrigin: "center left" }}
      >
        <TimelineIcon className={classes.funnelIcon} fontSize="small" />
        Pitch Deck
      </MotionBox>

      <MotionBox
        className={`${classes.funnelStage} ${classes.funnelStage4}`}
        custom={3}
        variants={funnelStageVariants}
        style={{ transformOrigin: "center left" }}
      >
        <BusinessIcon className={classes.funnelIcon} fontSize="small" />
        Investor Meetings
      </MotionBox>
    </MotionBox>
  );

  // COMPONENT FOR FINANCIAL DASHBOARD - Financial Academy
  const DashboardContent = () => (
    <MotionBox
      className={classes.dashboardContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={classes.dashboardRow}
        custom={0}
        variants={dashboardRowVariants}
      >
        <Box className={classes.dashboardMetric}>
          Revenue Modeling
          <span className={classes.dashboardValue}>+45%</span>
        </Box>
      </MotionBox>

      <MotionBox
        className={classes.dashboardRow}
        custom={1}
        variants={dashboardRowVariants}
      >
        <Box className={classes.dashboardMetric}>
          Startup Finance
          <span className={classes.dashboardValue}>+68%</span>
        </Box>
      </MotionBox>

      <MotionBox className={classes.dashboardChart}>
        <MotionBox
          className={classes.chartBar}
          style={{ height: "40%", left: "10%" }}
          custom={0}
          variants={chartBarVariants}
          sx={{ transformOrigin: "bottom" }}
        />
        <MotionBox
          className={classes.chartBar}
          style={{ height: "60%", left: "25%" }}
          custom={1}
          variants={chartBarVariants}
          sx={{ transformOrigin: "bottom" }}
        />
        <MotionBox
          className={classes.chartBar}
          style={{ height: "35%", left: "40%" }}
          custom={2}
          variants={chartBarVariants}
          sx={{ transformOrigin: "bottom" }}
        />
        <MotionBox
          className={classes.chartBar}
          style={{ height: "80%", left: "55%" }}
          custom={3}
          variants={chartBarVariants}
          sx={{ transformOrigin: "bottom" }}
        />
        <MotionBox
          className={classes.chartBar}
          style={{ height: "55%", left: "70%" }}
          custom={4}
          variants={chartBarVariants}
          sx={{ transformOrigin: "bottom" }}
        />
        <MotionBox
          className={classes.chartBar}
          style={{ height: "65%", left: "85%" }}
          custom={5}
          variants={chartBarVariants}
          sx={{ transformOrigin: "bottom" }}
        />
      </MotionBox>
    </MotionBox>
  );

  // COMPONENT FOR YOUNG FOUNDERS - Young Founders Club
  const YoungFoundersContent = () => (
    <MotionBox
      className={classes.youngFoundersContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={classes.profileRow}
        custom={0}
        variants={profileRowVariants}
      >
        <Box className={classes.profileCircle}>
          <SchoolIcon fontSize="small" />
        </Box>
        <Box className={`${classes.profileCircle} ${classes.profileHighlight}`}>
          <CodeIcon fontSize="small" />
        </Box>
        <Box className={classes.profileCircle}>
          <TuneIcon fontSize="small" />
        </Box>
      </MotionBox>

      <MotionBox className={classes.pathwayLine}>
        <MotionBox
          className={classes.pathwayDot}
          style={{ left: "20%" }}
          custom={0}
          variants={pathwayDotVariants}
        />
        <MotionBox
          className={classes.pathwayDot}
          style={{ left: "40%" }}
          custom={1}
          variants={pathwayDotVariants}
        />
        <MotionBox
          className={classes.pathwayDot}
          style={{ left: "60%" }}
          custom={2}
          variants={pathwayDotVariants}
        />
        <MotionBox
          className={classes.pathwayDot}
          style={{ left: "80%" }}
          custom={3}
          variants={pathwayDotVariants}
        />
      </MotionBox>

      <MotionBox
        className={classes.profileRow}
        custom={1}
        variants={profileRowVariants}
      >
        <Box className={classes.profileCircle}>
          <CubeIcon fontSize="small" />
        </Box>
        <Box className={`${classes.profileCircle} ${classes.profileHighlight}`}>
          <BusinessIcon fontSize="small" />
        </Box>
        <Box className={classes.profileCircle}>
          <StorageIcon fontSize="small" />
        </Box>
      </MotionBox>
    </MotionBox>
  );

  // COMPONENT FOR INVESTMENT PORTFOLIO - Waha Ventures
  const PortfolioContent = () => (
    <MotionBox
      className={classes.portfolioContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox
        className={`${classes.portfolioItem} ${classes.portfolioItemHighlight}`}
        custom={0}
        variants={portfolioItemVariants}
      >
        <DonutLargeIcon className={classes.portfolioHighlightIcon} />
        <Typography className={classes.portfolioHighlightLabel}>
          Strategic Investments
        </Typography>
      </MotionBox>

      <MotionBox
        className={classes.portfolioItem}
        custom={1}
        variants={portfolioItemVariants}
      >
        <ApartmentIcon className={classes.portfolioIcon} />
        <Typography className={classes.portfolioLabel}>Real Estate</Typography>
      </MotionBox>

      <MotionBox
        className={classes.portfolioItem}
        custom={2}
        variants={portfolioItemVariants}
      >
        <BoltIcon className={classes.portfolioIcon} />
        <Typography className={classes.portfolioLabel}>Energy</Typography>
      </MotionBox>

      <MotionBox
        className={classes.portfolioItem}
        custom={3}
        variants={portfolioItemVariants}
      >
        <CloudIcon className={classes.portfolioIcon} />
        <Typography className={classes.portfolioLabel}>Cloud</Typography>
      </MotionBox>

      <MotionBox
        className={classes.portfolioItem}
        custom={4}
        variants={portfolioItemVariants}
      >
        <CodeIcon className={classes.portfolioIcon} />
        <Typography className={classes.portfolioLabel}>Tech</Typography>
      </MotionBox>

      <MotionBox
        className={classes.portfolioItem}
        custom={5}
        variants={portfolioItemVariants}
      >
        <SecurityIcon className={classes.portfolioIcon} />
        <Typography className={classes.portfolioLabel}>Innovation</Typography>
      </MotionBox>
    </MotionBox>
  );

  // COMPONENT FOR AWARD PODIUM - Recognition Platform
  const PodiumContent = () => (
    <MotionBox
      className={classes.podiumContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionBox className={classes.podiumStep}>
        <MotionBox
          className={`${classes.podiumStage} ${classes.podiumSecond}`}
          custom={1}
          variants={podiumStageVariants}
        >
          2
        </MotionBox>
      </MotionBox>

      <MotionBox className={classes.podiumStep}>
        <MotionBox className={classes.trophy} variants={trophyVariants}>
          <EmojiEventsIcon style={{ fontSize: "2rem" }} />
        </MotionBox>
        <MotionBox
          className={`${classes.podiumStage} ${classes.podiumFirst}`}
          custom={0}
          variants={podiumStageVariants}
        >
          1
        </MotionBox>
      </MotionBox>

      <MotionBox className={classes.podiumStep}>
        <MotionBox
          className={`${classes.podiumStage} ${classes.podiumThird}`}
          custom={2}
          variants={podiumStageVariants}
        >
          3
        </MotionBox>
      </MotionBox>
    </MotionBox>
  );

  // Function to render the appropriate content for each service card
  const renderServiceContent = (type) => {
    switch (type) {
      case "timeline":
        return <TimelineContent />;
      case "grid":
        return <GridContent />;
      case "network":
        return <NetworkContent />;
      case "funnel":
        return <FunnelContent />;
      case "dashboard":
        return <DashboardContent />;
      case "youngfounders":
        return <YoungFoundersContent />;
      case "portfolio":
        return <PortfolioContent />;
      case "podium":
        return <PodiumContent />;
      // Legacy types
      case "plan":
        return <TimelineContent />;
      case "code":
        return <GridContent />;
      case "automation":
        return <NetworkContent />;
      default:
        return null;
    }
  };

  return (
    <Box id="mission" ref={ref} className={classes.root}>
      <MotionTypography
        variant="h2"
        className={classes.sectionTitle}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Our Programs
      </MotionTypography>

      <MotionTypography
        variant="body1"
        className={classes.sectionDescription}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        From Young Founders Club to Waha Ventures strategic investments, we
        provide comprehensive support at every stage. Our Finance Academy and
        Matchmaking Platform connect you with the right investors, co-founders,
        and advisors.
      </MotionTypography>

      {/* Main Service Cards */}
      <Container
        maxWidth="lg"
        sx={{
          mb: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center" alignItems="center">
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
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MotionBox
                className={classes.mainServiceCard}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 10px 25px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(232, 120, 17, 0.1)",
                  transition: { duration: 0.3 },
                }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
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
    </Box>
  );
}

export default ServicesSection;
