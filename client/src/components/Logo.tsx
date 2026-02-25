import { Link } from 'react-router'
import LogoImage from '../assets/logo.png'

function Logo() {
    return (
        <>
            <Link to='/'>
                <img src={LogoImage} alt="logo" width='250px' />
            </Link>
        </>
    )
}

export default Logo