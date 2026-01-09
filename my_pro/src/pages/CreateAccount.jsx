import { Link } from "react-router-dom";

function CreateAccount() {
  return (
    <div className="page">
      <div className="header">
        <div className="logo">🏢</div>
        <h1>Presentia</h1>
        <p>Workforce Attendance System</p>
      </div>

      <div className="card">
        <h2>Create account</h2>
        <p className="subtitle">For business, band or celebrity.</p>

        <div className="form-row">
          <div className="form-group">
            <label>First name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input type="text" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email or phone number</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Date of birth</label>
            <input type="date" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>Confirm password</label>
            <input type="password" />
          </div>
        </div>
        <Link to={"/signup"}><button>Create account</button></Link>
      </div>

      <footer>© 2025 Presentia Systems Inc. All rights reserved.</footer>
    </div>
  );
}

export default CreateAccount;
