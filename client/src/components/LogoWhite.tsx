import { Link } from 'react-router'
import LogoImage from '../assets/logo_white.png'

function LogoWhite() {
  return (
    <><>
            <Link to='/'>
                <img src={LogoImage} alt="logo" width='250px' />
            </Link>
        </></>
  )
}

export default LogoWhite