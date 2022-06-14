import { useDispatch } from 'react-redux'

import { deleteGoal } from '../features/goals/goalSlice'
//import { deleteGoal } from '../features/badania/badaniaSlice'

function GoalItem({ badanie }) {
  const dispatch = useDispatch()
// <div>{new Date(badanie.createdAt).toLocaleString('en-US')}</div>
return (
  <div className='badanie'>
  
  <h2>{badanie.produkt}</h2>
  <p>{badanie.zbadano}</p>
  <p>{badanie.text}</p>
  <button onClick={() => dispatch(deleteGoal(badanie._id))} className='close'>
   X
  </button>
    </div>
  )
}

export default GoalItem
