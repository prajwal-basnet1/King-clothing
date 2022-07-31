import {React,Component} from 'react'
import FormInput from '../form/form-input'
import './singin-component.css'

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
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required/>
                <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required/>
                <input type="submit" value="submit form"></input>
            </form>
        </div>
    )
}

}
export default SignIn