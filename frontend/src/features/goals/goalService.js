import axios from 'axios'
//te routy sa chronione
// tworzenie badań
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post('http://localhost:4000/badania/', goalData, config)

  return response.data
}
// pobieranie badań
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  
  const response = await axios.get('http://localhost:4000/badania/', config)
  
  return response.data
}


// usuwanie badań
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete('http://localhost:4000/badania/' + goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
