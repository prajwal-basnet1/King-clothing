import {React} from 'react'
import {Directory} from '../components/directory/directory.component'
import './homepage.style.scss'
import { Hats } from '../sector/hats'
import { Jackets } from '../sector/jacket'
import {Mens} from '../sector/man'
import {Sneakers} from '../sector/sneaker'
import {Womens} from '../sector/women'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export function Homepage() {

return(

    <div className='homePage'>
        <Router>
        <Routes>
    <Route path="/" element={<Directory/> }></Route> 
    <Route path="hats" element={<Hats/>}></Route>
    <Route path="jackets" element={<Jackets/>}></Route>
    <Route path="mens" element={<Mens/>}></Route>
    <Route path="sneakers" element={<Sneakers/>}></Route>
    <Route path="womens" element={<Womens/>}></Route>
        </Routes>
        </Router>


    </div>





)




}

















