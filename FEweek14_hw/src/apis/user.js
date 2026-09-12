import axios from 'axios';

export const signUp = (userData) => axios.post('/api/users', userData);

export const updateProfile = ({ userId, data }) =>
  axios.put(`/api/users/${userId}`, data);

export const getMyPage = (userId) =>
  axios.get(`/api/users/${userId}`).then((res) => res.data);

export const deleteAccount = (userId) => axios.delete(`/api/users/${userId}`);