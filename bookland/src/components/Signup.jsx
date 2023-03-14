import "../css/signup.css"
function Signup() {
    return(
        <div className="signup-container">
        <div className="signup-left">
          <img src="../image/logo1.png" alt="" />
        </div>
        <div className="signup-right">
          <form action>
            <h1>Hello Again!</h1>
            <h3>Wellcome Back</h3>
            <div className="email">
              <input type="text" id="email" placeholder="Email" />
              <i className="fa-solid fa-envelope" />
            </div>
            <div className="password">
              <input type="password" id="password" placeholder="Password" />
              <i className="fa-solid fa-lock" />
            </div>
            <button className="register">Register</button><br />
            <button className="forgot-pass">Forgot Password</button>
          </form>
        </div>
      </div>
    )
}
export default Signup;