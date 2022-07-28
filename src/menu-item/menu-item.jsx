import {React} from 'react';
import './menu-item.scss'
import { useNavigate } from 'react-router-dom';



export function MenuItem({title,image,id,size}) {
    const navigate=useNavigate()
return(

    <div 
    className={`${size} menu-item`}
    onClick={()=>navigate(`${title.toLowerCase()}`)} 
    >
        <div className='background-image' 
        style={{
            backgroundImage:`Url(${image})`
        }} >
            </div>

        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>




    </div>



)








}

