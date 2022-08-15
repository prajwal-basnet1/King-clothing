import {React,Component} from 'react'
import FormInput from '../form/form-input'
import './singin-component.css'
import {CustomButton} from '../custom-button/custom-button'
import {signInWithGoogle} from '../firebase/firebase.utils'
import { NavLink } from 'react-router-dom'

class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.setState({
            email:'',
            password:''
        })

    }
    handleChange=(event)=>{
        const {name,value} =event.target;
        this.setState(
            {
            [name]:value
            }
        )
    }


render() {
    return(
        <div className='sign-in' >

            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>

                <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required/>
                <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required/>
                <div className='buttons'>
                <CustomButton type="submit" value="submit form">Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
                <p className='register-acc'>Don't have an account? &nbsp;
                <NavLink to="/signup">Sign up</NavLink>  
                </p>

            </form>

        </div>
    )
}

}
export default SignIn