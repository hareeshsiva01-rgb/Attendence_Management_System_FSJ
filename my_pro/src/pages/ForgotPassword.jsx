import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">🏢</div>
        <h1>Presentia</h1>
        <p>Workforce Attendance System</p>
      </div>

      <div className="card">
        <h2>Forgot Password</h2>

        <div className="form-group">
          <label>Employee ID</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>
        <Link className="link" to={"/reset-password"}><button>Generate OTP →</button></Link>
        

        <p className="text-center">Check your Email</p>

        <p className="security-text">
          Protected by enterprise-grade security.
        </p>
      </div>

      <footer>© 2025 Presentia Systems Inc. All rights reserved.</footer>
    </div>
  );
}

export default ForgotPassword;
