import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

export const addCustomer = async (customer) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/customers`, customer);
    return response.data;
  } catch (error) {
    console.error("Error adding customer:", error);
    throw error;
  }
};

export const createCampaign = async (campaign) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/campaigns`, campaign);
    return response.data;
  } catch (error) {
    console.error("Error creating campaign:", error);
    throw error;
  }
};

// Add more API calls as needed
