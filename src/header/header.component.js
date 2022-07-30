import { Link } from "react-router-dom"
import './header.component.css'
import {ReactComponent as Image1} from '../logo/crown.svg'


export const Navbar=()=>{

return(

    <div className="header">
        <div className="logo-container">
            <Link to="/" >
                <Image1 className="logo"/>
            </Link>
        </div>
        <div className="header-options">
            <Link to="shop" className='option'>SHOP</Link>
            <Link to="/"  className='option'>CONTACT</Link>{//chaneg this 
            }
        </div>

    </div>



)




}