import axios from 'axios'

//const API_URL = 'http://localhost:4000/users/'
//const API_URL2 = 'http://localhost:4000/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post('http://localhost:4000/users/signup', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('http://localhost:4000/users/login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
