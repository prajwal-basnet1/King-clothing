import {useState} from 'react'
import FormInput from '../form/form-input'
import {CustomButton} from '../custom-button/custom-button'
import {auth} from '../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {createUserProfile} from '../firebase/firebase.utils'
import './signup.component.css'


export function SignUp( {visibility}) {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [displayName,setDisplayName]=useState('')

    const handleSubmit=async event=>{
        event.preventDefault()
        if(password!==confirmPassword) {
            alert("Password do not match")
            return
        }

        try{
            const {user} = await createUserWithEmailAndPassword(auth,email,password)
            await createUserProfile(user,{displayName})

            setEmail("")
            setPassword("")
            setConfirmPassword("")
            setDisplayName("")

        }

        catch(error) {
            console.log(error)
        }

    }


    return(
        <div className={`${visibility==="hidden"?"hidden":''}signup`} >
            <h2 className='title'>
                I do not have an account
            </h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>

                <FormInput type="text" 
                name='displayname' 
                value={displayName} 
                onChange={(e)=>{setDisplayName(e.target.value)}} 
                label="Display Name"
                required>
                </FormInput>

                <FormInput type="text"
                name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                label="Email"
                required
                >
                </FormInput>

                <FormInput type="password"
                name="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                label="Password"
                required
                >
                </FormInput>

                <FormInput type="password"
                name="Confirm Password"
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                label="Confirm Password"
                required
                >
                </FormInput>

                <CustomButton type="submit" >Sign up</CustomButton>
            </form>


        </div>
    )


}