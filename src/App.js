import {Homepage} from './pages/homepage.component'
import './App.scss'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

const Hatspage=()=>{
    return(
        <h1>Welcome to Hats page</h1>
    )
}



function App() {
    return(
        <>
        <Homepage/>
        </>
    )
}

export default App;
