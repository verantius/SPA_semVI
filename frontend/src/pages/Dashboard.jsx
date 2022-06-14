import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'

import GoalItem from '../components/GoalItem'

import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const { goals, isError} = useSelector(
    (state) => state.goals
  )
  useEffect(() => {
    if (isError) {
      console.log("error")
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getGoals())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, dispatch])

  return (
    <>
    
      <section className='heading'>
        <h1>Witaj {user && user.email}</h1>
        <p>rozpocznij badania</p>
        
      </section>
      
      <GoalForm />

      <section className='content'>

        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>Nie dodałeś jeszcze badań</h3>
        )}
      </section>
    
    
    </>
    
    )
    
}
export default Dashboard
