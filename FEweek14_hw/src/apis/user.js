import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Create
export const signUp = async (userData) => {
  const { data } = await axios.post(`${BASE_URL}/users`, userData);
  return data;
};

// Update
export const updateProfile = async ({ userId, data: updatedFields }) => {
  const { data } = await axios.put(`${BASE_URL}/users/${userId}`, updatedFields);
  return data;
};

// Read
export const getMyPage = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
  return data;
};

// Delete
export const deleteAccount = async (userId) => {
  await axios.delete(`${BASE_URL}/users/${userId}`);
  return userId;
};