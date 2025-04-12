// pages/advisors.js
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import FastForwardIcon from '@mui/icons-material/FastForward';
import GridViewIcon from '@mui/icons-material/GridView';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AdvisorsPage = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    // Add the staggered animation class once the component mounts
    if (cardsRef.current) {
      cardsRef.current.classList.add('staggered-animation');
    }
  }, []);

  // Custom theme values
  const theme = {
    bgcolor: '#050505',
    highlightedText: '#E87811',
    text: '#FFFFFF',
    secondaryText: '#808080',
    accentColor: '#E87811',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: theme.bgcolor,
      color: theme.text,
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      padding: { xs: '20px', sm: '30px', md: '40px', lg: '90px' },
    },
    container: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      padding: { xs: '0', md: '0' },
      gap: { xs: '20px', md: '40px' },
      alignItems: 'stretch',
      minHeight: '100vh',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    imageContainer: {
      flex: { xs: '1', md: '0.45' },
      minHeight: { xs: '300px', sm: '400px', md: '100vh' },
      position: 'relative',
      backgroundImage: 'url("/advisor.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)',
        zIndex: 1,
      },
    },
    orangeGlow: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '40%',
      background: `linear-gradient(to top, ${theme.accentColor}22 0%, transparent 100%)`,
      zIndex: 3,
    },
    contentContainer: {
      flex: { xs: '1', md: '0.55' },
      padding: { xs: '20px 0', sm: '30px 0', md: '60px 20px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      fontSize: { xs: '28px', sm: '32px', md: '40px' },
      fontWeight: 700,
      marginBottom: '40px',
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '10px',
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
      gap: { xs: '30px', sm: '40px' },
      marginTop: '20px',
    },
    card: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: 0,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        '& .icon-hover': {
          transform: 'scale(1.1)',
        },
      },
    },
    cardContent: {
      padding: '0 !important',
    },
    cardIcon: {
      color: theme.accentColor,
      fontSize: { xs: '32px', md: '36px' },
      marginBottom: '16px',
      transition: 'transform 0.3s ease',
    },
    cardTitle: {
      fontSize: { xs: '18px', md: '22px' },
      fontWeight: 600,
      marginBottom: '12px',
      color: "#FFFFFF",
    },
    cardDescription: {
      fontSize: { xs: '14px', md: '16px' },
      color: theme.text,
      lineHeight: 1.5,
      opacity: 0.8,
      maxWidth: '90%',
    },
  };

  // Card data
  const cards = [
    {
      title: 'Empower Rising Startups',
      description: 'Share your expertise through high-impact mentorship and advisory roles.',
      icon: <LightbulbOutlinedIcon className="icon-hover" sx={styles.cardIcon} />,
    },
    {
      title: 'Expand Your Influence',
      description: 'Connect with transformative ventures while building meaningful professional relationships.',
      icon: <LanguageIcon className="icon-hover" sx={styles.cardIcon} />,
    },
    {
      title: 'Drive Innovation Forward',
      description: `Play a pivotal role in advancing Saudi Arabia's entrepreneurial ecosystem.`,
      icon: <FastForwardIcon className="icon-hover" sx={styles.cardIcon} />,
    },
    {
      title: 'Create Lasting Legacy',
      description: `Help shape companies that will define Saudi's economic future.`,
      icon: <GridViewIcon className="icon-hover" sx={styles.cardIcon} />,
    },
    {
      title: 'Fractional C-suit',
      description: '',
      icon: <TrendingUpIcon className="icon-hover" sx={styles.cardIcon} />,
    },
  ];

  return (
    <Box sx={styles.root}>
      <Container maxWidth={false} sx={styles.container} disableGutters>
        <Box sx={styles.imageContainer} className="image-overlay">
          <Box sx={styles.orangeGlow} />
        </Box>

        <Box sx={styles.contentContainer}>
          <Typography variant="h1" sx={styles.title}>
            For Advisors
          </Typography>
          
          <Box sx={styles.cardsGrid} ref={cardsRef}>
            {cards.map((card, index) => (
              <Card key={index} sx={styles.card} elevation={0} className="orange-border-hover">
                <CardContent sx={styles.cardContent}>
                  {card.icon}
                  <Typography variant="h6" sx={styles.cardTitle}>
                    {card.title}
                  </Typography>
                  {card.description && (
                    <Typography variant="body2" sx={styles.cardDescription}>
                      {card.description}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
          
          <Box className="orange-line" sx={{ mt: 6 }} />
        </Box>
      </Container>
    </Box>
  );
};

export default AdvisorsPage;