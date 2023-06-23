import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div className='nav'>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/shop'>Shop</Link>
            <Link className='navLink' to='/contact'>Contact</Link>
        </div>
    )
} 