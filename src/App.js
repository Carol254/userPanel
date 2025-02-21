import React, { useState } from "react";
import Login from "./login"; // Import your login page
import EmployeeLeaveList from "./employees";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <Route 
        path="/employees" 
        element={isLoggedIn ? <EmployeeLeaveList /> : <Navigate to="/login" />} 
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  </div>
  );
}

export default App;

