import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

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
  },
  sectionTag: {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: "50px",
    padding: "8px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "white",
    fontSize: "2.8rem",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "60px",
    "@media (max-width: 768px)": {
      fontSize: "2.5rem",
    },
  },
  pricingContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "1200px",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  pricingCardStandard: {
    backgroundColor: "#111111",
    borderRadius: "12px",
    padding: "40px",
    width: "100%",
    maxWidth: "430px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  pricingCardPro: {
    backgroundColor: "#111111",
    borderRadius: "12px",
    padding: "40px",
    width: "100%",
    maxWidth: "480px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  popularBadge: {
    backgroundColor: "#E87811",
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "500",
    padding: "4px 12px",
    borderRadius: "50px",
    display: "inline-flex",
    marginLeft: "12px",
    alignItems: "center",
  },
  planTitle: {
    color: "white",
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
  },
  planDescription: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    marginBottom: "30px",
  },
  priceAmount: {
    color: "white",
    fontSize: "3.5rem",
    fontWeight: "700",
    marginBottom: "20px",
  },
  priceUnit: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "1.2rem",
    fontWeight: "normal",
  },
  getStartedButton: {
    backgroundColor: "#E87811",
    color: "white",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "1rem",
    textTransform: "none",
    fontWeight: "500",
    marginBottom: "30px",
    width: "100%",
    "&:hover": {
      backgroundColor: "#FF8C00",
    },
  },
  featuresTitle: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "15px",
  },
  featureIconPro: {
    color: "#E87811",
    marginRight: "10px",
    fontSize: "1.2rem",
    marginTop: "2px",
  },
  featureIconStandard: {
    color: "rgba(255, 255, 255, 0.7)",
    marginRight: "10px",
    fontSize: "1.2rem",
    marginTop: "2px",
  },
  featureText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  featuresContainer: {
    display: "flex",
    flexDirection: "column",
  },
  featuresDoubleColumn: {
    display: "flex",
    flexDirection: "column",
  },
  buttonIcon: {
    marginLeft: "5px",
    fontSize: "1rem",
  },
}));

function PricingSection() {
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
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const pricingPlans = [
    {
      title: "Standard",
      description: "Quarterly Membership",
      price: "SAR 900",
      unit: "/every 3 month",
      popular: false,
      features: [
        "Step-by-Step Investment Guide",
        "Exclusive Founder Benefits and Co-founder Matchmaking",
        "Access to Closed WhatsApp Community. Connect with a like-minded entrepreneur community",
        "Monthly Pitch Roaster & Investor Exposure. Opportunity to present at Quarterly Demo Days",
        "Weekly In-Person Events in Riyadh",
      ],
    },
    {
      title: "Pro",
      description:
        "Annual Membership Everything in the Quarterly Membership, PLUS:",
      price: "SAR 3600",
      unit: "/yearly",
      popular: true,
      features: [
        "Investors Selection and Matchmaking",
        "Priority Pitching Slots at Demo Days",
        "Exclusive Workshops & Masterclasses with Industry Leaders",
        "VIP Networking Sessions with Investors & Venture Builders",
        "Annual Founder Awards Recognition",
      ],
    },
  ];

  return (
    <Box ref={ref} className={classes.root}>
      <MotionTypography
        variant="body1"
        className={classes.sectionTag}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Simple Pricing
      </MotionTypography>

      <MotionTypography
        variant="h2"
        className={classes.sectionTitle}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Founders
      </MotionTypography>

      <Box className={classes.pricingContainer}>
        {/* Standard Plan */}
        <MotionBox
          className={classes.pricingCardStandard}
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <MotionTypography
            variant="h4"
            className={classes.planTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {pricingPlans[0].title}
          </MotionTypography>

          <MotionTypography
            variant="body1"
            className={classes.planDescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {pricingPlans[0].description}
            <br />
            <br />
          </MotionTypography>

          <MotionTypography
            variant="h3"
            className={classes.priceAmount}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {pricingPlans[0].price}
            <span className={classes.priceUnit}>{pricingPlans[0].unit}</span>
          </MotionTypography>

          <MotionButton
            variant="contained"
            className={classes.getStartedButton}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableElevation
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </MotionButton>

          <MotionTypography
            variant="body2"
            className={classes.featuresTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            What's included:
          </MotionTypography>

          <Box className={classes.featuresContainer}>
            {pricingPlans[0].features.map((feature, i) => (
              <MotionBox
                key={i}
                className={classes.featureItem}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={controls}
              >
                <CheckCircleOutlineIcon
                  className={classes.featureIconStandard}
                />
                <Typography variant="body2" className={classes.featureText}>
                  {feature}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>

        {/* Pro Plan */}
        <MotionBox
          className={classes.pricingCardPro}
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <MotionTypography
            variant="h4"
            className={classes.planTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {pricingPlans[1].title}
            <MotionTypography
              component="span"
              className={classes.popularBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Popular
            </MotionTypography>
          </MotionTypography>

          <MotionTypography
            variant="body1"
            className={classes.planDescription}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {pricingPlans[1].description}
          </MotionTypography>

          <MotionTypography
            variant="h3"
            className={classes.priceAmount}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {pricingPlans[1].price}
            <span className={classes.priceUnit}>{pricingPlans[1].unit}</span>
          </MotionTypography>

          <MotionButton
            variant="contained"
            className={classes.getStartedButton}
            endIcon={<ArrowOutwardIcon className={classes.buttonIcon} />}
            disableElevation
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </MotionButton>

          <MotionTypography
            variant="body2"
            className={classes.featuresTitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            What's included:
          </MotionTypography>

          <Box className={classes.featuresDoubleColumn}>
            {pricingPlans[1].features.map((feature, i) => (
              <MotionBox
                key={i}
                className={classes.featureItem}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                animate={controls}
              >
                <CheckCircleOutlineIcon className={classes.featureIconPro} />
                <Typography variant="body2" className={classes.featureText}>
                  {feature}
                </Typography>
              </MotionBox>
            ))}
          </Box>
        </MotionBox>
      </Box>
    </Box>
  );
}

export default PricingSection;
