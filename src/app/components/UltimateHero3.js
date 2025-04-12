import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const PurposeVisionSection = () => {
  // Custom theme values
  const theme = {
    bgcolor: '#050505',
    text: '#FFFFFF',
    accentColor: '#E87811',
  };

  // Styles
  const styles = {
    root: {
      backgroundColor: theme.bgcolor,
      color: theme.text,
      width: '100%',
      padding: { xs: '40px 0', sm: '60px 0', md: '10px 0' },
      position: 'relative',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: { xs: '0 20px', sm: '0 30px', md: '0 40px' },
    },
    title: {
      fontSize: { xs: '32px', sm: '40px', md: '48px' },
      fontWeight: 700,
      marginBottom: { xs: '40px', md: '60px' },
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
      gap: { xs: '40px', md: '30px' },
    },
    sectionTitle: {
      fontSize: { xs: '22px', md: '24px' },
      fontWeight: 600,
      marginBottom: '16px',
    },
    sectionText: {
      fontSize: { xs: '15px', md: '16px' },
      lineHeight: 1.6,
    },
  };

  const sections = [
    {
      title: 'Purpose',
      content: `We exist to transform entrepreneurial vision into world-changing reality. We're building Saudi Arabia's most dynamic innovation ecosystem—where ambitious founders connect with strategic investors and industry experts to create businesses that drive economic growth and shape the future.`,
    },
    {
      title: 'Mission',
      content: 'To empower Saudi entrepreneurs with the connections, resources, and knowledge they need to build globally competitive companies that solve real problems, create meaningful impact, and contribute to Vision 2030.',
    },
    {
      title: 'Vision',
      content: 'A thriving Saudi startup ecosystem that stands at the forefront of global innovation, powered by a community where every entrepreneur has the support they need to turn bold ideas into world-class businesses.',
    },
  ];

  return (
    <Box sx={styles.root}>
      <Container maxWidth={false} sx={styles.container}>
        <Typography variant="h2" sx={styles.title}>
          Our Purpose & Vision
        </Typography>

        <Box sx={styles.grid}>
          {sections.map((section, index) => (
            <Box key={index}>
              <Typography variant="h3" sx={styles.sectionTitle}>
                {section.title}
              </Typography>
              <Typography variant="body1" sx={styles.sectionText}>
                {section.content}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PurposeVisionSection;