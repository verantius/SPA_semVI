import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()
// <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
return (
  <div className='goal'>
  
  <h2>{goal.produkt}</h2>
  <p>{goal.zbadano}</p>
  <p>{goal.text}</p>
  <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
   X
  </button>
    </div>
  )
}

export default GoalItem
