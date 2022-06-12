import axios from 'axios'

//const API_URL = 'http://localhost:4000/users/'
//const API_URL2 = 'http://localhost:4000/users/'

// Register user
const register = async (inputUser) => {
  const reply = await axios.post('http://localhost:4000/users/signup', inputUser)

  if (reply.data) {
    localStorage.setItem('user', JSON.stringify(reply.data))
  }

  return reply.data
}

// Login user
const login = async (inputUser) => {
  const reply = await axios.post('http://localhost:4000/users/login', inputUser)

  if (reply.data) {
    localStorage.setItem('user', JSON.stringify(reply.data))
  }

  return reply.data
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
