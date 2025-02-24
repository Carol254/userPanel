import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SidebarLayout from "./sidebarLayout"; // Import SidebarLayout
import Login from "./login";
import EmployeeLeaveList from "./employees";
import Dashboard from "./dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      <Routes>
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />
        
        {isLoggedIn ? (
          <Route 
            path="/*" 
            element={
              <SidebarLayout>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/employees" element={<EmployeeLeaveList />} />
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </SidebarLayout>
            } 
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;



