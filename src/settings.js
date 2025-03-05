import { useState } from "react";
import "./App.css";
import "./settings.css"; 

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [approvalMode, setApprovalMode] = useState("Manual");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [weeklyReports, setWeeklyReports] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleApprovalChange = (event) => {
    setApprovalMode(event.target.value);
  };

  const handleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleSmsNotifications = () => {
    setSmsNotifications(!smsNotifications);
  };

  const handleWeeklyReports = () => {
    setWeeklyReports(!weeklyReports);
  };

  const resetSystem = () => {
    if (window.confirm("Are you sure you want to reset the system? This action cannot be undone.")) {
      console.log("System reset initiated.");
      // Placeholder for backend reset functionality
    }
  };

  return (
    <div className={`settings-page ${darkMode ? "dark" : "light"}`}>
      <h2>Admin Settings</h2>
      
      <div className="setting-group">
        <h3>General Preferences</h3>
        <div className="setting-item">
          <label>Theme:</label>
          <button onClick={toggleTheme}>{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        </div>
      </div>
      
      <div className="setting-group">
        <h3>Leave Management</h3>
        <div className="setting-item">
          <label>Leave Approval Mode:</label>
          <select value={approvalMode} onChange={handleApprovalChange} className="select-approval">
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
      </div>
      
      <div className="setting-group">
        <h3>Notifications</h3>
        <div className="setting-item">
          <label>Email Notifications:</label>
          <span>
            <input type="checkbox" checked={emailNotifications} onChange={handleEmailNotifications} id="email-notifications" />
            <label htmlFor="email-notifications">Enable Email Notifications</label>
          </span>
        </div>
        <div className="setting-item">
          <label>SMS Notifications:</label>
          <span>
            <input type="checkbox" checked={smsNotifications} onChange={handleSmsNotifications} id="sms-notifications"/>
            <label htmlFor="sms-notifications">Enable SMS Notifications</label>
          </span>
        </div>
        <div className="setting-item">
          <label>Weekly Summary Reports:</label>
          <span>
            <input type="checkbox" checked={weeklyReports} onChange={handleWeeklyReports} id="weekly-reports" />
            <label htmlFor="weekly-reports">Receive Weekly Reports</label>
          </span>
        </div>
      </div>
      
      <div className="setting-group">
        <h3>System Controls</h3>
        <div className="setting-item">
          <label>Reset System:</label>
          <button className="danger" onClick={resetSystem}>Reset</button>
        </div>
      </div>
    </div>
  );
}