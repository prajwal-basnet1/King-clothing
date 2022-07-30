import {React,Component} from 'react';
import {SHOP_DATA} from './shop.data'
import {Preview} from '../shop-preview/preview-component'


class Shop extends Component {
    constructor() {
        super() 

        this.state={
            collections:SHOP_DATA
        }
    }


    render() {
        const {collections}=this.state
        return(
            <div className='shop'>
               {collections.map(({id,...othercollections})=>(
                   <Preview key={id} {...othercollections}/>
               ))} 
            </div>
        )

    }

}
export default Shop;