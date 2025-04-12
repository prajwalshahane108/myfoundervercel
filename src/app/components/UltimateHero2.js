import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#050505',
        padding: { xs: '40px 0', sm: '50px 0', md: '60px 20px', lg: '40px 20px' },
      }}
    >
      <Container 
        maxWidth="xl" 
        sx={{ 
          padding: { xs: '0 20px', sm: '0 24px', md: '0 32px', lg: '0 40px' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', md: '450px' },
            borderRadius: '16px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            backgroundColor: '#000',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            margin: '0 auto',
          }}
        >
          {/* Left side - Image */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: '250px', sm: '300px', md: '100%' },
              backgroundImage: 'url("/hero.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: { 
                  xs: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)', 
                  md: 'linear-gradient(to right, rgba(0,0,0,0) 70%, rgba(0,0,0,0.3) 100%)' 
                },
                zIndex: 1,
              },
            }}
          />

          {/* Right side - Content */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              padding: { xs: '32px 24px', sm: '40px 32px', md: '48px 40px', lg: '60px 48px' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontSize: { xs: '26px', sm: '32px', md: '36px', lg: '42px' },
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: { xs: '20px', md: '28px' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-12px',
                  left: '0',
                  width: '60px',
                  height: '3px',
                  backgroundColor: '#E87811',
                },
              }}
            >
              MyFounders.Club: The Ultimate Gateway to Global Innovation for Saudi Startups
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                fontSize: { xs: '14px', sm: '16px', md: '17px' },
                lineHeight: 1.6,
                opacity: 0.9,
                maxWidth: '600px',
              }}
            >
              Transforming entrepreneurial vision into world-changing reality. Building Saudi Arabia's most dynamic innovation ecosystem where founders, investors, and experts create the future.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;