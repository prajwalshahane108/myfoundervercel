// pages/founders-advantage.js
import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled components - using function approach to avoid the read-only error
const AdvantageBox = styled(Box)(({ delay = 0 }) => {
  return {
    border: "1px solid #E87811",
    borderRadius: "8px",
    padding: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    marginBottom: "16px",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 5px 15px rgba(232, 120, 17, 0.2)",
      "& .number-box": {
        backgroundColor: "#E87811",
        color: "#000000",
      },
      "& .advantage-title": {
        color: "#E87811",
      },
    },
    animation: "fadeIn 0.5s ease forwards",
    animationDelay: `${delay * 0.1}s`,
    opacity: 0,
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
        transform: "translateY(20px)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  };
});

const NumberBox = styled(Box)({
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  border: "1px solid #E87811",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#FFFFFF",
  backgroundColor: "transparent",
  transition: "all 0.3s ease",
  flexShrink: 0,
});

const FoundersAdvantage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Custom theme values
  const customTheme = {
    bgcolor: "black",
    highlightedText: "#E87811",
    text: "#FFFFFF",
    secondaryText: "#808080",
    accentColor: "#E87811",
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: "#050505",
      color: customTheme.text,
      // minHeight: { xs: 'auto',sm: '50vh', md: '100vh' },
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: { xs: "40px 16px", sm: "40px 24px", md: "100px 40px" },
    },
    container: {
      position: "relative",
      maxWidth: "1000px",
      width: "100%",
    },
    title: {
      fontSize: { xs: "24px", sm: "28px", md: "36px" },
      fontWeight: 700,
      marginBottom: { xs: "30px", sm: "40px", md: "50px" },
      textAlign: "left",
      position: "relative",
      width: "100%",
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-12px",
        left: "0",
        width: { xs: "40px", sm: "50px", md: "60px" },
        height: { xs: "2px", md: "3px" },
        backgroundColor: customTheme.accentColor,
      },
    },
    advantagesContainer: {
      display: "flex",
      flexDirection: "column",
      gap: { xs: "12px", sm: "14px", md: "16px" },
    },
    advantageTitle: {
      fontSize: { xs: "15px", sm: "16px", md: "18px" },
      fontWeight: 600,
      marginBottom: { xs: "4px", sm: "6px", md: "8px" },
      color: customTheme.text,
      lineHeight: 1.3,
    },
    advantageDescription: {
      fontSize: { xs: "13px", sm: "14px", md: "15px" },
      color: customTheme.secondaryText,
      lineHeight: 1.5,
    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
    },
    numberBox: {
      // Additional styles for the NumberBox to make it responsive
      [theme.breakpoints.down("sm")]: {
        width: "36px",
        height: "36px",
        fontSize: "18px",
      },
    },
    mobileContentBox: {
      // Mobile specific styling
      [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      },
    },
    mobileAdvantageBox: {
      // Mobile specific styling
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        padding: "12px",
        gap: "12px",
      },
    },
    // Starry background
    starBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        "radial-gradient(circle at center, rgba(232, 120, 17, 0.05) 0%, transparent 70%)",
      zIndex: -1,
    },
  };

  // Generate staggered widths for different screen sizes
  const generateStaggeredWidths = (index, total) => {
    const mobileWidth = "100%";
    const tabletBaseWidth = 70; // Starting percentage for tablets
    const tabletIncrement = 7; // Percentage increase per item for tablets
    const desktopBaseWidth = 60; // Starting percentage for desktop
    const desktopIncrement = 10; // Percentage increase per item for desktop

    return {
      xs: mobileWidth,
      sm: `${tabletBaseWidth + index * tabletIncrement}%`,
      md: `${desktopBaseWidth + index * desktopIncrement}%`,
    };
  };

  // Advantage data
  const advantages = [
    {
      number: 1,
      title: "Complete Ecosystem Support",
      description:
        "Tools, connections, and resources for every stage of your startup journey",
    },
    {
      number: 2,
      title: "Ethical Entrepreneurship",
      description:
        "We champion businesses that create real value through positive impact",
    },
    {
      number: 3,
      title: "Global Reach, Local Impact",
      description:
        "Leverage international expertise to build solutions for Saudi and regional markets",
    },
    {
      number: 4,
      title: "Community-Driven Success",
      description:
        "Experience the power of a supportive network that celebrates growth, not just wins",
    },
    {
      number: 5,
      title: "Vision 2030 Alignment",
      description: `Build businesses that directly contribute to Saudi Arabia's economic diversification`,
    },
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.starBackground} />
      <Container disableGutters maxWidth={false} sx={styles.container}>
        <Box sx={styles.advantagesContainer}>
          <Typography variant="h1" sx={styles.title}>
            The MyFounders.Club Advantage
          </Typography>
          {advantages.map((advantage, index) => (
            <AdvantageBox
              key={index}
              delay={index}
              sx={{
                width: generateStaggeredWidths(index, advantages.length),
                // ml: { xs: 0, sm: `${index * 1}%`, md: `${index * 5}%` },
                ...styles.mobileAdvantageBox,
              }}
            >
              <NumberBox className="number-box" sx={styles.numberBox}>
                {advantage.number}
              </NumberBox>
              <Box sx={{ ...styles.contentBox, ...styles.mobileContentBox }}>
                <Typography
                  variant="h6"
                  sx={styles.advantageTitle}
                  className="advantage-title"
                >
                  {advantage.title}
                </Typography>
                <Typography variant="body2" sx={styles.advantageDescription}>
                  {advantage.description}
                </Typography>
              </Box>
            </AdvantageBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FoundersAdvantage;
