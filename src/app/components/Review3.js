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
    backgroundColor: "black",
    backgroundImage:
      "radial-gradient(circle, rgba(75, 75, 75, 0.1) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
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
      question: "What makes MyFounders.Club different from other networking groups?",
      answer: `MyFounders.Club stands out with its cross-border approach to ecosystem building. Unlike traditional networks, we focus on connecting founders across international markets, ensuring access to global opportunities while providing localized expertise in each chapter.`,
    },
    {
      id: "panel2",
      question: "How does the chapter model benefit founders?",
      answer: `Our chapter model enhances founder success by providing both local support and global reach. You gain access to market-specific expertise in your home chapter while leveraging our international network for expansion, investment, and strategic partnerships across borders.`,
    },
    {
      id: "panel3",
      question: "How does MyFounders.Club select its chapter locations?",
      answer:
        "We strategically establish chapters in both emerging markets with high growth potential (like Saudi Arabia) and established innovation hubs (like Singapore and Berlin). This creates valuable bridges between ecosystems at different stages of development, maximizing opportunities for all members",
    },
    {
      id: "panel4",
      question: "Does MyFounders.Club offer customized support for different stages?",
      answer:
        "Yes, MyFounders.Club provides tailored support based on your startup's growth stage and market expansion goals. From early-stage founders seeking initial traction to scale-ups ready for international expansion, our programs adapt to your specific needs and challenges.",
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
