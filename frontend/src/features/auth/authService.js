import axios from 'axios'

// rejestracja
const register = async (inputUser) => {
  const reply = await axios.post('http://localhost:4000/users/signup', inputUser)

  if (reply.data) 
    localStorage.setItem('user', JSON.stringify(reply.data))
  
  return reply.data
}

// logowanie
const login = async (inputUser) => {
  const reply = await axios.post('http://localhost:4000/users/login', inputUser)

  if (reply.data) 
    localStorage.setItem('user', JSON.stringify(reply.data))
  
  return reply.data
}

// wylogowywanie - usuwanie tokena
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
