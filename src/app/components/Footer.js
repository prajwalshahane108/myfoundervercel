// components/FooterSection.js
'use client';
import React, { useEffect } from "react";
import Image from "next/image";
import { Box, Typography, Button, Container, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/material/styles";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionLink = motion(Link);
const MotionContainer = motion(Container);

const useStyles = makeStyles(() => ({
  boot: {
    backgroundColor: "#000",
    width: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    position: "relative",
    overflow: "hidden",
  },
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.6) 1px, transparent 1.5px)",
    backgroundSize: "10px 10px",
    // minHeight: "100vh",
    minHeight: { xs: "100vh", sm: "120vh", md: "100vh" },
    width: "100%",
    maxWidth: "1240px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 20px",
    position: "relative",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    margin: "20px",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    maxWidth: "800px",
  },
  brandName: {
    color: "#E87811",
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: "20px",
  },
  title: {
    color: "white",
    fontWeight: "400",
    lineHeight: 1.2,
    marginBottom: "20px",
    // "@media (max-width: 768px)": {
    //   fontSize: "3rem",
    // },
    // "@media (max-width: 480px)": {
    //   fontSize: "2.5rem",
    // },
  },
  subtitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.1rem",
    marginBottom: "40px",
    maxWidth: "500px",
    lineHeight: 1.6,
  },
  callButton: {
    color: "#E87811",
    border: "1px solid #000",
    borderRadius: "50px",
    padding: "10px 24px",
    fontSize: "1.5rem",
    fontWeight: 400,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.92)",
    },
  },
  buttonIcon: {
    marginLeft: "8px",
    fontSize: "18px",
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "25px",
    flexWrap: "wrap",
  },
  navLink: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.3rem",
    fontWeight: 400,
    marginBottom: "30px",
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  copyright: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  heading1: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  responsiveImage: {
    maxWidth: "100%",
    height: "auto",
    width: "auto",
    maxHeight: "50px",
    "@media (max-width: 768px)": {
      maxWidth: "80%",
      maxHeight: "40px",
    },
    "@media (max-width: 480px)": {
      maxWidth: "100%",
      maxHeight: "35px",
    },
  },
}));
const Heading1 = styled(MotionBox)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
function FooterSection() {
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
        staggerChildren: 0.2,
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
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
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 158, 44, 0.1)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.7 + i * 0.05,
      },
    }),
    hover: {
      color: "white",
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const navLinks = [
    { name: "Why Us", id: "whyus" },
    { name: "Our Programs", id: "mission" },
    { name: "Members", id: "Members" },
    { name: "Global Impact", id: "services" },
    { name: "FAQ", id: "contact" },
  ];

  return (
    <Box className={classes.boot}>
      <MotionBox
        className={classes.root}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <MotionContainer
          className={classes.container}
          variants={containerVariants}
        >
          <MotionBox
            sx={{ mb: 7, mt: 1 }}
            className={classes.heading1}
            variants={logoVariants}
          >
            <Heading1 sx={{ mt: 3 }} variants={logoVariants}>
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
                  fontSize: "1.4rem",
                  marginRight: "auto",
                }}
              >
                MyFounders.Club
              </Typography>
            </Heading1>
          </MotionBox>

          <MotionTypography
            sx={{
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "4rem" },
            }}
            variant="h1"
            className={classes.title}
            variants={titleVariants}
          >
            {/* Building the Future */}
            Let's Build Legacies
            <br />
            Across Borders
          </MotionTypography>

          <MotionTypography
            variant="body1"
            className={classes.subtitle}
            variants={itemVariants}
          >
            {/* Join ambitious founders, partners, and investors to break new
            ground, expand into emerging markets, and build game-changing
            ventures across borders in Saudi Arabia. */}
            We bring your global vision to life with strategic connections and
            local expertise. Let's make it happen.
          </MotionTypography>

          <MotionButton
            // variant="outlined"
            href="/pages/NewJoin"
            sx={{
              marginBottom: { xs: "25px", sm: "40px", md: "80px" },
              background: "linear-gradient(90deg, #E87811 0%, white 200%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
                fontSize: "1.4rem",
            }}
            className={classes.callButton}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableRipple
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Schedule a Call
          </MotionButton>
          
          <MotionBox
            className={classes.navigation}
            variants={containerVariants}
          >
            {navLinks.map((link, index) => (
              <MotionLink
                key={index}
                href={`#${link.id}`}
                className={classes.navLink}
                underline="none"
                custom={index}
                variants={linkVariants}
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {link.name}
              </MotionLink>
            ))}
          </MotionBox>

          <MotionTypography
            variant="body2"
            className={classes.copyright}
            variants={copyrightVariants}
          >
            Copyright MyFoundersClub. Kingdom of Saudi Arabia, 2025. All right
            reserved.
          </MotionTypography>
        </MotionContainer>
      </MotionBox>
    </Box>
  );
}

export default FooterSection;
