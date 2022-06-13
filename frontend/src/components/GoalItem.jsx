import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()
// <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
//<button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
//  X
//</button>
  return (
    <div className='goal'>
     
      <h2>{goal.text}</h2>
    </div>
  )
}

export default GoalItem
