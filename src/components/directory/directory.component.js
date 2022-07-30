import {React,Component} from 'react';
import { MenuItem } from '../../menu-item/menu-item';
import './directory.style.scss'


export class Directory extends Component{

constructor(props) {
    super(props)


    this.state={
        section:[
            {
            title:"Hats",
            imgSrc:'https://images.unsplash.com/photo-1595642527925-4d41cb781653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            id:1,
        },
            {
            title:"Jackets",
            imgSrc:'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            id:2
        },
            {
            title:"Sneakers",
            imgSrc:'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            id:3
        },
            {
            title:"Womens",
            imgSrc:'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=787&q=80',
            size:'large',
            id:4
        },
            {
            title:"Mens",
            imgSrc:'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            size:'large',   
            id:5
        }
        ]

    }
}




render() {
return(

    <div className='directory' >
        {this.state.section.map(
            ({title,imgSrc,id,size})=>(
        <MenuItem key={id} image={imgSrc} title={title} size={size}></MenuItem> )
        
        )}
    </div>




)

}

}