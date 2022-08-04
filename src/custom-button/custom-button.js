import React from "react";
import './custom-button.css'



export const CustomButton=({children,...otherprops})=>{
    return(

    <button className="custom-button" {...otherprops}>
        {children}
    </button>
    )



}