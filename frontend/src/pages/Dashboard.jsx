import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import BadaniaAll from '../components/BadaniaAll'
import BadaniaOne from '../components/BadaniaOne'
import { pobierzBadanie, reset } from '../features/badania/badaniaSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.form)

  const { badania, isError} = useSelector(
    (state) => state.badania
  )
  useEffect(() => {
    if (isError) {
      console.log("error")
    }
    if (!user) {
      navigate('/home')
    }
    dispatch(pobierzBadanie())
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
      
      <BadaniaAll />

      <section className='content'>

        {badania.length > 0 ? (
          <div className='badania'>
            {badania.map((badanie) => (
              <BadaniaOne key={badanie._id} badanie={badanie} />
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
