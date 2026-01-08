function CreateAccount() {
  return (
    <div>
      {/* Header */}
      <div>
        <div>LOGO</div>
        <h1>Presentia</h1>
        <p>Workforce Attendance System</p>
      </div>

      {/* Main Card */}
      <div>
        <h2>Create account</h2>
        <p>For business, band or celebrity.</p>

        {/* Form */}
        <form>
          <div>
            <div>
              <label>First name</label>
              <input type="text" />
            </div>

            <div>
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <div>
              <label>Email or phone number</label>
              <input type="text" />
            </div>

            <div>
              <label>Date of birth (MM/DD/YY)</label>
              <input type="date" />
            </div>
          </div>

          <div>
            <div>
              <label>Password</label>
              <input type="password" />
            </div>

            <div>
              <label>Confirm password</label>
              <input type="password" />
            </div>
          </div>

          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <Link to="/signup">
          <button>Create Account →</button>
        </Link>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Presentia Systems Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CreateAccount;
