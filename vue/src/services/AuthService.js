import axios from 'axios';

export default {

  login(user) {
    return axios.post('/login', user)
  },

  register(user) {
    return axios.post('/register', user)
  },
  
  getListUsers() {
    return axios.get('/users')
  },

  findUserByUsername(username) {
    return axios.get(`/users/${username}`)
  }
}
