import React from 'react'

import { auth, githubProvider } from './base'
import './SignIn.css'

const SignIn = ({ authHandler }) => {
  const authenticate = (provider) => {
    auth
      .signInWithPopup(provider)
      .then(authHandler)
  }

  return (
    <button
      className="SignIn"
      onClick={() => authenticate(githubProvider)}
    >
      Sign In With GitHub
    </button>
  )
}

export default SignIn