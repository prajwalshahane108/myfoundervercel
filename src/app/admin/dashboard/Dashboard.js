"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
  Chip,
  Button,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import RefreshIcon from "@mui/icons-material/Refresh";
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useRouter } from 'next/navigation'; // For App Router

// Import dashboard API utils
import {
  getAllFormSubmissions,
  getDashboardStats,
  updateSubmissionStatus,
  formatDate,
  getStatusColor,
  getRoleColor,
  getServiceColor,
  getBudgetColor,
  formatBudget,
  formatService,
  formatRole,
  formatStatus,
  deleteSubmission,
} from "../../utils/dashboardApi";

// Styled components
const DashboardContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(8),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: theme.spacing(2),
  backgroundColor: "#1A1A1A",
  color: "white",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-30px",
    left: "-30px",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
    pointerEvents: "none",
  },
}));

const StatNumber = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "700",
  marginBottom: theme.spacing(1),
  color: "#E87811",
}));

const StatTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  color: "#AFAFAF",
}));

const ChartTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: "600",
  marginBottom: theme.spacing(2),
  color: "white",
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  backgroundColor: "#1A1A1A",
  color: "white",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  maxHeight: "600px",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#2A2A2A",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#555",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#666",
  },
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  "& .MuiTableCell-head": {
    backgroundColor: "#2A2A2A",
    color: "white",
    fontWeight: "600",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#222222",
  },
  "&:hover": {
    backgroundColor: "#333333",
  },
  "& .MuiTableCell-body": {
    color: "white",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px solid #444444",
}));

const StyledChip = styled(Chip)(({ theme, color }) => ({
  backgroundColor: color || theme.palette.primary.main,
  color: "white",
  fontWeight: "500",
}));

const SearchBar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#2A2A2A",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  marginBottom: theme.spacing(3),
}));

const Dashboard = () => {
  // Auth token state - in a real app, this would come from auth context/local storage
  const [token, setToken] = useState(localStorage.getItem("authToken") || ""); // Replace with actual token handling

  // Data states
  const [stats, setStats] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Fetch data on initial load
  useEffect(() => {
    // Replace with actual token handling
    // get token from local storage
    fetchDashboardData();
  }, [token]);

  useEffect(() => {
    // Check if user is already authenticated
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
      setAuthenticated(true);
    }
  }, []);
  // Fetch dashboard data
  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [statsResponse, submissionsResponse] = await Promise.all([
        getDashboardStats(token),
        getAllFormSubmissions(token),
      ]);

      if (statsResponse.success) {
        setStats(statsResponse.data.data);
      } else {
        throw new Error(
          statsResponse.error || "Failed to fetch dashboard stats"
        );
      }

      if (submissionsResponse.success) {
        setSubmissions(submissionsResponse.data.data);
      } else {
        throw new Error(
          submissionsResponse.error || "Failed to fetch submissions"
        );
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setSnackbar({
        open: true,
        message: error.message || "Error fetching dashboard data",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Open details dialog
  const handleViewDetails = (submission) => {
    setSelectedSubmission(submission);
    setDetailsDialogOpen(true);
  };

  // Open status update dialog
  const handleUpdateStatus = (submission) => {
    setSelectedSubmission(submission);
    setNewStatus(submission.status);
    setStatusDialogOpen(true);
  };

  // Submit status update
  const handleSubmitStatusUpdate = async () => {
    try {
      const response = await updateSubmissionStatus(
        selectedSubmission._id,
        newStatus,
        token
      );

      if (response.success) {
        // Update local state
        const updatedSubmissions = submissions.map((sub) =>
          sub._id === selectedSubmission._id
            ? { ...sub, status: newStatus }
            : sub
        );
        setSubmissions(updatedSubmissions);

        // Refresh stats
        fetchDashboardData();

        setSnackbar({
          open: true,
          message: "Status updated successfully",
          severity: "success",
        });
      } else {
        throw new Error(response.error || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setSnackbar({
        open: true,
        message: error.message || "Error updating status",
        severity: "error",
      });
    } finally {
      setStatusDialogOpen(false);
    }
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthenticated(false);
    router.push('/pages/Login');
  };

  // Filter submissions based on search term
  const filteredSubmissions = submissions.filter((sub) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      sub.name.toLowerCase().includes(searchLower) ||
      sub.email.toLowerCase().includes(searchLower) ||
      sub.company.toLowerCase().includes(searchLower) ||
      sub.role.toLowerCase().includes(searchLower) ||
      sub.service.toLowerCase().includes(searchLower) ||
      formatStatus(sub.status).toLowerCase().includes(searchLower)
    );
  });

  // Prepare chart data
  const prepareChartData = (counts, colorGetter) => {
    return Object.entries(counts || {}).map(([name, value]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      value,
      color: colorGetter(name),
    }));
  };

  const statusData = stats
    ? prepareChartData(stats.statusCounts, getStatusColor)
    : [];
  const roleData = stats
    ? prepareChartData(stats.roleCounts, getRoleColor)
    : [];
  const serviceData = stats
    ? prepareChartData(stats.serviceCounts, getServiceColor)
    : [];
  const budgetData = stats
    ? prepareChartData(stats.budgetCounts, getBudgetColor)
    : [];

    // const handleDeleteMember = async (memberId) => {
      
    //   try {
    //     const response = await deleteSubmission(memberId, token);
    //     if (response.success) {
    //       setSnackbar({
    //         open: true,
    //         message: "Member deleted successfully",
    //         severity: "success",
    //       });
    //     } 
        
    // }
  // Loading state
  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress
          size={60}
          thickness={4}
          style={{ color: "#E87811" }}
        />
      </Box>
    );
  }

  return (
    <DashboardContainer maxWidth="xl">
      
      {/* Header */}
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={4}>
        <Typography
          variant="h4"
          borderRadius={"10px"}
          p={2}
          component="h1"
          fontWeight="700"
          color="#111"
          bgcolor="#111"
        ></Typography>
        <Button
          variant="contained"
          startIcon={<RefreshIcon />}
          onClick={fetchDashboardData}
          sx={{
            backgroundColor: "#E87811",
            "&:hover": {
              backgroundColor: "#D16700",
            },
          }}
        >
          Refresh Data
        </Button>
        <Button
          variant="contained"
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
          sx={{
            ml: 2,
            backgroundColor: "#E87811",
            "&:hover": {
              backgroundColor: "#D16700",
            },
          }}
        >
          Logout
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <StatNumber>{stats?.totalSubmissions || 0}</StatNumber>
              <StatTitle>Total Submissions</StatTitle>
            </CardContent>
          </StyledCard>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <StatNumber>{stats?.statusCounts?.new || 0}</StatNumber>
              <StatTitle>New Inquiries</StatTitle>
            </CardContent>
          </StyledCard>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <StatNumber>{stats?.statusCounts?.inProgress || 0}</StatNumber>
              <StatTitle>In Progress</StatTitle>
            </CardContent>
          </StyledCard>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <StatNumber>{stats?.statusCounts?.completed || 0}</StatNumber>
              <StatTitle>Completed</StatTitle>
            </CardContent>
          </StyledCard>
        </Grid> */}
      </Grid>

      {/* Charts */}
      {/* <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <ChartTitle>Submissions by Status</ChartTitle>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value} submissions`, name]}
                    contentStyle={{
                      backgroundColor: "#333",
                      borderColor: "#444",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <ChartTitle>Submissions by Role</ChartTitle>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={roleData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {roleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value, name) => [`${value} submissions`, name]}
                    contentStyle={{
                      backgroundColor: "#333",
                      borderColor: "#444",
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <ChartTitle>Submissions by Service</ChartTitle>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={serviceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" fill="white" />
                  <YAxis fill="white" />
                  <Tooltip
                    formatter={(value, name) => [`${value} submissions`, name]}
                    contentStyle={{
                      backgroundColor: "#333",
                      borderColor: "#444",
                    }}
                  />
                  <Bar dataKey="value" name="Submissions">
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <ChartTitle>Submissions by Budget</ChartTitle>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={budgetData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" fill="white" />
                  <YAxis fill="white" />
                  <Tooltip
                    formatter={(value, name) => [`${value} submissions`, name]}
                    contentStyle={{
                      backgroundColor: "#333",
                      borderColor: "#444",
                    }}
                  />
                  <Bar dataKey="value" name="Submissions">
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid> */}

      {/* Submissions Table */}
      <Box mb={4}>
        <Paper
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            backgroundColor: "#1A1A1A",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            mb: 3,
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              backgroundColor: "#2A2A2A",
              "& .MuiTabs-indicator": {
                backgroundColor: "#E87811",
              },
              "& .MuiTab-root": {
                color: "#AFAFAF",
                "&.Mui-selected": {
                  color: "#E87811",
                },
              },
            }}
          >
            <Tab label="All Submissions" />
            {/* <Tab label="New" />
            <Tab label="Contacted" />
            <Tab label="In Progress" />
            <Tab label="Completed" /> */}
          </Tabs>

          {/* Search Bar */}
          <Box p={3}>
            <SearchBar>
              <SearchIcon sx={{ color: "#AFAFAF", mr: 2 }} />
              <TextField
                fullWidth
                variant="standard"
                placeholder="Search by name, email, company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                  style: { color: "white" },
                }}
              />
              {/* <IconButton>
                <FilterListIcon sx={{ color: "#AFAFAF" }} />
              </IconButton> */}
            </SearchBar>

            <StyledTableContainer>
              <Table>
                <StyledTableHead>
                  <TableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Company</StyledTableCell>
                    <StyledTableCell>Role</StyledTableCell>
                    <StyledTableCell>Service</StyledTableCell>
                    <StyledTableCell>Budget</StyledTableCell>
                    {/* <StyledTableCell>Status</StyledTableCell> */}
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </StyledTableHead>
                <TableBody>
                  {filteredSubmissions
                    .filter(
                      (submission) =>
                        tabValue === 0 ||
                        (tabValue === 1 && submission.status === "new") ||
                        (tabValue === 2 && submission.status === "contacted") ||
                        (tabValue === 3 &&
                          submission.status === "inProgress") ||
                        (tabValue === 4 && submission.status === "completed")
                    )
                    .map((submission) => (
                      <StyledTableRow key={submission._id}>
                        <StyledTableCell>
                          {formatDate(submission.createdAt)}
                        </StyledTableCell>
                        <StyledTableCell>{submission.name}</StyledTableCell>
                        <StyledTableCell>{submission.email}</StyledTableCell>
                        <StyledTableCell>{submission.company}</StyledTableCell>
                        <StyledTableCell>
                          <StyledChip
                            label={formatRole(submission.role)}
                            color={getRoleColor(submission.role)}
                            size="small"
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <StyledChip
                            label={formatService(submission.service)}
                            color={getServiceColor(submission.service)}
                            size="small"
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <StyledChip
                            label={formatBudget(submission.budget)}
                            color={getBudgetColor(submission.budget)}
                            size="small"
                          />
                        </StyledTableCell>
                        {/* <StyledTableCell>
                          <StyledChip
                            label={formatStatus(submission.status)}
                            color={getStatusColor(submission.status)}
                            size="small"
                          />
                        </StyledTableCell> */}
                        <StyledTableCell align="center">
                          <IconButton
                            onClick={() => handleViewDetails(submission)}
                            sx={{ color: "#AFAFAF" }}
                          >
                            <VisibilityIcon />
                          </IconButton>
                          {/* <IconButton
                            onClick={() =>
                              // 
                              handleDeleteMember(submission._id)
                            }
                            sx={{ color: "#AFAFAF" }}
                          >
                            <EmailIcon />
                          </IconButton> */}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </StyledTableContainer>
          </Box>
        </Paper>
      </Box>

      {/* Submission Details Dialog */}
      <Dialog
        open={detailsDialogOpen}
        onClose={() => setDetailsDialogOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#1A1A1A",
            color: "white",
            borderRadius: 3,
          },
        }}
      >
        {selectedSubmission && (
          <>
            <DialogTitle
              sx={{ borderBottom: "1px solid #444", fontWeight: "600", }}
            >
              Submission Details
            </DialogTitle>
            <DialogContent sx={{ mt: 2, }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Name
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {selectedSubmission.name}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Email
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {selectedSubmission.email}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Company
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {selectedSubmission.company}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Role
                    </Typography>
                    <StyledChip
                      label={formatRole(selectedSubmission.role)}
                      color={getRoleColor(selectedSubmission.role)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Service
                    </Typography>
                    <StyledChip
                      label={formatService(selectedSubmission.service)}
                      color={getServiceColor(selectedSubmission.service)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Budget
                    </Typography>
                    <StyledChip
                      label={formatBudget(selectedSubmission.budget)}
                      color={getBudgetColor(selectedSubmission.budget)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Status
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2}>
                      <StyledChip
                        label={formatStatus(selectedSubmission.status)}
                        color={getStatusColor(selectedSubmission.status)}
                      />
                      {/* <Button
                        size="small"
                        variant="outlined"
                        onClick={() => {
                          setDetailsDialogOpen(false);
                          handleUpdateStatus(selectedSubmission);
                        }}
                        sx={{
                          borderColor: "#E87811",
                          color: "#E87811",
                          "&:hover": {
                            borderColor: "#D16700",
                            backgroundColor: "rgba(232, 120, 17, 0.08)",
                          },
                        }}
                      >
                        Update Status
                      </Button> */}
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Submission Date
                    </Typography>
                    <Typography variant="body1" fontWeight="500">
                      {formatDate(selectedSubmission.createdAt)}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mb={3}>
                    <Typography variant="subtitle2" color="#AFAFAF">
                      Project Details
                    </Typography>
                    <Paper
                      sx={{
                        p: 2,
                        mt: 1,
                        backgroundColor: "#2A2A2A",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body1">
                        {selectedSubmission.details || "No details provided."}
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions sx={{ borderTop: "1px solid #444", p: 2 }}>
              {/* <Button
                onClick={() =>
                  (window.location.href = `mailto:${selectedSubmission.email}`)
                }
                variant="outlined"
                startIcon={<EmailIcon />}
                sx={{
                  borderColor: "#AFAFAF",
                  color: "#AFAFAF",
                  "&:hover": {
                    borderColor: "white",
                    color: "white",
                  },
                }}
              >
                Contact
              </Button> */}
              <Button
                onClick={() => setDetailsDialogOpen(false)}
                variant="contained"
                sx={{
                  backgroundColor: "#E87811",
                  "&:hover": {
                    backgroundColor: "#D16700",
                  },
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Status Update Dialog */}
      <Dialog
        open={statusDialogOpen}
        onClose={() => setStatusDialogOpen(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#1A1A1A",
            color: "white",
            borderRadius: 3,
          },
        }}
      >
        {selectedSubmission && (
          <>
            <DialogTitle
              sx={{ borderBottom: "1px solid #444", fontWeight: "600" }}
            >
              Update Submission Status
            </DialogTitle>
            <DialogContent sx={{ mt: 3 }}>
              <TextField
                select
                label="Status"
                fullWidth
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                variant="outlined"
                InputLabelProps={{
                  style: { color: "#AFAFAF" },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
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
                  "& .MuiSelect-icon": {
                    color: "#AFAFAF",
                  },
                }}
              >
                <MenuItem value="new">New</MenuItem>
                <MenuItem value="contacted">Contacted</MenuItem>
                <MenuItem value="inProgress">In Progress</MenuItem>
                <MenuItem value="completed">Completed</MenuItem>
              </TextField>
            </DialogContent>
            <DialogActions sx={{ borderTop: "1px solid #444", p: 2 }}>
              <Button
                onClick={() => setStatusDialogOpen(false)}
                sx={{ color: "#AFAFAF" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitStatusUpdate}
                variant="contained"
                sx={{
                  backgroundColor: "#E87811",
                  "&:hover": {
                    backgroundColor: "#D16700",
                  },
                }}
              >
                Update
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </DashboardContainer>
  );
};

export default Dashboard;
