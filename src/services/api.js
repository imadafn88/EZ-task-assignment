import axios from 'axios';

const API_BASE_URL = 'https://vernanbackend.ezlab.in/api/contact-us/';

export const submitContactForm = async (formData) => {
  try {
    console.log('🔵 [API] Starting form submission with data:', formData);
    
    const response = await axios.post(API_BASE_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    console.log('🟢 [API] Response received:', response);
    console.log('🟢 [API] Response status:', response.status);
    console.log('🟢 [API] Response data:', response.data);

    // Handle both 200 and 201 status codes as success
    if (response.status === 200 || response.status === 201) {
      console.log('✅ [API] Form submission successful!');
      return { 
        success: true, 
        data: response.data,
        message: 'Form Submitted Successfully!'
      };
    } else {
      console.log('🟡 [API] Unexpected status code:', response.status);
      return {
        success: false,
        error: `Unexpected status code: ${response.status}`
      };
    }
  } catch (error) {
    console.log('🔴 [API] Error occurred:', error);
    
    if (error.response) {
      // Server responded with error status
      console.log('🔴 [API] Error response data:', error.response.data);
      console.log('🔴 [API] Error response status:', error.response.status);
      return { 
        success: false, 
        error: error.response.data?.message || `Server error: ${error.response.status}`
      };
    } else if (error.request) {
      // Request made but no response received
      console.log('🔴 [API] No response received:', error.request);
      return { 
        success: false, 
        error: 'Network error: Please check your internet connection'
      };
    } else {
      // Something else happened
      console.log('🔴 [API] Other error:', error.message);
      return { 
        success: false, 
        error: error.message || 'Failed to submit form. Please try again.'
      };
    }
  }
};



// Test API connection
// Test function to check API connectivity
export const testAPIConnection = async () => {
  try {
    console.log('🔵 [TEST] Testing API connection...');
    
    // Try a simple POST request with test data
    const testData = {
      name: "Test User",
      email: "test@example.com",
      phone: "1234567890",
      message: "This is a test message"
    };
    
    const response = await axios.post(API_BASE_URL, testData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('🟢 [TEST] API test successful:', response.status, response.data);
    return { success: true, data: response.data };
    
  } catch (error) {
    console.log('🔴 [TEST] API test failed:', error);
    
    if (error.response) {
      return { 
        success: false, 
        error: `Server error: ${error.response.status} - ${JSON.stringify(error.response.data)}`
      };
    } else if (error.request) {
      return { 
        success: false, 
        error: 'No response from server - CORS or network issue'
      };
    } else {
      return { 
        success: false, 
        error: error.message 
      };
    }
  }
};