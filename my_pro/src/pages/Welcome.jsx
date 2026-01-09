import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">🏢</div>
        <h1>Presentia</h1>
        <p>Workforce Attendance System</p>
      </div>

      <div className="card">
        <h2>Welcome</h2>
        <p className="subtitle">
          Create login to your organization's workspace
        </p>

        <div className="form-group">
          <label>Company Name / ID</label>
          <input type="text" placeholder="Acme Corp" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="demo@presentia.com" />
        </div>

        <Link to="/create-account">
          <button>Create Account →</button>
        </Link>

        <p className="text-center">
          Do have an account?{" "}
          <Link className="link" to="/signup">
            Sign Up
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

export default Welcome;
