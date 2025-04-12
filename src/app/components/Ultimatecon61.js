// pages/investors.js
import React from 'react';
import { Box, Typography, Container, Card, CardContent, useMediaQuery, useTheme as useMuiTheme } from '@mui/material';

const InvestorsPage = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(muiTheme.breakpoints.down('md'));
  
  // Custom theme values
  const theme = {
    bgcolor: '#050505',
    highlightedText: '#E87811',
    text: '#FFFFFF',
    secondaryText: '#808080',
    cardBorder: '#E87811',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: theme.bgcolor,
      color: theme.text,
      position: 'relative',
      overflow: 'hidden',
      margin: { xs: '0px 0', md: '0px 0' }, // Added margin top and bottom
    },
    outerContainer: {
      padding: { 
        xs: '20px 16px', 
        sm: '30px 24px', 
        md: '40px 40px',
        lg: '50px 90px'
      }, // Added padding on all sides
    },
    container: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: '30px', md: '0' },
      alignItems: 'stretch',
      maxWidth: '1400px', // Set maximum width
      margin: '0 auto', // Center the container
      // border: '1px solid rgba(255, 255, 255, 0.05)', // Optional subtle border
      borderRadius: '8px', // Optional rounded corners
      overflow: 'hidden', // Keep content within borders
    },
    imageContainer: {
      flex: { xs: '1', md: '0.45' },
      minHeight: { xs: '250px', sm: '300px', md: '450px', lg: '500px' },
      position: 'relative',
      backgroundImage: 'url(/investor.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: {
          xs: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)',
          md: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 90%, rgba(0,0,0,1) 100%)'
        },
        zIndex: 1,
      },
    },
    contentContainer: {
      flex: { xs: '1', md: '0.55' },
      padding: { 
        xs: '20px 16px', 
        sm: '25px 20px', 
        md: '40px 30px',
        lg: '60px 40px'
      }, // Increased padding
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    mainTitle: {
      fontSize: { xs: '24px', sm: '28px', md: '34px', lg: '36px' },
      fontWeight: 700,
      marginBottom: { xs: '10px', md: '12px' },
      textAlign: { xs: 'center', md: 'left' }, // Center on mobile
      position: 'relative',
    },
    subtitle: {
      fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
      fontWeight: 600,
      marginBottom: { xs: '16px', md: '24px' },
      color: theme.secondaryText,
      textAlign: { xs: 'center', md: 'left' }, // Center on mobile
    },
    description: {
      fontSize: { xs: '15px', md: '16px' },
      marginBottom: { xs: '24px', md: '32px' },
      color: theme.text,
      lineHeight: 1.6,
      textAlign: { xs: 'center', md: 'left' }, // Center on mobile
      maxWidth: { md: '90%' }, // Limit width for better readability
    },
    cardsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: { xs: '12px', sm: '14px', md: '16px' },
      marginTop: { xs: '16px', md: '20px' },
    },
    card: {
      backgroundColor: 'rgba(0, 0, 0, 0.2)', // Subtle background
      border: `1px solid ${theme.highlightedText}`,
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      '&:hover': {
        boxShadow: '0 0 15px rgba(232, 120, 17, 0.3)',
        transform: 'translateY(-2px)',
        backgroundColor: 'rgba(232, 120, 17, 0.05)', // Subtle hover background
      },
    },
    cardContent: {
      padding: { xs: '16px', md: '20px' }, // Increased padding
    },
    cardTitle: {
      fontSize: { xs: '16px', md: '18px' },
      fontWeight: 600,
      marginBottom: '8px',
      color: theme.highlightedText,
      textAlign: { xs: 'center', md: 'left' }, // Center on mobile
    },
    cardDescription: {
      fontSize: { xs: '14px', md: '15px' },
      color: theme.text,
      lineHeight: 1.5,
      textAlign: { xs: 'center', md: 'left' }, // Center on mobile
    },
  };

  // Card data
  const cards = [
    {
      title: 'Pre-Vetted Deal Flow',
      description: 'Access curated investment opportunities aligned with your strategy and vision.',
    },
    {
      title: 'Enhanced Portfolio Liquidity',
      description: 'Leverage tokenized investments for dynamic portfolio management via secure secondary markets.',
    },
    {
      title: 'Data-Driven Decision Making',
      description: 'Make confident investment choices with verified performance metrics and predictive analytics.',
    },
    {
      title: 'Strategic Value Addition',
      description: 'Contribute expertise and networks that help portfolio companies succeed at scale.',
    },
  ];

  return (
    <Box sx={styles.root}>
      <Box sx={styles.outerContainer}>
        <Box sx={styles.container}>
          <Box sx={styles.imageContainer} />

          <Box sx={styles.contentContainer}>
            <Typography variant="h1" sx={styles.mainTitle}>
              For Investors
            </Typography>
            
            <Typography variant="h2" sx={styles.subtitle}>
              Discover Saudi's Next Generation of Innovation
            </Typography>
            
            <Typography variant="body1" sx={styles.description}>
              Gain privileged access to Saudi Arabia's most promising startups.
            </Typography>
            
            <Box sx={styles.cardsContainer}>
              {cards.map((card, index) => (
                <Card key={index} sx={styles.card} elevation={0}>
                  <CardContent sx={styles.cardContent}>
                    <Typography variant="h6" sx={styles.cardTitle}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.cardDescription}>
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvestorsPage;