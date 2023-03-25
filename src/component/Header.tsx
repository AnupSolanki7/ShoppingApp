import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../redux/login'
import {FaShoppingCart} from 'react-icons/fa'
import {RxDashboard} from 'react-icons/rx'
import "../styles/header.css"

const Header = () => {
    const cartItems = useSelector((state:any) => state.cart.cartItem)
    const dispatch = useDispatch()

    

    return (
        <nav className='nav-bar'>
            <div className="logo">
                <h1>
                    Shopping App
                </h1>
            </div>
            <div className="links">
                <Link to="/"> <RxDashboard/> Home</Link>
                <Link to="/cart"><FaShoppingCart/> Cart 
                 <span className='noti'>
                    {cartItems.length}
                 </span>
                 </Link>
                <button onClick={() => dispatch(startLogout())} >Logout</button>
            </div>
        </nav>
    )
}

export default Header