import axios from 'client';

const BASE_URL = 'http://192.168.0.194:5000';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTripPlan = async (tripData) => {
  try {
    const response = await api.post('/api/plan', tripData);
    return response.data;
  } catch (error) {
    console.error('Грешка при връзка с Node.js бекенда:', error);
    throw error;
  }
};

export default api;