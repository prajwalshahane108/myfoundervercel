// pages/index.js
import React from 'react';
import { Box, Typography, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const InnovationPage = () => {
  // Custom theme values
  const theme = {
    bgcolor: '#050505',
    highlightedText: '#E87811',
    text: '#FFFFFF',
    secondaryText: '#808080',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: theme.bgcolor,
      color: theme.text,
      minHeight: '100vh',
      padding: { xs: '40px 16px', md: '60px 24px' },
    },
    container: {
      position: 'relative',
    },
    title: {
      fontWeight: 900,
      fontSize: { xs: '32px', sm: '40px', md: '48px' },
      marginBottom: { xs: '40px', md: '80px' },
      textAlign: 'center',
      letterSpacing: '-0.5px',
    },
    sectionTitle: {
      fontSize: { xs: '22px', md: '28px' },
      fontWeight: 700,
      marginBottom: '20px',
    },
    sectionDescription: {
      fontSize: '16px',
      marginBottom: '30px',
      color: theme.text,
      lineHeight: 1.6,
    },
    listItem: {
      paddingLeft: 0,
      paddingTop: '4px',
      paddingBottom: '4px',
    },
    listItemIcon: {
      minWidth: '26px',
    },
    bullet: {
      color: theme.highlightedText,
      fontSize: '10px',
    },
    card: {
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: { xs: '24px', md: '30px' },
      height: '100%',
      backdropFilter: 'blur(5px)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: 'rgba(232, 120, 17, 0.3)',
        boxShadow: '0 0 15px rgba(232, 120, 17, 0.2)',
      },
      display: 'flex',
      flexDirection: 'column',
    },
    listItemText: {
      '& .MuiListItemText-primary': {
        fontSize: '16px',
        color: theme.text,
      }
    },
    featureList: {
      marginTop: 'auto',
    },
    // Adds subtle starry background effect
    starBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.1,
      zIndex: -1,
      backgroundImage: `radial-gradient(white, rgba(255, 255, 255, 0.2) 2px, transparent 2px)`,
      backgroundSize: '50px 50px',
    },
  };

  // Section data
  const sections = [
    {
      title: 'Token-Gated Access',
      description: 'Exclusive membership unlocks premium resources tailored to your startup journey.',
      features: [
        'VIP networking events',
        'Specialised founder training',
        'Premium content library',
      ],
    },
    {
      title: 'AI & Web3 Integration',
      description: 'Smart ecosystems powered by cutting-edge technology accelerate your growth.',
      features: [
        'AI-driven market analytics',
        'Blockchain-backed funding solutions',
        'Personalised scaling roadmaps',
      ],
    },
    {
      title: 'Strategic Partnerships',
      description: 'Access transformative technologies through our global innovation network.',
      features: [
        'Web3 & AI venture studios',
        'Robotics development labs',
        'Quantum computing resources',
        'Universities R&D',
      ],
    },
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.starBackground} />
      <Container maxWidth="lg" sx={styles.container}>
        <Typography variant="h1" sx={styles.title}>
          How We Drive Innovation
        </Typography>

        <Grid container spacing={4}>
          {sections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={styles.card} className="innovation-card">
                <Typography variant="h2" sx={styles.sectionTitle}>
                  {section.title}
                </Typography>
                <Typography variant="body1" sx={styles.sectionDescription}>
                  {section.description}
                </Typography>
                <List sx={styles.featureList}>
                  {section.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} sx={styles.listItem}>
                      <ListItemIcon sx={styles.listItemIcon}>
                        <FiberManualRecordIcon sx={styles.bullet} />
                      </ListItemIcon>
                      <ListItemText primary={feature} sx={styles.listItemText} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InnovationPage;