import { BsFillPersonCheckFill, BsFillPeopleFill, BsFillPersonXFill,BsPatchCheck } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logout, reset } from '../features/auth/authSlice'
//import { logout, reset } from '../features/form/formSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'><BsPatchCheck />  Laboratory Manager</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn1' onClick={onLogout}>
              <BsFillPersonXFill /> wyloguj
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <BsFillPersonCheckFill /> zaloguj
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <BsFillPeopleFill /> zarejestruj
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
