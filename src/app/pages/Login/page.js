"use client";
import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRouter } from "next/navigation"; // For App Router
import Image from "next/image";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

// Styled components
const AuthContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#111111",
  paddingTop: theme.spacing(8),
  //   marginBottom: theme.spacing(8),
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(8),
  backgroundColor: "#1A1A1A",
  color: "white",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  width: "100%",
  maxWidth: "450px",
  position: "relative",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50px",
    left: "-50px",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
    pointerEvents: "none",
  },
}));

const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#E87811",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  "& .MuiInputBase-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#444444",
    },
    "&:hover fieldset": {
      borderColor: "#666666",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E87811",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#AFAFAF",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#E87811",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 0),
  marginTop: theme.spacing(1),
  backgroundColor: "#E87811",
  "&:hover": {
    backgroundColor: "#D16700",
  },
}));

const Auth = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleToggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setSnackbar({
          open: true,
          message: isLogin ? "Login successful!" : "Registration successful!",
          severity: "success",
        });

        // Store token and call callback
        localStorage.setItem("authToken", data.token);
        if (onAuth) {
          onAuth(data.token);
        }
        // redirect on dashboard
        router.push("/admin/AppLayout");
      } else {
        // Error
        throw new Error(data.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Auth error:", error);
      setSnackbar({
        open: true,
        message: error.message || "Authentication failed",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  // For demo purposes - bypass actual login
  const handleDemoLogin = () => {
    const demoToken = "demo-token-12345";
    localStorage.setItem("authToken", demoToken);

    setSnackbar({
      open: true,
      message: "Demo login successful!",
      severity: "success",
    });

    if (onAuth) {
      onAuth(demoToken);
    }
  };

  return (
    <AuthContainer maxWidth="xl">
      <StyledPaper elevation={6}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <IconBox>
            {/* <LockOutlinedIcon /> */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{
                marginRight: "4px",
                borderRadius: "50%",
                backgroundColor: "white",
              }}
            />
          </IconBox>
          <Typography component="h1" variant="h5" fontWeight="600" mb={4}>
            {isLogin ? "Sign In" : "Create Account"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} width="100%">
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{ mb: 2 }}
            >
              {loading ? (
                <CircularProgress size={24} color="#FFFFFF" />
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </StyledButton>
            {/* <StyledButton
              fullWidth
              variant="contained"
              onClick={handleDemoLogin}
              sx={{
                mb: 2,
                backgroundColor: "#555",
                "&:hover": {
                  backgroundColor: "#666",
                },
              }}
            >
              Demo Login (No Auth)
            </StyledButton> */}
            {/* <Button
              fullWidth
              onClick={handleToggleMode}
              sx={{
                color: "#AFAFAF",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Sign In"}
            </Button> */}
          </Box>
        </Box>
      </StyledPaper>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </AuthContainer>
  );
};

export default Auth;
