// components/TestimonialsSection.js
import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Avatar,
  Rating,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@mui/styles";
import BoltIcon from "@mui/icons-material/Bolt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionContainer = motion(Container);
const MotionStarIcon = motion(StarIcon);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#050505",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    "@media (max-width: 960px)": {
      padding: "50px 15px",
    },
    "@media (max-width: 600px)": {
      padding: "40px 15px",
    },
  },
  sectionTag: {
    color: "#AFAFAF",
    backgroundColor: "rgb(0, 0, 0)",
    border: "1px solid rgba(202, 186, 186, 0.8)",
    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
    "@media (max-width: 768px)": {
      fontSize: "13px",
      padding: "4px 16px",
      marginBottom: "25px",
    },
    "@media (max-width: 480px)": {
      fontSize: "12px",
      padding: "3px 15px",
      marginBottom: "20px",
    },
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: "2.9rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "60px",
    "@media (max-width: 960px)": {
      fontSize: "2.7rem",
      marginBottom: "50px",
    },
    "@media (max-width: 768px)": {
      fontSize: "2.3rem",
      marginBottom: "40px",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.8rem",
      marginBottom: "35px",
      lineHeight: 1.3,
    },
  },
  featuredTestimonial: {
    display: "flex",
    width: "100%",
    maxWidth: "1010px",
    marginBottom: "80px",
    flexWrap: "wrap",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "60px",
    },
    "@media (max-width: 480px)": {
      marginBottom: "40px",
    },
  },
  testimonialImage: {
    width: "100%",
    maxWidth: "400px",
    height: "400px",
    borderRadius: "16px",
    overflow: "hidden",
    marginRight: "40px",
    "@media (max-width: 960px)": {
      marginRight: "0",
      marginBottom: "30px",
      height: "350px",
    },
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      height: "300px",
    },
    "@media (max-width: 480px)": {
      height: "250px",
      borderRadius: "12px",
    },
  },
  testimonialContent: {
    flex: 1,
    minWidth: "300px",
    "@media (max-width: 960px)": {
      textAlign: "center",
      minWidth: "100%",
    },
    "@media (max-width: 480px)": {
      minWidth: "0",
    },
  },
  companyLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    "@media (max-width: 960px)": {
      justifyContent: "center",
    },
    "@media (max-width: 480px)": {
      marginBottom: "15px",
    },
  },
  logoIcon: {
    backgroundColor: "#E87811",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    color: "white",
    "@media (max-width: 480px)": {
      width: "35px",
      height: "35px",
      marginRight: "8px",
    },
  },
  companyName: {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "500",
    "@media (max-width: 480px)": {
      fontSize: "1.3rem",
    },
  },
  testimonyText: {
    color: "#AFAFAF",
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "30px",
    lineHeight: 1.4,
    "@media (max-width: 960px)": {
      fontSize: "1.8rem",
      marginBottom: "25px",
    },
    "@media (max-width: 768px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.3rem",
      lineHeight: 1.3,
      marginBottom: "20px",
    },
  },
  personInfo: {
    marginBottom: "40px",
    borderTop: "20px",
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: "20px",
    "@media (max-width: 960px)": {
      justifyContent: "center",
      marginBottom: "30px",
    },
    "@media (max-width: 480px)": {
      flexDirection: "column",
      gap: "5px",
      marginBottom: "25px",
    },
  },
  personName: {
    color: "white",
    fontSize: "1.3rem",
    fontWeight: "500",
    "@media (max-width: 480px)": {
      fontSize: "1.1rem",
    },
  },
  personTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    marginTop: "3px",
    "@media (max-width: 480px)": {
      fontSize: "0.9rem",
      marginTop: "0",
    },
  },
  statsContainer: {
    display: "flex",
    gap: "40px",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    paddingTop: "20px",
    "@media (max-width: 960px)": {
      justifyContent: "center",
    },
    "@media (max-width: 480px)": {
      gap: "30px",
    },
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  },
  statValue: {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "600",
    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.6rem",
    },
  },
  statLabel: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
    "@media (max-width: 480px)": {
      fontSize: "0.8rem",
    },
  },
  testimonialCards: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "space-between",
    gap: "20px",
    "@media (max-width: 960px)": {
      flexDirection: "column",
      alignItems: "center",
      gap: "30px",
    },
  },
  testimonialCard: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "380px",
    padding: "0 20px",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    "&:last-child": {
      borderRight: "none",
    },
    "@media (max-width: 960px)": {
      borderRight: "none",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      paddingBottom: "30px",
      marginBottom: "10px",
      "&:last-child": {
        borderBottom: "none",
        paddingBottom: "0",
        marginBottom: "0",
      },
      maxWidth: "600px",
      width: "100%",
    },
    "@media (max-width: 480px)": {
      minWidth: "100%",
      padding: "0 10px",
      paddingBottom: "25px",
    },
  },
  companyLogoSmall: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.2rem",
    fontWeight: "500",
    marginBottom: "10px",
    display: "block",
    textAlign: "center",
    "@media (max-width: 480px)": {
      fontSize: "1.1rem",
    },
  },
  ratingContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    "@media (max-width: 480px)": {
      marginBottom: "15px",
    },
  },
  starIcon: {
    color: "#FF5B23",
    fontSize: "24px",
    "@media (max-width: 480px)": {
      fontSize: "20px",
    },
  },
  cardTestimony: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "20px",
    lineHeight: 1.6,
    "@media (max-width: 480px)": {
      fontSize: "0.95rem",
      lineHeight: 1.5,
      marginBottom: "15px",
    },
  },
  cardPersonInfo: {
    textAlign: "center",
  },
  cardPersonName: {
    color: "#ff5B23",
    fontSize: "1.1rem",
    fontWeight: "500",
    "@media (max-width: 480px)": {
      fontSize: "1rem",
    },
  },
  cardPersonTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "0.9rem",
    "@media (max-width: 480px)": {
      fontSize: "0.85rem",
    },
  },
}));

function TestimonialsSection() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.4,
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    }),
  };

  const statNumberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Featured testimonial data
  const featuredTestimonial = {
    image: "/zapfast.png", // Replace with an actual image path
    company: "NextGen Leadership",
    testimony:
      '"MyFounders.Club created bridges between Saudi Arabia and global innovation centers that helped us scale beyond borders, transforming our vision into a global enterprise."',
    personName: "Haya Al Aoudah",
    personTitle: "Fintech and payments specialist",
    stats: [
      {
        value: "53%",
        label: "Faster time-to-market",
      },
      {
        value: "2.8x",
        label: "Higher funding success rate",
      },
    ],
  };

  // Card testimonials data
  const cardTestimonials = [
    {
      company: "Strategic Investment",
      rating: 5,
      testimony:
        '"Their UK-Saudi tech ecosystems connections provided exactly what we needed for successful market entry. Vision 2030 alignment was seamless."',
      personName: "Katerina Hayes",
      personTitle: "Investment Expert",
    },
    {
      company: "AI Innovation",
      rating: 5,
      testimony:
        '"The equity-plus funding models and AI implementation support transformed our global launch strategy. Their expertise was invaluable."',
      personName: "Manish Balakrishnan",
      personTitle: "AI Implementation Specialist",
    },
    {
      company: "Young Founders Initiative",
      rating: 5,
      testimony:
        '"The mentorship for early-stage entrepreneurs created a foundation for sustainable growth. Their guidance bridges theory and market reality."',
      personName: "Ahmed Yusuf",
      personTitle: "Director",
    },
  ];

  // Logo component for featured testimonial
  const CompanyLogo = ({ company }) => {
    // Custom component for company logo
    switch (company) {
      case "NextGen Leadership":
        return (
          <MotionBox
            id="Members"
            className={classes.companyLogo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MotionBox
              className={classes.logoIcon}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <BoltIcon />
            </MotionBox>
            <Typography className={classes.companyName}>{company}</Typography>
          </MotionBox>
        );
      default:
        return (
          <MotionBox
            className={classes.companyLogo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <MotionBox
              className={classes.logoIcon}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <BoltIcon />
            </MotionBox>
            <Typography className={classes.companyName}>{company}</Typography>
          </MotionBox>
        );
    }
  };

  // Counter for statistics
  const StatCounter = ({ value, className, index }) => {
    // Parse numeric part from string like "73%" or "5X"
    const getNumericValue = () => {
      if (value.includes("%")) {
        return parseFloat(value);
      } else if (value.includes("X")) {
        return parseFloat(value);
      }
      return parseFloat(value);
    };

    const numericValue = getNumericValue();
    const suffix = value.includes("%") ? "%" : value.includes("X") ? "X" : "";

    return (
      <MotionTypography
        variant="h4"
        className={className}
        custom={index}
        variants={statNumberVariants}
      >
        {value}
      </MotionTypography>
    );
  };

  return (
    <Box ref={ref} className={classes.root}>
      <Container
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
          Founders & Partners
        </MotionTypography>

        <MotionTypography
          variant="h2"
          className={classes.sectionTitle}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          Building the Future Together
          {!isMobile && <br />}
        </MotionTypography>

        {/* Featured Testimonial */}
        <Box className={classes.featuredTestimonial}>
          <MotionBox
            className={classes.testimonialImage}
            component="img"
            src={featuredTestimonial.image}
            alt={featuredTestimonial.personName}
            sx={{
              objectFit: "cover",
              backgroundColor: "#333",
            }}
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          />

          <Box className={classes.testimonialContent}>
            <CompanyLogo company={featuredTestimonial.company} />

            <MotionTypography
              variant="h3"
              className={classes.testimonyText}
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              {featuredTestimonial.testimony}
            </MotionTypography>

            <MotionBox
              className={classes.personInfo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <MotionTypography
                variant="h5"
                className={classes.personName}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {featuredTestimonial.personName}
              </MotionTypography>
              <MotionTypography
                variant="h5"
                className={classes.personTitle}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                {featuredTestimonial.personTitle}
              </MotionTypography>
            </MotionBox>

            <MotionBox
              className={classes.statsContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {featuredTestimonial.stats.map((stat, index) => (
                <MotionBox
                  key={index}
                  className={classes.statItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <Typography
                    value={stat.value}
                    className={classes.statValue}
                    index={index}
                  >
                    {stat.value}
                  </Typography>
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
          </Box>
        </Box>

        {/* Testimonial Cards */}
        <Box className={classes.testimonialCards}>
          {cardTestimonials.map((testimonial, index) => (
            <MotionBox
              key={index}
              className={classes.testimonialCard}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
            >
              <MotionTypography
                variant="h6"
                className={classes.companyLogoSmall}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
              >
                {testimonial.company}
              </MotionTypography>

              <MotionBox
                className={classes.ratingContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              >
                <Box sx={{ display: "flex" }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MotionStarIcon
                      key={i}
                      className={classes.starIcon}
                      custom={i}
                      variants={starVariants}
                      initial="hidden"
                      animate={controls}
                    />
                  ))}
                </Box>
              </MotionBox>

              <MotionTypography
                variant="body1"
                className={classes.cardTestimony}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
              >
                {testimonial.testimony}
              </MotionTypography>

              <MotionBox
                className={classes.cardPersonInfo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
              >
                <MotionTypography
                  variant="h6"
                  className={classes.cardPersonName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
                >
                  {testimonial.personName}
                </MotionTypography>
                <MotionTypography
                  variant="body2"
                  className={classes.cardPersonTitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 + index * 0.2, duration: 0.5 }}
                >
                  {testimonial.personTitle}
                </MotionTypography>
              </MotionBox>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default TestimonialsSection;