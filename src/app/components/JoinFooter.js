"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Box, Typography, Button, Container, Link, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionLink = motion(Link);
const MotionContainer = motion(Container);

// Replace makeStyles with styled components
const BootBox = styled(Box)({
  backgroundColor: "#000",
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "60px 20px",
  position: "relative",
  overflow: "hidden",
});

const RootBox = styled(MotionBox)({
  backgroundColor: "black",
  backgroundImage:
    "radial-gradient(circle, rgba(75, 75, 75, 0.6) 1px, transparent 1.5px)",
  backgroundSize: "10px 10px",
  minHeight: "100vh",
  width: "1240px",
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
});

const StyledContainer = styled(MotionContainer)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  maxWidth: "800px",
});

const BrandName = styled(MotionTypography)({
  color: "#E87811",
  fontSize: "1.2rem",
  fontWeight: "500",
  marginBottom: "20px",
});

const Title = styled(MotionTypography)(({ theme }) => ({
  color: "white",
  fontSize: "4rem",
  fontWeight: "400",
  lineHeight: 1.2,
  marginBottom: "20px",
  marginTop: "40px",
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const Subtitle = styled(MotionTypography)({
  color: "#919191",
  fontSize: "1.2rem",
  // marginBottom: "40px",
  maxWidth: "600px",
  lineHeight: 1.6,
});

const CallButton = styled(MotionButton)({
  // color: "#E87811",
  background: "linear-gradient(90deg, #E87811 0%, white 300%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  border: "1px solid #000",
  borderRadius: "50px",
  padding: "10px 24px",
  fontWeight: "400",
  fontSize: "1.5rem",
  textTransform: "none",
  marginTop: "12px",
  "&:hover": {
    backgroundColor: "rgba(255, 158, 44, 0.1)",
  },
});

const ButtonIcon = styled(ArrowOutwardIcon)({
  color: "#E87811",
  marginLeft: "8px",
  fontSize: "18px",
});

const Navigation = styled(MotionBox)({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  marginBottom: "55px",
  flexWrap: "wrap",
});

const NavLink = styled(MotionLink)({
  color: "#919191",
  fontSize: "1.3rem",
  fontWeight: "400",
  textDecoration: "none",
  "&:hover": {
    color: "white",
  },
});

const Copyright = styled(MotionTypography)({
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: "1.2rem",
  marginTop: "80px",
});

const Heading1 = styled(MotionBox)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function FooterSection() {
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
    { name: "Why Us" },
    { name: "Mission" },
    { name: "Works" },
    { name: "Services" },
    { name: "Contact" },
  ];

  return (
    <BootBox>
      <RootBox
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <StyledContainer variants={containerVariants}>
          <Heading1 sx={{ mb: 3, mt: 5 }} variants={logoVariants}>
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

          <Title variants={titleVariants}>
          Let's Build Legacies
            <br />
            Across Borders
          </Title>

          <Subtitle
            sx={{
              fontSize: "1.3rem",
              mt: 2,
            }}
            variant="body1"
            variants={itemVariants}
          >
          We bring your global vision to life with strategic connections and
          local expertise. Let's make it happen.
          </Subtitle>

          {/* <CallButton
          sx={{marginBottom: {
            xs: "30px",
            sm: "50px",
            md : "90px",},
            background: "linear-gradient(90deg, #E87811 0%, white 200%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 400,
            fontSize: "1.4rem",
          }}
            variant="outlined"
            endIcon={<ButtonIcon />}
            disableRipple
            variants={buttonVariants}
            whileTap="tap"
          >
          Schedule a Call
          </CallButton> */}
          {/* <Navigation variants={containerVariants}>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                // href={link.href}
                underline="none"
                custom={index}
                variants={linkVariants}
                whileHover="hover"
              >
                {link.name}
              </NavLink>
            ))}
          </Navigation> */}

          <Copyright variant="body2" variants={copyrightVariants}>
          Copyright MyFoundersClub. Kingdom of Saudi Arabia, 2025. All right
          reserved.
          </Copyright>
        </StyledContainer>
      </RootBox>
    </BootBox>
  );
}

export default FooterSection;
