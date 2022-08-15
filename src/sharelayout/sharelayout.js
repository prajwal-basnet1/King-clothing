import { Outlet } from "react-router-dom"
import {Navbar} from '../header/header.component'
export const Sharelayout=({currentstatus})=>{

return(
    <>
    <Navbar currentstatus={currentstatus}></Navbar>
    <Outlet/>
    </>




)






}
