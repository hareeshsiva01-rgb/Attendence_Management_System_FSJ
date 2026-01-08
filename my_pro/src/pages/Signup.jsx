function Signup() {
  return (
    <div className="page">
      {/* Logo + Title */}
      <div className="header">
        <div className="logo">🏢</div>
        <h1>Presentia</h1>
        <p>Workforce Attendance System</p>
      </div>

      {/* Card */}
      <div className="card">
        <h2>Welcome Back</h2>
        <p className="subtitle">
          Sign in to your organization's workspace
        </p>

        <label>Company Name / ID</label>
        <input type="text" placeholder="Acme Corp" />

        <label>Email</label>
        <input type="email" placeholder="demo@presentia.com" />

        <label>Password</label>
        <input type="password" placeholder="••••••••" />

        <button>
          Sign In <span>→</span>
        </button>

        <div className="footer">
          <small>Protected by enterprise-grade security.</small>
          <a href="#">Forgot password?</a>
        </div>
      </div>

      <footer>© 2025 Presentia Systems Inc. All rights reserved.</footer>
    </div>
  );
}

export default Signup;
