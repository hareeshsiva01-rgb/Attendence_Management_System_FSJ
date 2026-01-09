import { useState } from "react";

function Attendance() {
  const [selectedDate, setSelectedDate] = useState(14);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // 🔜 Later: API call like fetchAttendanceByDate(date)
    console.log("Clicked date:", date);
  };

  const calendarDays = [
    "Su","Mo","Tu","We","Th","Fr","Sa",
    1,2,3,4,5,6,
    7,8,9,10,11,12,13,
    14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,
    28,29,30,31
  ];

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

        <nav className="sidebar-menu">
          <div className="menu-item">Dashboard</div>
          <div className="menu-item active">Attendance</div>
          <div className="menu-item">Leaves</div>
          <div className="menu-item">Settings</div>
        </nav>

        <div className="sidebar-footer">
          <p className="user-name">John Doe</p>
          <p className="user-role">Senior Developer</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-header">
          <div>
            <h2>Attendance Calendar</h2>
            <p className="subtitle">
              View your monthly attendance log and shift details.
            </p>
          </div>

          <button className="secondary-btn">⬇ Export Report</button>
        </div>

        <div className="attendance-layout">
          {/* Calendar */}
          <div className="card attendance-calendar">
            <div className="calendar-header">
              <h3>December 2025</h3>
              <div className="calendar-nav">
                <button className="icon-btn">‹</button>
                <button className="icon-btn">›</button>
              </div>
            </div>

            <div className="calendar-grid">
              {calendarDays.map((day, index) => {
                if (typeof day !== "number") {
                  return (
                    <div key={index} className="calendar-cell day-name">
                      {day}
                    </div>
                  );
                }

                const statusClass =
                  day === 9 ? "absent" :
                  day === 4 ? "late" :
                  "present";

                return (
                  <button
                    key={index}
                    className={`calendar-cell calendar-btn ${statusClass} ${
                      selectedDate === day ? "selected" : ""
                    }`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Panel */}
          <div className="attendance-side">
            <div className="card details-card">
              <h4>Details</h4>
              <p className="details-date">
                December {selectedDate}, 2025
              </p>

              <div className="details-item">
                <span className="activity-icon checkin"></span>
                <span>Check In</span>
                <span className="activity-time">09:00 AM</span>
              </div>

              <div className="details-item">
                <span className="activity-icon checkout"></span>
                <span>Check Out</span>
                <span className="activity-time">06:00 PM</span>
              </div>
            </div>

            <div className="card summary-card">
              <h4>Summary (Dec)</h4>

              <div className="summary-row">
                <span className="dot present"></span>
                <span>Present</span>
                <span>18</span>
              </div>

              <div className="summary-row">
                <span className="dot late"></span>
                <span>Late</span>
                <span>2</span>
              </div>

              <div className="summary-row">
                <span className="dot absent"></span>
                <span>Absent</span>
                <span>1</span>
              </div>

              <div className="summary-total">
                <span>Total Working Hours</span>
                <strong>162.5 Hrs</strong>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Attendance;
