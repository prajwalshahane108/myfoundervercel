// components/FAQSection.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Create motion components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionAccordion = motion(Accordion);
const MotionAccordionSummary = motion(AccordionSummary);
const MotionAccordionDetails = motion(AccordionDetails);
const MotionExpandMoreIcon = motion(ExpandMoreIcon);

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#050505",
    minHeight: { xs: "100vh", sm: "120vh", md: "100vh" },
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
  },
  sectionTag: {
    color: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgb(0, 0, 0)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    padding: "4px 20px",
    fontSize: "14px",
    marginBottom: "30px",
    display: "inline-block",
  },
  sectionTitle: {
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    marginBottom: "60px",
    // "@media (max-width: 768px)": {
    //   fontSize: "2.5rem",
    // },
  },
  faqContainer: {
    width: "100%",
    maxWidth: "780px",
    display: "flex",
    flexDirection: "column",
  },
  accordionRoot: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
    "&:before": {
      display: "none",
    },
  },
  accordionBorder: {
    // borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  accordionSummary: {
    padding: "0 !important",
  },
  expandIcon: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  question: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "1.5rem",
    fontWeight: "400",
    padding: "15px 0",
  },
  answer: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1rem",
    lineHeight: 1.6,
    paddingBottom: "20px",
  },
}));

function FAQSection() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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

  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const expandIconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  const answerVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const faqItems = [
    {
      id: "panel1",
      question: "What is the token-gated access system?",
      answer: `Our exclusive token system provides tiered membership access to resources tailored to your startup's growth stage. Each membership level unlocks increasingly valuable tools, networking opportunities, and advisory services designed to accelerate your journey from concept to global scale.`,
    },
    {
      id: "panel2",
      question: "How does the AI & Web3 integration benefit founders?",
      answer: `Our smart ecosystems leverage cutting-edge AI-driven market analytics, blockchain-backed funding solutions, and personalized scaling roadmaps. These technologies enable more efficient matchmaking with investors, provide data-driven insights, and create transparent interactions within our ecosystem.`,
    },
    {
      id: "panel3",
      question: "What strategic partnerships can members access?",
      answer:
        "Members gain access to transformative technologies through our global innovation network, including Web3 & AI venture studios, robotics development labs, quantum computing resources, and university R&D partnerships. These connections help accelerate innovation and provide competitive advantages.",
    },
    {
      id: "panel4",
      question: "Why focus on Saudi Arabia as a hub?",
      answer:
        "Saudi Arabia represents an exceptional opportunity as a strategic gateway to 2+ billion consumers, with $1.1B in government-backed venture funding, 99% internet penetration, and a youth-driven economy (70% under 35 years old). Vision 2030 initiatives provide founders with unprecedented support and market access.",
    },
    {
      id: "panel5",
      question: "What tangible results can founders expect?",
      answer:
        "Our members achieve measurable advantages including 53% faster time-to-market, 2.8x higher funding success rate, 67% improved founder retention, and 74% stronger international market entry compared to traditional approaches. Our structured support system ensures these outcomes.",
    },
  ];

  return (
    <Box id="contact" ref={ref} className={classes.root}>
      <MotionTypography
        variant="body1"
        className={classes.sectionTag}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Need to Know
      </MotionTypography>

      <MotionTypography
        variant="h2"
        sx={{
          fontSize: {
            xs: "1.9rem",
            sm: "2rem",
            md: "2.9rem",
          },
        }}
        className={classes.sectionTitle}
        variants={itemVariants}
        initial="hidden"
        animate={controls}
      >
        Frequently Asked Questions
      </MotionTypography>

      <Box className={classes.faqContainer}>
        {faqItems.map((item, index) => (
          <MotionAccordion
            key={item.id}
            expanded={expanded === item.id}
            onChange={handleChange(item.id)}
            classes={{
              root: classes.accordionRoot,
            }}
            className={classes.accordionBorder}
            disableGutters
            elevation={0}
            custom={index}
            variants={accordionVariants}
            initial="hidden"
            animate={controls}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              transition: { duration: 0.2 },
            }}
          >
            <AccordionSummary
              expandIcon={
                <MotionExpandMoreIcon
                  className={classes.expandIcon}
                  animate={expanded === item.id ? "expanded" : "collapsed"}
                  variants={expandIconVariants}
                  transition={{ duration: 0.3 }}
                />
              }
              aria-controls={`${item.id}-content`}
              id={`${item.id}-header`}
              className={classes.accordionSummary}
            >
              <MotionTypography
                className={classes.question}
                animate={{
                  color:
                    expanded === item.id
                      ? "#FF5B23"
                      : "rgba(255, 255, 255, 0.7)",
                }}
                transition={{ duration: 0.3 }}
              >
                {item.question}
              </MotionTypography>
            </AccordionSummary>
            <AccordionDetails>
              <motion.div
                initial="collapsed"
                animate={expanded === item.id ? "expanded" : "collapsed"}
                variants={answerVariants}
              >
                <Typography className={classes.answer}>
                  {item.answer}
                </Typography>
              </motion.div>
            </AccordionDetails>
          </MotionAccordion>
        ))}
      </Box>
    </Box>
  );
}

export default FAQSection;