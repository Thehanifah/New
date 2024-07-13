import axios from 'axios';

const API_URL = '/api/products'; 

const getProducts = async (organizationId, reverseSort = false, page = 1, size = 36, appId, apiKey) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        organization_id: organizationId,
        reverse_sort: reverseSort,
        page: page,
        size: size,
        Appid: appId,
        Apikey: apiKey
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default getProducts;


