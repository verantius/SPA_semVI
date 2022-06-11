import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  // const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const { user } = useSelector((state) => state.auth)

  // const onLogout = () => {
  //   dispatch(logout())
  //   dispatch(reset())
  //   navigate('/')
  

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
          <FaSignInAlt />Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
          <FaUser />Register
          </Link>
        </li>
      </ul>
    </header>
  )
  }

export default Header
