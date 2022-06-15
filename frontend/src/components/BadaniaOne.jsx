import { useDispatch } from 'react-redux'
import { usunBadanie } from '../features/badania/badaniaSlice'

function BadaniaOne({ badanie }) {
  const dispatch = useDispatch()
// <div>{new Date(badanie.createdAt).toLocaleString('en-US')}</div>
return (
  <div className='badanie'>
  
  <h2>Produkt:  {badanie.produkt}</h2>
  <p>{badanie.zbadano}</p>
  <p>{badanie.text}</p>
  
  <button onClick={() => dispatch(usunBadanie(badanie._id))} className='close'>
   X
  </button>
    </div>
  )
}

export default BadaniaOne
