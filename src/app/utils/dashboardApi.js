// utils/dashboardApi.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

/**
 * Fetch wrapper for authenticated requests
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options
 * @param {string} token - Auth token
 * @returns {Promise<Object>} - Response data
 */
export const fetchWithAuth = async (endpoint, options = {}, token) => {
  // if (!token) {
  //   throw new Error("Authentication token is required");
  // }

  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        // credentials: "same-origin",
        ...options.headers,
      },
    });

    // Parse the response data
    let data;
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    // Handle different response statuses
    if (response.ok) {
      return { success: true, data, status: response.status };
    } else {
      return { 
        success: false, 
        error: data.message || "An error occurred", 
        status: response.status,
        data 
      };
    }
  } catch (error) {
    console.error("API request failed:", error);
    return { 
      success: false, 
      error: "Network error. Please check your connection and try again.",
      status: 0
    };
  }
};

/**
 * Get all form submissions
 * @param {string} token - Auth token
 * @returns {Promise<Object>} - Form submissions data
 */
export const getAllFormSubmissions = async (token) => {
  return await fetchWithAuth("/form/", {
    method: "GET",
  }, token);
};

/**
 * Get dashboard statistics
 * @param {string} token - Auth token
 * @returns {Promise<Object>} - Dashboard statistics
 */
export const getDashboardStats = async (token) => {
  return await fetchWithAuth("/admin/dashboard", {
    method: "GET",
  }, token);
};

/**
 * Update submission status
 * @param {string} id - Submission ID
 * @param {string} status - New status
 * @param {string} token - Auth token
 * @returns {Promise<Object>} - Response from API
 */
export const updateSubmissionStatus = async (id, status, token) => {
  return await fetchWithAuth(`/form/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  }, token);
};


/**
 * Delete submission
 * @param {string} id - Submission ID
 * @param {string} token - Auth token
 * @returns {Promise<Object>} - Response from API
 */
export const deleteSubmission = async (id, token) => {
  return await fetchWithAuth(`/form/${id}`, {
    method: "DELETE",
  }, token);
}

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} - Formatted date
 */
export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

/**
 * Get color for status
 * @param {string} status - Status string
 * @returns {string} - Color for the status
 */
export const getStatusColor = (status) => {
  switch (status) {
    case 'new':
      return '#2196f3'; // Blue
    case 'contacted':
      return '#ff9800'; // Orange
    case 'inProgress':
      return '#9c27b0'; // Purple
    case 'completed':
      return '#4caf50'; // Green
    default:
      return '#757575'; // Grey
  }
};

/**
 * Get color for role
 * @param {string} role - Role string
 * @returns {string} - Color for the role
 */
export const getRoleColor = (role) => {
  switch (role) {
    case 'founder':
      return '#e91e63'; // Pink
    case 'investor':
      return '#673ab7'; // Deep Purple
    case 'partner':
      return '#00bcd4'; // Cyan
    default:
      return '#757575'; // Grey
  }
};

/**
 * Get color for service
 * @param {string} service - Service string
 * @returns {string} - Color for the service
 */
export const getServiceColor = (service) => {
  switch (service) {
    case 'web':
      return '#3f51b5'; // Indigo
    case 'app':
      return '#009688'; // Teal
    case 'design':
      return '#ff5722'; // Deep Orange
    default:
      return '#757575'; // Grey
  }
};

/**
 * Get color for budget
 * @param {string} budget - Budget string
 * @returns {string} - Color for the budget
 */
export const getBudgetColor = (budget) => {
  switch (budget) {
    case 'small':
      return '#8bc34a'; // Light Green
    case 'medium':
      return '#ffc107'; // Amber
    case 'large':
      return '#f44336'; // Red
    default:
      return '#757575'; // Grey
  }
};

/**
 * Format budget for display
 * @param {string} budget - Budget code
 * @returns {string} - Formatted budget string
 */
export const formatBudget = (budget) => {
  switch (budget) {
    case 'small':
      return '$5,000 - $10,000';
    case 'medium':
      return '$10,000 - $50,000';
    case 'large':
      return '$50,000+';
    default:
      return 'Unknown';
  }
};

/**
 * Format service for display
 * @param {string} service - Service code
 * @returns {string} - Formatted service string
 */
export const formatService = (service) => {
  switch (service) {
    case 'web':
      return 'Web Development';
    case 'app':
      return 'App Development';
    case 'design':
      return 'UI/UX Design';
    default:
      return 'Unknown';
  }
};

/**
 * Format role for display
 * @param {string} role - Role code
 * @returns {string} - Formatted role string
 */
export const formatRole = (role) => {
  return role.charAt(0).toUpperCase() + role.slice(1);
};

/**
 * Format status for display
 * @param {string} status - Status code
 * @returns {string} - Formatted status string
 */
export const formatStatus = (status) => {
  switch (status) {
    case 'new':
      return 'New';
    case 'contacted':
      return 'Contacted';
    case 'inProgress':
      return 'In Progress';
    case 'completed':
      return 'Completed';
    default:
      return 'Unknown';
  }
};