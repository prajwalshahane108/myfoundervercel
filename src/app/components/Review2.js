// components/TeamSection.js
import React, { useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: {xs: "100vh", sm: "120vh", md: "100vh"},
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
  },
  sectionTag: {
    color: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "8px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "#DEDEDE",
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "20px",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  sectionTitleB: {
    color: "#AFAFAF",
    fontSize: "1.1rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",
    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  },
  teamContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "1200px",
    width: "100%",
  },
  teamMemberCard: {
    width: "100%",
    maxWidth: "270px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
    },
  },
  teamMemberImage: {
    width: "100%",
    height: "340px",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "20px",
    backgroundColor: "#222", // Placeholder background
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  teamMemberName: {
    color: "#FF5B23",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "5px",
    textAlign: "center",
  },
  teamMemberRole: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1rem",
    textAlign: "center",
  },
}));

function TeamSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.15),
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const teamMembers = [
    {
      name: "Diem",
      role: "Impact Venture Fund",
      image: "/firstb.png",
    },
    {
      name: "Gabrielle",
      role: "AI Consultant",
      image: "/secb.png",
    },
    {
      name: "Rajesh",
      role: "Web3 Consultant",
      image: "/threeb.png",
    },
    {
      name: "Mark",
      role: "Marketing",
      image: "/fourb.png",
    },
  ];

  return (
    <Box 
      ref={ref}
      className={classes.root}
    >
      <MotionTypography 
        variant="h2" 
        className={classes.sectionTitle}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Advisory Board
      </MotionTypography>

      <MotionTypography 
        variant="h2" 
        className={classes.sectionTitleB}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Meet our talented team turning ideas into exceptional results.
      </MotionTypography>

      <Box className={classes.teamContainer}>
        {teamMembers.map((member, index) => (
          <MotionBox 
            key={index} 
            className={classes.teamMemberCard}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            <MotionBox 
              className={classes.teamMemberImage}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.5 } 
              }}
            >
              <MotionBox
                component="img"
                src={member.image}
                alt={member.name}
                variants={imageVariants}
                initial="hidden"
                animate={controls}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/270x340?text=Team+Member";
                }}
              />
            </MotionBox>
            <MotionTypography 
              variant="h5" 
              className={classes.teamMemberName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (index * 0.15), duration: 0.5 }}
            >
              {member.name}
            </MotionTypography>
            <MotionTypography 
              variant="body1" 
              className={classes.teamMemberRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + (index * 0.15), duration: 0.5 }}
            >
              {member.role}
            </MotionTypography>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}

export default TeamSection;