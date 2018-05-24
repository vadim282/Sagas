import ApiCreator from './api'

const api = ApiCreator('localhost:3001');

export const getUsers = () => api.get('users');
export const getUsersByFilter = ({ payload }) => {
  console.log(payload);
  return api.get(`users?${payload}`);
}

export const postUser = user => api.post('users', {
  body: JSON.stringify(user),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});


