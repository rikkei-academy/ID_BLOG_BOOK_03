import "../css/signup.css"
function Signup() {
    return (
        <div className="login-container">
        <div className="login-left">
          <img src="../image/logo.png" alt="" />
        </div>
        <div className="login-right">
          <form action>
            <h1>Hello</h1>
            <h3>Log in to Get Started</h3>
            <div className="full-name">
              <input type="text" name="fullName" id="fullName" placeholder="Full Name" />
              <i className="fa-solid fa-user" />
            </div>
            <div className="email">
              <input type="text" id="email" placeholder="Email" />
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="password">
              <input type="password" id="password" placeholder="Password" />
              <i className="fa-solid fa-lock" />
            </div>
            <button className="register">Register</button>
          </form>
        </div>
      </div>
    )
}
export default Signup;