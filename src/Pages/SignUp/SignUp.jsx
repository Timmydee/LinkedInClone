import React from 'react'
import Logo from '../../assets/LinkedInLogo.svg'
import './SignUp.scss'
import {FcGoogle} from "react-icons/fc"


const SignUp = () => {
  return (
    <section className='signup'>
      <div className='logoDiv'>
        <img src={Logo} className="logo" alt="logo" />
      </div>

      <h1>Make the most of your professional Life</h1>
      <div className='form-col'>
        <form>
          <label>Email or Phone number</label>
          <input 
            type='password'
          />

          <label>Email or Phone number</label>
          <input 
            type='password'
          />

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