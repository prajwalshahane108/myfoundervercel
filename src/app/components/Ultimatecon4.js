// components/WorksSection.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion } from "framer-motion";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#050505",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 20px",
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
    padding: "40px 0 0 0",
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
    padding: "20px 0",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    position: "relative",
    paddingLeft: "20px", // Add padding to accommodate the border
    borderLeft: "0.5px solid #E87811", // Added border-left with #E87811 color to all items
    "&:first-child": {
      paddingTop: 0,
    },
    "&:last-child": {
      borderBottom: "none",
    },
    "@media (max-width: 768px)": {
      padding: "25px 0 25px 20px",
    },
    "@media (max-width: 480px)": {
      padding: "20px 0 20px 15px",
    },
  },
  workItemBorder: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "1px",
    backgroundColor: "#E87811",
    height: "100%",
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

  // Fixed work items - no dynamic selection
  const workItems = [
    {
      name: "Global Innovation Hub",
      descriptionItems: ["A movement powered by vision and opportunity"],
      image: "/pira.png",
      logo: "grapho",
    },
    {
      name: "Strategic Gateway",
      descriptionItems: ["Access to 2+ billion consumers"],
      image: "/pira.png",
      logo: "vectraops",
    },
    {
      name: "Massive Investment",
      descriptionItems: ["$1.1B in government-backed venture funding"],
      image: "/pira.png",
      logo: "vectraops",
    },
    {
      name: "Digital-First Economy",
      descriptionItems: ["99% internet penetration"],
      image: "/pira.png",
      logo: "signum",
    },
    {
      name: "Youth-Driven Growth",
      descriptionItems: ["70% under 35 years old"],
      image: "/pira.png",
      logo: "signum",
    },
  ];

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

  return (
    <Box className={classes.root} id="grapho">
      <Container
        id="services"
        maxWidth="lg"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <MotionTypography
          variant="h2"
          className={classes.sectionTitle}
        >
          Why Saudi Arabia?
        </MotionTypography>

        <Box className={classes.contentContainer}>
          <Box className={classes.leftPanel}>
            {workItems.map((item, index) => (
              <Box
                key={index}
                className={classes.workItem}
              >
                <Box
                  className={classes.workItemBorder}
                />
                <Typography
                  variant="h4"
                  className={classes.companyName}
                >
                  {item.name}
                </Typography>

                {item.descriptionItems && (
                  <Box
                    component="ul"
                    sx={{
                      paddingLeft: "20px",
                      margin: "8px 0",
                    }}
                  >
                    {item.descriptionItems.map((desc, descIndex) => (
                      <Box
                        component="li"
                        key={descIndex}
                        className={classes.companyDescription}
                      >
                        {desc}
                      </Box>
                    ))}
                  </Box>
                )}

                {item.result && (
                  <Typography
                    variant="body2"
                    className={classes.caseResult}
                  >
                    {item.result}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

          <Box className={classes.rightPanel}>
            <Box className={classes.imageContainer}>
              <Box className={classes.innerImageContainer}>
                <Box
                  component="img"
                  src="/pira.png" // Fixed image for non-dynamic display
                  alt="Saudi Arabia Visual"
                  className={classes.projectImage}
                  sx={{
                    filter: "brightness(0.8)",
                    backgroundColor: "#050505",
                    height: isMobile ? "250px" : isTablet ? "350px" : "400px",
                  }}
                />

                <Box className={classes.statsBar}></Box>

                <Box className={classes.logoOverlay}>
                  <Typography className={classes.graphoText}></Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default WorksSection;