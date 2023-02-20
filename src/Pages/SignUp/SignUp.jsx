import React, { useState } from 'react'
import Logo from '../../assets/LinkedInLogo.svg'
import './SignUp.scss'
import {FcGoogle} from "react-icons/fc"


const SignUp = () => {
  // const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const {email, password} = formData

  function onChange(e) {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]:e.target.value,
    }))
  }

  function onSubmit(e){
    e.preventDefault()
    alert("success")
    console.log(formData)
  }

  const [showPassword, setShowPassword] = useState(false)
  function passwordState(){
    setShowPassword(prevState => !prevState)
  }

  return (
    <section className='signup'>
      <div className='logoDiv'>
        <img src={Logo} className="logo" alt="logo" />
      </div>

      <h1>Make the most of your professional Life</h1>
      <div className='form-col'>
        <form onSubmit={onSubmit}>
          <label>Email or Phone number</label>
          <input 
            type='email'
            id='email'
            value={email}
            onChange={onChange}
            required
            
          />

          <label>Password</label>

          <div className='password'>
            <input 
              type={showPassword ? "text" : "password"}
              id='password'
              value={password}
              onChange={onChange}
            />
            {showPassword ? 
              <p className='hide' onClick={passwordState}>Hide</p>
              :
              <p className='hide' onClick={passwordState}>Show</p>
            }
          </div>

          <p className='p-text'>By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement, Privacy Policy</span>, and <span>Cookie Policy</span></p>

          <button 
            className='agreeBtn'
            type='submit'
            
          >
            Agree & Join
          </button>
          
          <p className='or'>or</p>
          
          <button 
            type='submit'
            className='googleBtn'
            
          >
            <FcGoogle
              className='googleFont'
            />
            Continue with Google
          </button>

        </form>

        <h6>Already on LinkedIn? <span>Sign in</span> </h6>
      </div>

      <p className='p-help'>Looking to create a page for a business? <span>Get help</span></p>
    </section>
  )
}

export default SignUp