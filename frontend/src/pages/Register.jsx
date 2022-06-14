import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' 

import { BsFillPeopleFill, BsCaretRight } from 'react-icons/bs'

import { register, reset } from '../features/auth/authSlice'
//import { register, reset } from '../features/form/formSlice'


function Register() {
  const [info_user, set_info_user] = useState({
   // name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { /*name,*/ email, password, password2 } = info_user

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess } = useSelector(
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
  }, [user, isError, isSuccess, navigate, dispatch])

  const onChange = (e) => {
    set_info_user((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

   const onSubmit = (e) => {
     e.preventDefault()

    if (password !== password2) {
      alert('podane hasła są inne')
    } else {
      const userData = {
        /*name,*/
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <BsFillPeopleFill /> Rejestracja
        </h1>
        <p>zarejestruj się, aby rozpocząć planowanie badań</p>
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
              placeholder='Podaj swój email'
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
              placeholder='Podaj hasło'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              placeholder='Potwierdź hasło'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'><BsCaretRight />
              zarejestruj
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
