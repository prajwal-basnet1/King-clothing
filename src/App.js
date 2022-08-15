import {Homepage} from './pages/homepage.component'
import {React,Component} from 'react'
// import { Navbar } from './header/header.component'
import './App.scss'
import {auth} from './firebase/firebase.utils'
import {createUserProfile} from './firebase/firebase.utils'
import {onAuthStateChanged} from 'firebase/auth'
import {onSnapshot} from 'firebase/firestore'


class App extends Component {
    constructor(props) {
        super(props)
        this.state={
            currentstatus:null,
        }

   }
   unsubscriptfromAuth=null

   componentDidMount() {
    this.unsubscriptfromAuth=onAuthStateChanged( auth,async userAuth=>{
        if(userAuth) {
            const userRef=await createUserProfile(userAuth)
            onSnapshot(userRef,snapshot=>

                {this.setState({
                    currentstatus:{
                        id:snapshot.id,
                        ...snapshot.data()
                    }

                })}     
            )
        }
        else{
            this.setState({
            currentstatus:userAuth
            })
        }

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
