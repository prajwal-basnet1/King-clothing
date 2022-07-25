import {React} from 'react';
import './menu-item.scss'
export function MenuItem({title,image,id,size}) {

return(

    <div 
    className={`${size} menu-item`}>
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

