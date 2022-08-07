import { Link } from "react-router-dom"
import './header.component.css'
import {ReactComponent as Image1} from '../logo/crown.svg'
import {auth} from '../firebase/firebase.utils'

export const Navbar=({currentstatus})=>{

return(

    <div className="header">
        <div className="logo-container">
            <Link to="/" >
                <Image1 className="logo"/>
            </Link>
        </div>
        <div className="header-options">
            <Link to="shop" className='option'>SHOP</Link>
            {currentstatus?
            <div className="option"  onClick={()=>{auth.signOut()}}>Sign Out </div>     :
            <Link className="option" to="/signIn">Sign In</Link>
        }
        </div>

    </div>



)




}