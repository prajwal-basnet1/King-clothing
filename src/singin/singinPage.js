import SignIn from '../singin/signin.component'
import {SignUp} from '../singup/signup.component.js'
import './signPage.css'


export const SignInPage=()=>{
    const display="hidden"
    return(
        <div className="Signin-page">
            <SignIn/>
            <SignUp visibility={display}/>
        </div>

    )
}