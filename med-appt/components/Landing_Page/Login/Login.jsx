import "../Login/Login.css"
import { useState } from "react"

function Login(){

  const [isValid, setIsValid] = useState(false)
  
  
  function handleSubmitClick(event){
      if (document.getElementById("phoneNumber".value != 10)){
        setIsValid(false)
      }
      else{
        setIsValid(true)
      }
      }

    return(
        <form action="">
      <div className="formContainer">
        <h1>Login</h1>

        <h2>
          Don't Have an account?
          <a className="anchorSignUp" href="#signup">Sign up</a>
        </h2>

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          required
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="enter your password"
          required
        />

        <button type="submit" className="login" onClick={handleSubmitClick}>Login</button>
        <button type="reset" className="reset">Reset</button>

        <a href="#forgotpw">Forgot Password?</a>
      </div>
    </form>
    )
}

export default Login;