import {Homepage} from './pages/homepage.component'
import {React,Component} from 'react'
import './App.scss'
import {auth} from './firebase/firebase.utils'


class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentstatus:null,
        }

   }
   unsubscriptfromAuth=null
   componentDidMount() {

    this.unsubscriptfromAuth=auth.onAuthStateChanged((user)=>{
        this.setState({currentstatus:user})
    })
   }
   componentWillUnmount() {
    this.unsubscriptfromAuth()
   }

    render()     {
        return(
            <div >
                <Homepage currentstatus={this.state.currentstatus}/>
            </div>
        )
    }
}

export default App;
