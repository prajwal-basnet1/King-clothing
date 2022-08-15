import {React} from 'react'
import {Directory} from '../components/directory/directory.component'
import './homepage.style.scss'
import { Hats } from '../sector/hats'
import { Jackets } from '../sector/jacket'
import {Mens} from '../sector/man'
import {Sneakers} from '../sector/sneaker'
import {Womens} from '../sector/women'
import Shop from '../shop/shop.component'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { SignInPage } from '../singin/singinPage'
// import { Navbar } from '../header/header.component'
import {Sharelayout} from '../sharelayout/sharelayout'
import { SignUp } from '../singup/signup.component'


export function Homepage({currentstatus}) {

return(
    <div className='homePage'>
    <Router>
    <Routes>
            <Route path="/" element={<Sharelayout currentstatus={currentstatus}/>}>
                <Route path="signin" element={<SignInPage/>}></Route>
                <Route path="signup" element={<SignUp/>}></Route>
                <Route index path="/" element={<Directory/> }></Route>
                <Route path="shop" element={<Shop/>}></Route>
                <Route path="hats" element={<Hats/>}></Route>
                <Route path="jackets" element={<Jackets/>}></Route>
                <Route path="mens" element={<Mens/>}></Route>
                <Route path="sneakers" element={<Sneakers/>}></Route>
                <Route path="womens" element={<Womens/>}></Route>
            </Route>
    </Routes>
    </Router>

    </div>

)

}


