function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">🏢</div>
          <div className="brand-text">
            <h3>Presentia</h3>
            <p>Attendance System</p>      
          </div>
        </div>

        

        <div className="sidebar-footer">
          <p className="user-name">John Doe</p>
          <p className="user-role">Senior Developer</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Bar */}
        <div className="dashboard-header">
          <div>
            <h2>Good Morning, John</h2>
            <p className="subtitle">
              Here’s your attendance overview for today.
            </p>
          </div>

          <div className="date-box">
            Sunday, December 14th, 2025
          </div>
        </div>

        {/* Top Cards */}
        <div className="dashboard-cards">
          {/* Check-in Card */}
          <div className="card checkin-card">
            <p className="status-text">Smart Check-in</p>
            <p className="status-sub">
              Location Verified: HQ Office (Within 50m)
            </p>

            <h1 className="timer">00:00:00</h1>
            <p className="work-label">WORK DURATION</p>

            <div className="button-group">
              <button className="primary-btn">▶ Clock In</button>
              <button className="secondary-btn">☕ Break</button>
            </div>
          </div>

          {/* Clock + Stats */}
          <div className="side-widgets">
            <div className="card clock-card">
              <div className="clock-circle"></div>
            </div>

            <div className="card stats-card">
              <p className="stat-title">Monthly Attendance</p>
              <h2>92%</h2>
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <p className="stat-sub">22/24 Working Days Present</p>
            </div>

            <div className="card leave-card">
              <p className="stat-title">Leave Balance</p>
              <div className="leave-row">
                <span>Casual</span>
                <span className="badge success">4 Available</span>
              </div>
              <div className="leave-row">
                <span>Sick</span>
                <span className="badge info">7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card activity-card">
          <h3>Recent Activity</h3>

          <div className="activity-item">
            <span className="activity-icon checkin"></span>
            <div>
              <p>Check In</p>
              <small>Office HQ</small>
            </div>
            <span className="activity-time">09:00 AM</span>
          </div>

          <div className="activity-item">
            <span className="activity-icon checkout"></span>
            <div>
              <p>Check Out</p>
              <small>Office HQ</small>
            </div>
            <span className="activity-time">06:00 PM</span>
          </div>

          <div className="activity-item">
            <span className="activity-icon checkin"></span>
            <div>
              <p>Check In</p>
              <small>Office HQ</small>
            </div>
            <span className="activity-time">09:15 AM</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
