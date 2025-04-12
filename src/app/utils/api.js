// utils/api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

/**
 * Generic fetch wrapper with error handling
 * @param {string} endpoint - API endpoint to call
 * @param {Object} options - Fetch options
 * @returns {Promise<Object>} - Response data
 */
export const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
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
 * Submit contact form data to the API
 * @param {Object} formData - Form data to submit
 * @returns {Promise<Object>} - Response from the API
 */
export const submitContactForm = async (formData) => {
  return await fetchApi("/form/", {
    method: "POST",
    body: JSON.stringify(formData),
  });
};