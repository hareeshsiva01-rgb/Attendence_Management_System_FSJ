import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      {/* Header */}
      <div>
        <div>LOGO</div>
        <h1>Presentia</h1>
        <p>Workforce Attendance System</p>
      </div>

      {/* Card */}
      <div>
        <h2>Welcome</h2>
        <p>Create login to your organization's workspace</p>

        <div>
          <label>Company Name / ID</label>
          <input type="text" placeholder="Acme Corp" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="demo@presentia.com" />
        </div>

        {/* Create Account Button */}
        <Link to="/create-account">
          <button>Create Account →</button>
        </Link>

        <p>
          Do have an account?
          <Link to="/signup">Sign Up</Link>
        </p>

        <p>Protected by enterprise-grade security.</p>
      </div>

      {/* Footer */}
      <footer>
        © 2025 Presentia Systems Inc. All rights reserved.
      </footer>
    </div>
  );
}

export default Welcome;
