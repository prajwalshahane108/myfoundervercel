// components/WorksSection.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionContainer = motion(Container);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    "@media (max-width: 900px)": {
      padding: "50px 15px",
    },
    "@media (max-width: 600px)": {
      padding: "40px 12px",
    },
  },
  sectionTag: {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "5px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
    "@media (max-width: 768px)": {
      padding: "4px 16px",
      fontSize: "13px",
      marginBottom: "25px",
    },
    "@media (max-width: 480px)": {
      padding: "4px 14px",
      fontSize: "12px",
      marginBottom: "20px",
    },
  },
  sectionTitle: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "60px",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
      marginBottom: "50px",
    },
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
      marginBottom: "40px",
    },
    "@media (max-width: 480px)": {
      fontSize: "2rem",
      marginBottom: "30px",
    },
  },
  contentContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    gap: "40px",
    marginBottom: "80px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      gap: "30px",
      marginBottom: "60px",
    },
    "@media (max-width: 600px)": {
      gap: "25px",
      marginBottom: "40px",
    },
  },
  leftPanel: {
    width: "45%",
    "@media (max-width: 960px)": {
      width: "100%",
      order: 2, // Move work items below the image on mobile
    },
  },
  rightPanel: {
    width: "55%",
    "@media (max-width: 960px)": {
      width: "100%",
      order: 1, // Show image first on mobile
    },
  },
  workItem: {
    padding: "30px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    cursor: "pointer",
    position: "relative",
    transition: "background-color 0.3s ease",
    paddingLeft: "20px", // Add padding to accommodate the border
    "&:first-child": {
      paddingTop: 0,
    },
    "&:last-child": {
      borderBottom: "none",
    },
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.03)",
    },
    "@media (max-width: 768px)": {
      padding: "25px 0 25px 20px",
    },
    "@media (max-width: 480px)": {
      padding: "20px 0 20px 15px",
    },
  },
  selectedWorkItem: {
    borderLeft: "0.5px solid #E87811",
    backgroundColor: "rgba(232, 120, 17, 0.05)",
  },
  workItemBorder: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "1px",
  },
  companyName: {
    color: "white",
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: "10px",
    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginBottom: "8px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.4rem",
      marginBottom: "6px",
    },
  },
  companyDescription: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    lineHeight: 1.6,
    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
      lineHeight: 1.5,
    },
  },
  caseResult: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.1rem",
    fontWeight: "500",
    "@media (max-width: 480px)": {
      fontSize: "1rem",
    },
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
    padding: "20px",
    "@media (max-width: 600px)": {
      padding: "15px",
      borderRadius: "15px",
    },
  },
  innerImageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    "@media (max-width: 600px)": {
      borderRadius: "12px",
    },
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "fit",
    display: "block",
    "@media (max-width: 960px)": {
      height: "350px",
    },
    "@media (max-width: 600px)": {
      height: "300px",
    },
    "@media (max-width: 480px)": {
      height: "250px",
    },
  },
  logoOverlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    "@media (max-width: 600px)": {
      bottom: "15px",
      left: "15px",
    },
  },
  graphoLogo: {
    width: "32px",
    height: "32px",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 480px)": {
      width: "28px",
      height: "28px",
    },
  },
  graphoText: {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: "500",
    "@media (max-width: 480px)": {
      fontSize: "1rem",
    },
  },
  statsBar: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    display: "flex",
    alignItems: "flex-end",
    gap: "15px",
    height: "80px",
    "@media (max-width: 768px)": {
      height: "70px",
      gap: "10px",
      right: "15px",
      bottom: "15px",
    },
    "@media (max-width: 480px)": {
      height: "60px",
      gap: "8px",
    },
  },
  barItem: {
    width: "30px",
    backgroundColor: "#666",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    "@media (max-width: 768px)": {
      width: "25px",
    },
    "@media (max-width: 480px)": {
      width: "18px",
    },
  },
  barHighlight: {
    backgroundColor: "#E87811",
  },
  percentLabel: {
    position: "absolute",
    top: "30px",
    right: "30px",
    backgroundColor: "#E87811",
    color: "white",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    "@media (max-width: 600px)": {
      top: "20px",
      right: "20px",
      padding: "4px 8px",
      fontSize: "0.8rem",
    },
  },
  statsContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    paddingTop: "40px",
    flexWrap: "wrap",
    "@media (max-width: 768px)": {
      paddingTop: "30px",
    },
    "@media (max-width: 600px)": {
      paddingTop: "25px",
    },
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    flex: 1,
    padding: "0 20px",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    "&:last-child": {
      borderRight: "none",
    },
    "@media (max-width: 768px)": {
      padding: "0 15px",
      minWidth: "150px",
      marginBottom: "25px",
    },
    "@media (max-width: 600px)": {
      minWidth: "calc(50% - 30px)",
      borderRight: "none",
      padding: "0 10px",
      "&:nth-child(odd)": {
        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
      },
      "&:nth-child(3), &:nth-child(4)": {
        marginBottom: 0,
      },
    },
  },
  statValue: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "400",
    marginBottom: "10px",
    "@media (max-width: 900px)": {
      fontSize: "3rem",
    },
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
      marginBottom: "8px",
    },
    "@media (max-width: 480px)": {
      fontSize: "2.2rem",
      marginBottom: "5px",
    },
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
    },
  },
}));

function WorksSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // State for selected work item
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const workItems = [
    {
      name: "Saudi Arabia",
      descriptionItems: ["$1.1B in startup funding in 2023 (63% YoY growth). 100% foreign ownership allowed in most sectors.",],
      image: "/grapho.png",
      percentage: 80,
      logo: "grapho",
    },
    {
      name: "GCC Region",
      descriptionItems: ["65% of MENA's unicorns now Saudi-born. Direct access to Vision 2030 initiatives."],
      image: "/ops.png",
      percentage: 60,
      logo: "vectraops",
    },
    {
      name: "Global Hubs",
      descriptionItems:[ "Active chapters across UK, US, Japan, China, Singapore, Germany, and more."],
      image: "/signum.png",
      percentage: 70,
      logo: "signum",
    },
  ];

  const stats = [
    { value: `500+`, label: "VCs and Angels" },
    { value: "4.9", label: "Rating out of 5" },
    { value: "20+", label: "Global Chapters" },
    { value: "100+", label: "Successful Partnerships" },
  ];

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

  const imageVariants = {
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

  const workItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const barVariants = {
    hidden: { height: 0 },
    visible: (height) => ({
      height: `${height}%`,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const selectedBorderVariants = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: "100%",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const imageTransitionVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Counter animation for statistics
  const Counter = ({ value, className }) => {
    // If value contains '+', separate it
    const hasPlus = value.includes("+", "+");
    const numericValue = hasPlus
      ? parseFloat(value.replace("+", ""))
      : parseFloat(value);
    const suffix = hasPlus ? "+" : "";

    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = numericValue / (duration / 16); // 60fps
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setCount(numericValue);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [inView, numericValue]);

    return (
      <MotionTypography
        variant="h3"
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {typeof count === "number" && count % 1 !== 0
          ? count.toFixed(1)
          : Math.floor(count)}
        {suffix}
      </MotionTypography>
    );
  };

  // Logo components - replace with actual SVGs or images
  const GraphoLogo = () => (
    <Box className={classes.graphoLogo}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
          fill="transparent"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M8 14C8 10.686 10.686 8 14 8C17.314 8 20 10.686 20 14C20 17.314 17.314 20 14 20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );

  const VectraOpsLogo = () => (
    <Box className={classes.graphoLogo}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="4"
          width="20"
          height="20"
          rx="2"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M10 14L13 17L18 10"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );

  const SignumLogo = () => (
    <Box className={classes.graphoLogo}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 4L4 14L14 24L24 14L14 4Z" stroke="white" strokeWidth="3" />
        <circle cx="14" cy="14" r="3" fill="white" />
      </svg>
    </Box>
  );

  // Get logo based on company name
  const getLogo = (logoName) => {
    switch (logoName) {
      case "grapho":
        return <GraphoLogo />;
      case "vectraops":
        return <VectraOpsLogo />;
      case "signum":
        return <SignumLogo />;
      default:
        return <GraphoLogo />;
    }
  };

  return (
    <Box  className={classes.root} ref={ref} id="grapho">
      <Container
      id="services"
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MotionTypography
          variant="body1"
          className={classes.sectionTag}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
         Markets That Make Us Proud
        </MotionTypography>

        <MotionTypography
          variant="h2"
          className={classes.sectionTitle}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
         Regional Strengths, Global Impact
        </MotionTypography>

        <Box className={classes.contentContainer}>
          <MotionBox
            className={classes.leftPanel}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {workItems.map((item, index) => (
              <MotionBox
                key={index}
                className={`${classes.workItem} ${
                  selectedIndex === index ? classes.selectedWorkItem : ""
                }`}
                custom={index}
                variants={workItemVariants}
                initial="hidden"
                animate={controls}
                onClick={() => setSelectedIndex(index)}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  transition: { duration: 0.2 },
                }}
              >
                {selectedIndex === index && (
                  <MotionBox
                    className={classes.workItemBorder}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={selectedBorderVariants}
                    style={{ backgroundColor: "#E87811" }}
                  />
                )}
                <MotionTypography
                  variant="h4"
                  className={classes.companyName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {item.name}
                </MotionTypography>

                {item.descriptionItems && (
                  <MotionBox
                    component="ul"
                    sx={{
                      paddingLeft: "20px",
                      margin: "8px 0",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + 0.1 * index, duration: 0.5 }}
                  >
                    {item.descriptionItems.map((desc, descIndex) => (
                      <MotionBox
                        component="li"
                        key={descIndex}
                        className={classes.companyDescription}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.2 + 0.1 * index + 0.05 * descIndex,
                          duration: 0.5,
                        }}
                      >
                        {desc}
                      </MotionBox>
                    ))}
                  </MotionBox>
                )}

                {item.result && (
                  <MotionTypography
                    variant="body2"
                    className={classes.caseResult}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + 0.1 * index, duration: 0.5 }}
                  >
                    {item.result}
                  </MotionTypography>
                )}
              </MotionBox>
            ))}
          </MotionBox>

          <MotionBox
            className={classes.rightPanel}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            <MotionBox
              className={classes.imageContainer}
              whileHover={{ boxShadow: "0px 0px 20px rgba(232, 120, 17, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <Box className={classes.innerImageContainer}>
                <AnimatePresence mode="wait">
                  <MotionBox
                    key={`image-${selectedIndex}`}
                    component="img"
                    src={workItems[selectedIndex].image} // Image based on selection
                    alt={workItems[selectedIndex].name}
                    className={classes.projectImage}
                    sx={{
                      filter: "brightness(0.8)",
                      backgroundColor: "#222",
                      height: isMobile ? "250px" : isTablet ? "350px" : "400px",
                    }}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={imageTransitionVariants}
                  />
                </AnimatePresence>

                <MotionBox
                  className={classes.statsBar}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                ></MotionBox>

                <AnimatePresence mode="wait">
                  {/* Logo overlay section - commented out in original */}
                  <MotionBox
                    key={`logo-${selectedIndex}`}
                    className={classes.logoOverlay}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <Typography className={classes.graphoText}></Typography>
                  </MotionBox>
                </AnimatePresence>
              </Box>
            </MotionBox>
          </MotionBox>
        </Box>

        <MotionBox
          className={classes.statsContainer}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <MotionBox
              key={index}
              className={classes.statItem}
              custom={index}
              variants={statItemVariants}
            >
              <Counter
                key={index}
                value={String(stat.value)}
                className={classes.statValue}
              />

              <MotionTypography
                variant="body2"
                className={classes.statLabel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.5 }}
              >
                {stat.label}
              </MotionTypography>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
}

export default WorksSection;
