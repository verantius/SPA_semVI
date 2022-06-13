import { useState, useEffect } from 'react'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
//import Spinner from '../components/Spinner'

function Login() {
  const [info_user, set_info_user] = useState({
    email: '',
    password: '',
  })

  const { email, password } = info_user

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user,/* isLoading,*/ isError, isSuccess, /*message*/ } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      alert("wystąpił błąd strony")
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, /*message,*/ navigate, dispatch])

  const onChange = (e) => {
    set_info_user((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  // if (isLoading) {
  //   return <Spinner />
  // }

  return (
    <>
      <section className='heading'>
        <h1>
          <BsFillPersonCheckFill /> Zaloguj
        </h1>
        <p>zaloguj się, aby dodać badanie</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
