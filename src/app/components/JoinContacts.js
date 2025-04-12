// ContactFooter.js
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactFooter = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        py: 4,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              borderRight: { md: "1px solid #333", xs: "none" },
            }}
          >
            <Box
              sx={{
                bgcolor: "#333",
                borderRadius: "50%",
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
              }}
            >
              <BusinessIcon fontSize="large" />
            </Box>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Riyadh Headquarters
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              Saudi Arabia (HQ) Vision 2030 Business  
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            District, Riyadh, Saudi Arabia
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              borderRight: { md: "1px solid #333", xs: "none" },
            }}
          >
            <Box
              sx={{
                bgcolor: "#333",
                borderRadius: "50%",
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
              }}
            >
              <PhoneIcon fontSize="large" />
            </Box>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            Contact
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            +966 12 345 6789
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            +971 50 123 4567
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                bgcolor: "#333",
                borderRadius: "50%",
                p: 2,
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
              }}
            >
              <EmailIcon fontSize="large" />
            </Box>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Email
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            connect@myfounders.club
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
            chapters@myfounders.club
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactFooter;
