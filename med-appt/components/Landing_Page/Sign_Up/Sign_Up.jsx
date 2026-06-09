import "../Sign_Up/Sign_Up.css"
import { useState } from "react";

function SignUp(){

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
          <h2>Sign up</h2> <p>Already have an account? <a href="#login">login</a></p>

        <label for="role">Role:</label>
        <input type="text" placeholder="enter your role" id="role" required />

        <label for="name">Name:</label>
        <input type="text" placeholder="enter your name" id="name" required />

        <label for="phoneNumber">Phone Number:</label>
        <input
          type="number"
          placeholder="enter your phone number"
          id="phoneNumber"
          required
        />

        <label for="email">Email</label>
        <input
          type="email"
          placeholder="enter your email"
          id="email"
          required
        />

        <label for="password">Password:</label>
        <input
          type="password"
          placeholder="enter your password"
          id="password"
          required
        />

        {isValid ? <p>account created</p> : "invalid phone number"}

        <button type="submit" className="submit" onClick={handleSubmitClick}>Submit</button>
        <button type="reset" className="reset">Reset</button>
        </div>
      </form>
    )
}

export default SignUp;