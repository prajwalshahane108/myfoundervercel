import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

const TechnologyAdvantage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isIpad = useMediaQuery('(min-width:768px) and (max-width:1024px)');
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#050505',
        color: '#fff',
        textAlign: 'center',
        py: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
        overflow: 'hidden',
        minHeight: { md: '700px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        gutterBottom
        sx={{
          mb: { xs: 3, sm: 4, md: 5 },
          fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem', lg: '2.5rem' },
          fontWeight: 600,
        }}
      >
        Our Technology Advantage
      </Typography>

      {isMobile ? (
        // Mobile layout - Vertical stacking
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <Box sx={{ width: '220px', height: '220px', position: 'relative', my: 3 }}>
            <Image src="/circle.png" alt="Tech Circle" layout="fill" objectFit="contain" />
          </Box>
          
          {[
            { title: 'Token-Gated Access', desc: 'Exclusive membership tiers with premium resources' },
            { title: 'AI-Powered Matchmaking', desc: 'Algorithms connect startups with perfect partners' },
            { title: 'Data-Driven Intelligence', desc: 'Actionable insights from comprehensive analytics' },
            { title: 'Blockchain-Backed Trust', desc: 'Immutable verification ensures transparent interactions' }
          ].map((item, i) => (
            <Box key={i} sx={{ width: '100%', maxWidth: '300px', mb: 2 }}>
              <Typography 
                variant="subtitle1" 
                fontWeight="bold" 
                mb={1}
                sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="body2" 
                color="#aaa"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
              >
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        // Tablet and Desktop layout
        <Box sx={{ 
          position: 'relative', 
          width: { sm: '220px', md: '280px', lg: '400px' }, 
          height: { sm: '220px', md: '280px', lg: '400px' }, 
          margin: '0 auto', 
          mt: { sm: 10, md: 12 },
          mb: { sm: 8, md: 6 } // Add bottom margin to create space for bottom text boxes
        }}>
          <Image src="/circle.png" alt="Tech Circle" layout="fill" objectFit="contain" />

          {/* Top Left */}
          <Box sx={{ 
            position: 'absolute', 
            top: { sm: '-60px', md: '-10px' }, 
            left: { 
              sm: '-230px', 
              md: isIpad ? '-320px' : '-250px', 
              lg: '-350px' 
            }, 
            width: { sm: '190px', md: isIpad ? '250px' : '180px', lg: '300px' },
            textAlign: 'right',
            transform: {
              sm: 'none',
              md: isIpad ? 'translateX(20px)' : 'none',
            }
          }}>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' } }}
            >
              Token-Gated Access
            </Typography>
            <Typography 
              variant="body2" 
              color="#aaa"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.995rem' } }}
            >
              Exclusive membership tiers with premium resources
            </Typography>
          </Box>

          {/* Top Right */}
          <Box sx={{ 
            position: 'absolute', 
            top: { sm: '-60px', md: '-10px' }, 
            right: { 
              sm: '-250px', 
              md: isIpad ? '-320px' : '-250px', 
              lg: '-350px' 
            }, 
            width: { sm: '230px', md: isIpad ? '250px' : '180px', lg: '300px' },
            textAlign: 'left',
            transform: {
              sm: 'none',
              md: isIpad ? 'translateX(-20px)' : 'none',
            }
          }}>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' } }}
            >
              AI-Powered Matchmaking
            </Typography>
            <Typography 
              variant="body2" 
              color="#aaa"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.995rem' } }}
            >
              Algorithms connect startups with perfect partners
            </Typography>
          </Box>

          {/* Bottom Left */}
          <Box sx={{ 
            position: 'absolute', 
            bottom: { sm: '-10px', md: '40px' }, 
            left: { 
              sm: '-230px', 
              md: isIpad ? '-320px' : '-250px', 
              lg: '-350px' 
            }, 
            width: { sm: '190px', md: isIpad ? '250px' : '180px', lg: '300px' },
            textAlign: 'right',
            transform: {
              sm: 'none',
              md: isIpad ? 'translateX(20px)' : 'none',
            }
          }}>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' } }}
            >
              Data-Driven Intelligence
            </Typography>
            <Typography 
              variant="body2" 
              color="#aaa"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.995rem' } }}
            >
              Actionable insights from comprehensive analytics
            </Typography>
          </Box>

          {/* Bottom Right */}
          <Box sx={{ 
            position: 'absolute', 
            bottom: { sm: '-10px', md: '40px' }, 
            right: { 
              sm: '-250px', 
              md: isIpad ? '-320px' : '-250px', 
              lg: '-350px' 
            }, 
            width: { sm: '230px', md: isIpad ? '250px' : '180px', lg: '300px' },
            textAlign: 'left',
            transform: {
              sm: 'none',
              md: isIpad ? 'translateX(-20px)' : 'none',
            }
          }}>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold" 
              sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' } }}
            >
              Blockchain-Backed Trust
            </Typography>
            <Typography 
              variant="body2" 
              color="#aaa"
              sx={{ fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.875rem', lg: '0.995rem' } }}
            >
              Immutable verification ensures transparent interactions
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TechnologyAdvantage;