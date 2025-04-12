  // utils/formUtils.js

  /**
   * Validates email format
   * @param {string} email - Email to validate
   * @returns {boolean} - Whether email is valid
   */
  export const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    
    /**
     * Validates form data
     * @param {Object} formData - Form data to validate
     * @returns {Object} - Validation result with errors if any
     */
    export const validateFormData = (formData) => {
      const errors = {};
    
      // Required fields
      const requiredFields = ['name', 'email', 'company', 'service', 'budget', 'role', 'details' ];
      
      requiredFields.forEach(field => {
        if (!formData[field] || formData[field].trim() === '') {
          errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        }
      });
    
      // Email validation
      if (formData.email && !isValidEmail(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    
      return {
        isValid: Object.keys(errors).length === 0,
        errors
      };
    };
    
    /**
     * Gets message based on API response status
     * @param {number} status - HTTP status code
     * @param {string} defaultMessage - Default message to show
     * @returns {Object} - Message and severity for snackbar
     */
    export const getResponseMessage = (status, defaultMessage = null) => {
      switch (status) {
        case 201:
          return {
            message: "Form submitted successfully!",
            severity: "success"
          };
        case 400:
          return {
            message: defaultMessage || "Invalid form data. Please check your inputs.",
            severity: "error"
          };
        case 500:
          return {
            message: "Server error. Please try again later.",
            severity: "error"
          };
        case 0:
          return {
            message: "Network error. Please check your connection and try again.",
            severity: "error"
          };
        default:
          return {
            message: defaultMessage || "An error occurred. Please try again.",
            severity: "error"
          };
      }
    };
    
    /**
     * Initial form state
     */
    export const initialFormState = {
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      details: "",
      role: ""
    };