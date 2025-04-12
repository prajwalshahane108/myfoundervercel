"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextareaAutosize,
  Snackbar,
  Alert,
  FormHelperText,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
// Import utility functions
import { submitContactForm } from "../utils/api";
import {
  validateFormData,
  getResponseMessage,
  initialFormState,
} from "../utils/formUtils";

// Styled components
const StyledFormContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  borderRadius: "23px",
  padding: "70px",
  maxWidth: "940px",
  width: "100%",
  marginBottom: "60px",
  position: "relative",
  overflow: "hidden",

  // Circular glow effect in the top-left corner
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)",
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "-50px",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.13) -50%, rgba(255, 255, 255, 0) 60%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  // Large screens
  [theme.breakpoints.down("lg")]: {
    padding: "60px 50px",
    maxWidth: "90%",
    borderRadius: "20px",
  },

  // Medium screens
  [theme.breakpoints.down("md")]: {
    padding: "50px 40px",
    maxWidth: "95%",
    marginBottom: "50px",
    borderRadius: "18px",

    // Scale down the glow effects
    "&::before": {
      width: "200px",
      height: "200px",
      top: "-80px",
      left: "-80px",
    },
    "&::after": {
      width: "280px",
      height: "280px",
      top: "-40px",
      left: "-40px",
    },
  },

  // Small screens
  [theme.breakpoints.down("sm")]: {
    padding: "40px 30px",
    marginBottom: "40px",
    borderRadius: "15px",

    // Further scale down the glow effects
    "&::before": {
      width: "150px",
      height: "150px",
      top: "-60px",
      left: "-60px",
    },
    "&::after": {
      width: "200px",
      height: "200px",
      top: "-30px",
      left: "-30px",
    },
  },

  // Very small screens
  "@media (max-width: 400px)": {
    padding: "30px 20px",
    marginBottom: "30px",
    borderRadius: "12px",

    // Smaller glow effects for mobile
    "&::before": {
      width: "100px",
      height: "100px",
      top: "-40px",
      left: "-40px",
    },
    "&::after": {
      width: "150px",
      height: "150px",
      top: "-25px",
      left: "-25px",
    },
  },
}));

const StyledFormRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "15px",
  },
}));

const StyledFormField = styled(Box)({
  flex: "1",
  width: "100%",
});

const StyledInputLabel = styled("label")({
  color: "white",
  fontSize: "0.9rem",
  marginBottom: "8px",
  display: "block",
  textAlign: "left",
});

const StyledTextField = styled(TextField)({
  width: "100%",
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#E87811",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "rgba(255, 255, 255, 0.5)",
  },
  "& .MuiFormLabel-root": {
    color: "#AFAFAF",
  },
  "& .MuiFormLabel-root.Mui-focused": {
    color: "#E87811",
  },
  "& .MuiSelect-icon": {
    color: "#AFAFAF",
  },
});

const StyledTextArea = styled(TextareaAutosize)({
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
  color: "white",
  fontSize: "1rem",
  padding: "10px 0",
  resize: "vertical",
  minHeight: "80px",
  fontFamily: "inherit",
  "&:focus": {
    outline: "none",
    borderBottomColor: "#E87811",
  },
});

const StyledSubmitButton = styled("button")({
  padding: "14px 25px",
  backgroundColor: "#E87811",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "1rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#D16700",
  },
  "&:disabled": {
    backgroundColor: "#8B4513",
    cursor: "not-allowed",
  },
});

const StyledSubmitContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "15px",
  },
}));

const StyledContactNote = styled(Box)({
  color: "#AFAFAF",
  fontSize: "1.1rem",
  textAlign: "right",
});

// Animation variants
const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.8,
      delay: custom * 0.2,
    },
  }),
};

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    const validation = validateFormData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Use the API util function to submit the form
      const response = await submitContactForm(formData);

      // Handle the response
      const messageInfo = getResponseMessage(
        response.status,
        response.error || "Form submitted successfully!"
      );

      setSnackbar({
        open: true,
        message: messageInfo.message,
        severity: messageInfo.severity,
      });

      // If successful, reset the form
      if (response.success) {
        setFormData(initialFormState);

        // Call the onSubmit prop if provided
        if (onSubmit) {
          onSubmit(formData);
        }
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSnackbar({
        open: true,
        message: "An unexpected error occurred. Please try again.",
        severity: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledFormContainer
      initial="hidden"
      animate="visible"
      variants={slideUp}
      custom={3}
    >
      <form onSubmit={handleSubmit}>
        {/* Role Selection */}
        <StyledFormRow sx={{ marginBottom: "30px" }}>
          <StyledFormField>
            {/* <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Your Role *
            </StyledInputLabel> */}
            <RadioGroup
              row
              name="role"
              value={formData.role}
              onChange={handleChange}
              sx={{
                marginTop: "12px",
                justifyContent: "Space-evenly",
                alignItems: "flex-start",
              }}
            >
              <FormControlLabel
                value="founder"
                control={
                  <Radio
                    sx={{
                      color: errors.role
                        ? "#ff6b6b"
                        : "rgba(255, 255, 255, 0.5)",
                      "&.Mui-checked": {
                        color: "#E87811",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: errors.role ? "#ff6b6b" : "white",
                      fontSize: "1.1rem",
                    }}
                  >
                    Founder
                  </Typography>
                }
              />
              <FormControlLabel
                value="investor"
                control={
                  <Radio
                    sx={{
                      color: errors.role
                        ? "#ff6b6b"
                        : "rgba(255, 255, 255, 0.5)",
                      "&.Mui-checked": {
                        color: "#E87811",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: errors.role ? "#ff6b6b" : "white",
                      fontSize: "1.1rem",
                    }}
                  >
                    Investor
                  </Typography>
                }
              />
              <FormControlLabel
                value="partner"
                control={
                  <Radio
                    sx={{
                      color: errors.role
                        ? "#ff6b6b"
                        : "rgba(255, 255, 255, 0.5)",
                      "&.Mui-checked": {
                        color: "#E87811",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 24,
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      color: errors.role ? "#ff6b6b" : "white",
                      fontSize: "1.1rem",
                    }}
                  >
                    Partner
                  </Typography>
                }
              />
            </RadioGroup>
            {errors.role && (
              <FormHelperText
                sx={{
                  color: "#ff6b6b",
                  fontSize: "0.75rem",
                  marginTop: "3px",
                  marginLeft: "14px",
                }}
              >
                {errors.role}
              </FormHelperText>
            )}
          </StyledFormField>
        </StyledFormRow>

        {/* Name and Email */}
        <StyledFormRow sx={{ marginBottom: "60px" }}>
          <StyledFormField>
            <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Name *
            </StyledInputLabel>
            <StyledTextField
              variant="standard"
              name="name"
              placeholder="David Johnson"
              fullWidth
              onChange={handleChange}
              value={formData.name}
              error={Boolean(errors.name)}
              helperText={errors.name}
              InputProps={{
                style: { fontSize: "1.1rem", paddingBottom: "8px" },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "1.1rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "1.1rem",
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  marginLeft: 0,
                },
              }}
              required
            />
          </StyledFormField>
          <StyledFormField>
            <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Email *
            </StyledInputLabel>
            <StyledTextField
              variant="standard"
              name="email"
              placeholder="example@mail.com"
              fullWidth
              onChange={handleChange}
              value={formData.email}
              error={Boolean(errors.email)}
              helperText={errors.email}
              InputProps={{
                style: { fontSize: "1.1rem", paddingBottom: "8px" },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "1.1rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "1.1rem",
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  marginLeft: 0,
                },
              }}
              required
              type="email"
            />
          </StyledFormField>
        </StyledFormRow>

        {/* Company Name */}
        <StyledFormRow sx={{ marginBottom: "60px" }}>
          <StyledFormField>
            <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Company Name *
            </StyledInputLabel>
            <StyledTextField
              variant="standard"
              name="company"
              placeholder="Ex. StaticMania"
              fullWidth
              onChange={handleChange}
              value={formData.company}
              error={Boolean(errors.company)}
              helperText={errors.company}
              InputProps={{
                style: { fontSize: "1.1rem", paddingBottom: "8px" },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "1.1rem",
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "1.1rem",
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  marginLeft: 0,
                },
              }}
              required
            />
          </StyledFormField>
        </StyledFormRow>

        {/* Service and Budget */}
        <StyledFormRow sx={{ marginBottom: "60px" }}>
          <StyledFormField>
            <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Select Service *
            </StyledInputLabel>
            <StyledTextField
              select
              variant="standard"
              name="service"
              fullWidth
              onChange={handleChange}
              value={formData.service}
              error={Boolean(errors.service)}
              helperText={errors.service}
              InputProps={{
                style: { fontSize: "1.1rem", paddingBottom: "8px" },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        fontSize: "1.1rem",
                      },
                    },
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "1.1rem",
                },
                "& .MuiSelect-select": {
                  fontSize: "1.1rem",
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  marginLeft: 0,
                },
              }}
              required
            >
              <MenuItem value="">Select Your Service</MenuItem>
              <MenuItem value="web">Web Development</MenuItem>
              <MenuItem value="app">App Development</MenuItem>
              <MenuItem value="design">UI/UX Design</MenuItem>
            </StyledTextField>
          </StyledFormField>
          <StyledFormField>
            <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Project Budget *
            </StyledInputLabel>
            <StyledTextField
              select
              variant="standard"
              name="budget"
              fullWidth
              onChange={handleChange}
              value={formData.budget}
              error={Boolean(errors.budget)}
              helperText={errors.budget}
              InputProps={{
                style: { fontSize: "1.1rem", paddingBottom: "8px" },
              }}
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        fontSize: "1.1rem",
                      },
                    },
                  },
                },
              }}
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "1.1rem",
                },
                "& .MuiSelect-select": {
                  fontSize: "1.1rem",
                },
                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                  marginLeft: 0,
                },
              }}
              required
            >
              <MenuItem value="">Select Your Range</MenuItem>
              <MenuItem value="small">$5,000 - $10,000</MenuItem>
              <MenuItem value="medium">$10,000 - $50,000</MenuItem>
              <MenuItem value="large">$50,000+</MenuItem>
            </StyledTextField>
          </StyledFormField>
        </StyledFormRow>

        {/* Project Details */}
        {/* Project Details */}
        <StyledFormRow sx={{ marginBottom: "35px" }}>
          <StyledFormField>
            <StyledInputLabel sx={{ fontSize: "1.3rem", marginBottom: "12px" }}>
              Project Details *
            </StyledInputLabel>
            <StyledTextArea
              name="details"
              placeholder="Tell us more about your project"
              minRows={1}
              onChange={handleChange}
              value={formData.details}
              style={{
                fontSize: "1.1rem",
                padding: "10px 0",
                minHeight: "54px",
                borderBottomColor: errors.details
                  ? "#ff6b6b"
                  : "rgba(255, 255, 255, 0.3)",
              }}
            />
            {errors.details && (
              <FormHelperText
                sx={{
                  color: "#ff6b6b",
                  fontSize: "0.75rem",
                  marginTop: "3px",
                  marginLeft: 0,
                }}
              >
                {errors.details}
              </FormHelperText>
            )}
          </StyledFormField>
        </StyledFormRow>

        {/* Submit Button */}
        <StyledSubmitContainer sx={{ marginTop: "48px" }}>
          <StyledSubmitButton
            type="submit"
            style={{
              padding: "16px 30px",
              fontSize: "1.15rem",
              fontWeight: "500",
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? ( 
              <>
              Submiting{" "}
              <CircularProgress size={24} color="inherit" />
            </>
            ) : (
              <>
                Submit{" "}
                <ArrowOutwardIcon style={{ fontSize: 18, marginLeft: 6 }} />
              </>
            )}
          </StyledSubmitButton>
          <StyledContactNote sx={{ fontSize: "1.3rem" }}>
            We will contact you within 24 business hours.
          </StyledContactNote>
        </StyledSubmitContainer>
      </form>

      {/* Snackbar for showing success/error messages */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%", fontSize: "1rem" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </StyledFormContainer>
  );
};

export default ContactForm;
