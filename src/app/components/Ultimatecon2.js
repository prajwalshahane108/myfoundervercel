// components/BenefitsSection.js
import React, { useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import ComputerIcon from '@mui/icons-material/Computer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#050505",
    backgroundSize: "20px 20px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px 10px 20px",
  },
  sectionTag: {
    color: "white",
    backgroundColor: "rgb(0, 0, 0)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "5px 20px",
    fontSize: "14px",
    marginBottom: "40px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "white",
    fontSize: {
      xs: "1rem",
      sm: "2rem",
      md: "3.5rem",
    },
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "10px",
    lineHeight: 1.2,
    maxWidth: "800px",
    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  },
  sectionSubtitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "50px",
    marginTop: {
      xs: "20px",
      sm: "30px",
      md: "30px",
    },
    maxWidth: "600px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "50px",
    width: "100%",
    maxWidth: "1200px",
  },
  card: {
    backgroundColor: "#111111",
    borderRadius: "20px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "350px",
    height: "400px",
    position: "relative",
    overflow: "hidden",
  },
  cardInner: {
    backgroundColor: "#0A0A0A",
    borderRadius: "16px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "20px", // Decreased height
    flex: 1,
    marginBottom: "20px",
    overflow: "hidden",
    backgroundImage:
      "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  },
  iconContainer: {
    backgroundColor: "#E87811",
    borderRadius: "50%",
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px",
  },
  icon: {
    color: "white",
    fontSize: "2rem",
  },
  cardTitle: {
    color: "white",
    fontSize: "1.4rem",
    fontWeight: "600",
    marginBottom: "16px",
    textAlign: "center",
  },
  cardDescription: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1rem",
    lineHeight: 1.6,
    textAlign: "center",
    padding: "0 10px",
  },
  pricingButton: {
    backgroundColor: "#E87811",
    color: "white",
    borderRadius: "10px",
    padding: "12px 28px",
    fontSize: "1rem",
    fontWeight: "500",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#E08E25",
    },
  },
  buttonIcon: {
    marginLeft: "15px",
    marginTop: "2px",
    fontSize: "20px",
  },
}));

function BenefitsSection() {
  const classes = useStyles();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
    triggerOnce: true, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const benefits = [
    {
      title: "Join a Global Community",
      description:
        "Connect with ethical business builders who share knowledge, open doors, and grow together.",
      icon: <GroupsIcon className={classes.icon} />,
    },
    {
      title: "Strategic Investor Matching",
      description:
        "Find investors who share your vision and provide more than just capital. Build meaningful connections.",
      icon: <AttachMoneyIcon className={classes.icon} />,
    },
    {
      title: "Growth Acceleration",
      description:
        "Access advisory boards, fractional C-suite talent, and tailored resources to scale effectively.",
      icon:
      //  <PublicIcon className={classes.icon}
       <TrendingUpIcon className={classes.icon}
        />,
    },
    {
      title: "Assemble Your Dream Team",
      description:
        "Discover co-founders and advisors with the skills and experience your startup needs.",
      icon: <Diversity2Icon className={classes.icon} />,
    },
    {
      title: "Global Recognition",
      description:
        "Showcase your innovation through virtual pitch events, demo days, and prestigious awards.",
      icon: <TravelExploreIcon className={classes.icon} />,
    },
  ];

  return (
    <MotionBox
      id="whyus"
      ref={ref}
      className={classes.root}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <MotionTypography
        variant="body1"
        className={classes.sectionTag}
        variants={tagVariants}
      >
        Why Us
      </MotionTypography>

      <MotionTypography
        variant="h2"
        className={classes.sectionTitle}
        variants={titleVariants}
      >
        Experience the Benefits of
        <br />
        Our Global Network
      </MotionTypography>

      <MotionTypography
        variant="body1"
        className={classes.sectionSubtitle}
        variants={subtitleVariants}
      >
        We connect founders with the resources they need to build world-class businesses.
      </MotionTypography>

      <MotionBox className={classes.cardContainer} variants={containerVariants}>
        {benefits.map((benefit, index) => (
          <MotionBox
            key={index}
            className={classes.card}
            variants={cardVariants}
            custom={index}
          >
            <Box className={classes.cardInner}>
              <MotionBox
                className={classes.iconContainer}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {benefit.icon}
              </MotionBox>
            </Box>
            <MotionTypography
              variant="h5"
              className={classes.cardTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
            >
              {benefit.title}
            </MotionTypography>
            <MotionTypography
              variant="body2"
              className={classes.cardDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
            >
              {benefit.description}
            </MotionTypography>
          </MotionBox>
        ))}
      </MotionBox>
    </MotionBox>
  );
}

export default BenefitsSection;