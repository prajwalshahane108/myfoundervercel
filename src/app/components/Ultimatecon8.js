// components/TeamSection.js
import React, { useEffect } from "react";
import { Box, Typography, Grid, Container, useMediaQuery, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionContainer = motion(Container);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#050505",
    minHeight: {xs: "100vh", sm: "120vh", md: "100vh"},
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    '@media (max-width: 960px)': {
      padding: "50px 15px",
    },
    '@media (max-width: 600px)': {
      padding: "40px 15px",
    },
  },
  contentContainer: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTag: {
    color: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    border: "1.5px solid rgba(255, 255, 255, 0.77)",
    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
    '@media (max-width: 768px)': {
      fontSize: "13px",
      padding: "4px 16px",
      marginBottom: "25px",
    },
    '@media (max-width: 480px)': {
      fontSize: "12px",
      padding: "3px 14px",
      marginBottom: "20px",
    },
  },
  sectionTitle: {
    color: "#DEDEDE",
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "90px",
    '@media (max-width: 960px)': {
      fontSize: "2.6rem",
      marginBottom: "70px",
    },
    '@media (max-width: 768px)': {
      fontSize: "2.2rem",
      marginBottom: "50px",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.8rem",
      marginBottom: "40px",
      lineHeight: 1.3,
    },
  },
  sectionTitleB: {
    color: "#AFAFAF",
    fontSize: "1.1rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "30px",
    maxWidth: "800px",
    '@media (max-width: 768px)': {
      fontSize: "1rem",
      marginBottom: "25px",
    },
    '@media (max-width: 480px)': {
      fontSize: "0.95rem",
      marginBottom: "20px",
    },
  },
  teamContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    width: "100%",
    '@media (max-width: 960px)': {
      gap: "25px",
    },
    '@media (max-width: 480px)': {
      gap: "35px",
    },
  },
  teamMemberCard: {
    width: "calc(25% - 30px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '@media (max-width: 1100px)': {
      width: "calc(33.33% - 25px)",
    },
    '@media (max-width: 860px)': {
      width: "calc(50% - 15px)",
    },
    '@media (max-width: 480px)': {
      width: "100%",
      maxWidth: "320px",
    },
  },
  teamMemberImage: {
    width: "100%",
    height: "340px",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "20px",
    backgroundColor: "#222", // Placeholder background
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    '@media (max-width: 960px)': {
      height: "320px",
      marginBottom: "15px",
    },
    '@media (max-width: 768px)': {
      height: "300px",
    },
    '@media (max-width: 480px)': {
      height: "350px",
      borderRadius: "12px",
    },
  },
  teamMemberName: {
    color: "#FF5B23",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "5px",
    textAlign: "center",
    '@media (max-width: 768px)': {
      fontSize: "1.1rem",
    },
    '@media (max-width: 480px)': {
      fontSize: "1.15rem",
    },
  },
  teamMemberRole: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1rem",
    textAlign: "center",
    '@media (max-width: 768px)': {
      fontSize: "0.95rem",
    },
    '@media (max-width: 480px)': {
      fontSize: "0.9rem",
    },
  },
}));

function TeamSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLargeTablet = useMediaQuery('(max-width:1100px)');
  
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

  const memberCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.15),
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const teamMembers = [
    {
      name: "Haya Al Aoudah",
      role: "Fintech and payments specialist with extensive business development expertise across Saudi innovation sectors.",
      image: "https://framerusercontent.com/images/ECp9gdFuk3dUagZzDSRN8LTpBdw.jpeg",
    },
    {
      name: "Katerina Hayes",
      role: "Strategic investment expert connecting UK-Saudi tech ecosystems. Specialises in Vision 2030 alignment and cultural intelligence.",
      image: "https://framerusercontent.com/images/sEqN2EnA26uT8C0qz2LeO6RQI.png",
    },
    {
      name: "Manish Balakrishnan",
      role: "AI implementation specialist helping startups launch in Global markets. Expert in equity-plus funding models.",
      image: "https://framerusercontent.com/images/2gN8IoNAOZFMzwH3PrivG3JS4A.jpg",
    },
    {
      name: "Ahmed Yusuf",
      role: "Director of Young Founders Club with extensive experience nurturing early-stage entrepreneurs.",
      image: "/fourb.png",
    },
  ];

  return (
    <Box 
      ref={ref}
      className={classes.root}
    >
      <Container 
        maxWidth="lg" 
        className={classes.contentContainer}
      >
        {/* <MotionTypography 
          variant="body1" 
          className={classes.sectionTag}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
        Our Global Network  
        </MotionTypography> */}

        <MotionTypography 
          variant="h2" 
          className={classes.sectionTitle}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          Founders & Partners
        </MotionTypography>

        <Box className={classes.teamContainer}>
          {teamMembers.map((member, index) => (
            <MotionBox 
              key={index} 
              className={classes.teamMemberCard}
              custom={index}
              variants={memberCardVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <MotionBox 
                className={classes.teamMemberImage}
                whileHover="hover"
              >
                <MotionBox
                  component="img"
                  src={member.image}
                  alt={member.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/270x340?text=Team+Member";
                  }}
                  variants={imageHoverVariants}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.4 + (index * 0.15),
                    ease: "easeOut" 
                  }}
                />
              </MotionBox>
              <MotionTypography 
                variant="h5" 
                className={classes.teamMemberName}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.15),
                  ease: "easeOut" 
                }}
              >
                {member.name}
              </MotionTypography>
              <MotionTypography 
                variant="body1" 
                className={classes.teamMemberRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7 + (index * 0.15),
                  ease: "easeOut" 
                }}
              >
                {member.role}
              </MotionTypography>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default TeamSection;