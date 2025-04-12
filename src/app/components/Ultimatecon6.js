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
    backgroundColor: "#050505",
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
    maxWidth: "1300px",
    justifyContent: "space-evenly",
    gap: "20px",
    flexWrap: "nowrap",
    alignItems: "stretch",
    "@media (max-width: 1100px)": {
      flexWrap: "wrap",
    },
  },
  pricingCard: {
    backgroundColor: "#111111",
    borderRadius: "12px",
    padding: "30px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      maxWidth: "100%",
      marginBottom: "20px",
    },
  },
  standardCard: {
    maxWidth: "380px",
  },
  proCard: {
    maxWidth: "460px",
  },
  vipCard: {
    maxWidth: "380px",
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
  buttonIcon: {
    marginLeft: "5px",
    fontSize: "1rem",
  },
  tierNote: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "0.9rem",
    textAlign: "center",
    maxWidth: "800px",
    marginTop: "40px",
    lineHeight: "1.5",
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
      title: "Basic",
      description: "Essential resources for early-stage founders",
      price: "$200-500",
      unit: "/year",
      popular: false,
      buttonText: "Join Basic Tier",
      features: [
        "Access to Web3 Academy",
        "Basic networking tools",
        "Select events access",
        "Community discussion forums",
        "Startup resources library"
      ],
      cardType: "standard"
    },
    {
      title: "Premium",
      description: "Advanced resources for growth-stage startups",
      price: "$1,000-1,500",
      unit: "/year",
      popular: true,
      buttonText: "Join Premium Tier",
      features: [
        "Advanced matchmaking with investors/advisors",
        "Exclusive demo days",
        "Personalized mentorship sessions",
        "Priority access to all workshops",
        "Industry-specific networking groups"
      ],
      cardType: "pro"
    },
    {
      title: "VIP",
      description: "Comprehensive support for scaling businesses",
      price: "$5,000+",
      unit: "/year",
      popular: false,
      buttonText: "Join VIP Tier",
      features: [
        "VIP access to advisory boards",
        "Fractional C-suite support",
        "Global pitch roster priority placement",
        "Investment readiness acceleration",
        "Custom scaling roadmaps"
      ],
      cardType: "vip"
    }
  ];

  // Get card class based on type
  const getCardClass = (type) => {
    switch (type) {
      case "standard":
        return classes.standardCard;
      case "pro":
        return classes.proCard;
      case "vip":
        return classes.vipCard;
      default:
        return classes.standardCard;
    }
  };

  // Get feature icon class based on plan type
  const getFeatureIconClass = (cardType) => {
    return cardType === "standard" 
      ? classes.featureIconStandard 
      : classes.featureIconPro;
  };

  return (
    <Box ref={ref} className={classes.root}>
      <MotionTypography
        variant="body1"
        className={classes.sectionTag}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Membership Pricing Strategy
      </MotionTypography>

      <MotionTypography
        variant="h2"
        className={classes.sectionTitle}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Value-Based Membership Tiers
      </MotionTypography>

      <Box className={classes.pricingContainer}>
        {pricingPlans.map((plan, index) => (
          <MotionBox
            key={index}
            className={`${classes.pricingCard} ${getCardClass(plan.cardType)}`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            <MotionTypography
              variant="h4"
              className={classes.planTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
            >
              {plan.title}
              {plan.popular && (
                <MotionTypography
                  component="span"
                  className={classes.popularBadge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Popular
                </MotionTypography>
              )}
            </MotionTypography>

            <MotionTypography
              variant="body1"
              className={classes.planDescription}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
            >
              {plan.description}
              {!plan.popular && (
                <>
                  <br />
                  <br />
                </>
              )}
            </MotionTypography>

            <MotionTypography
              variant="h3"
              className={classes.priceAmount}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
            >
              {plan.price}
              <span className={classes.priceUnit}>{plan.unit}</span>
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
              {plan.buttonText}
            </MotionButton>

            <MotionTypography
              variant="body2"
              className={classes.featuresTitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
            >
              Benefits:
            </MotionTypography>

            <Box className={classes.featuresContainer}>
              {plan.features.map((feature, i) => (
                <MotionBox
                  key={i}
                  className={classes.featureItem}
                  custom={i}
                  variants={featureVariants}
                  initial="hidden"
                  animate={controls}
                >
                  <CheckCircleOutlineIcon
                    className={getFeatureIconClass(plan.cardType)}
                  />
                  <Typography variant="body2" className={classes.featureText}>
                    {feature}
                  </Typography>
                </MotionBox>
              ))}
            </Box>
          </MotionBox>
        ))}
      </Box>
      
      <MotionTypography
        variant="body2"
        className={classes.tierNote}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
        custom={3}
      >
        Each tier unlocks progressive value, designed to support your startup's journey from concept to global scale. Choose the path that matches your ambition.
      </MotionTypography>
    </Box>
  );
}

export default PricingSection;