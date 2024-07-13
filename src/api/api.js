import axios from 'axios';

const API_URL = '/api/products'; 

const getProducts = async (organizationId, reverseSort = false, page = 1, size = 36, appId, apiKey) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        organization_id: process.env.ORGANIZATION_ID,
        reverse_sort: reverseSort,
        page: page,
        size: size,
        Appid: process.env.APP_ID,
        Apikey: process.env.API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default getProducts;


