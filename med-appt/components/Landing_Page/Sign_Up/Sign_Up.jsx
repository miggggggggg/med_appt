import "../Sign_Up/Sign_Up.css"

function SignUp(){

    return(
        <form action="">
        <div class="formContainer">
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

        <button type="submit" class="submit">Submit</button>
        <button type="reset" class="reset">Reset</button>
        </div>
      </form>
    )
}