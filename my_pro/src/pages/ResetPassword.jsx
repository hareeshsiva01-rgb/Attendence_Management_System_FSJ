import { Link } from "react-router-dom";

function ResetPassword() {
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
          <label>Enter OTP</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input type="password" />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" />
        </div>

        <button>Update Password →</button>

        <p className="text-center">
          <Link className="link" to="/signup">
            Back to Login
          </Link>
        </p>

        <p className="security-text">
          Protected by enterprise-grade security.
        </p>
      </div>

      <footer>© 2025 Presentia Systems Inc. All rights reserved.</footer>
    </div>
  );
}

export default ResetPassword;
