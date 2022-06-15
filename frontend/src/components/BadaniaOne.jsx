import { useDispatch } from 'react-redux'
import { usunBadanie } from '../features/badania/badaniaSlice'

function BadaniaOne({ badanie }) {
  const dispatch = useDispatch()
// <div>{new Date(badanie.createdAt).toLocaleString('en-US')}</div>
return (
  <div className='badanie'>
  
  <h2>{badanie.produkt}</h2>
  <p>firma: {badanie.firma}</p>
  <p>data produkcji: {badanie.produkcja}</p>
  <p>notaka: {badanie.info}</p>
  <p>zbadano: {badanie.zbadano}</p>
  
  <button onClick={() => dispatch(usunBadanie(badanie._id))} className='close'>
   X
  </button>
    </div>
  )
}

export default BadaniaOne
