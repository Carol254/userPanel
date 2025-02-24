import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import "./App.css";

const leaveData = [
  { name: "Approved", value: 10, color: "#5975eb" },
  { name: "Pending", value: 8, color: "#ff9800" },
  { name: "Rejected", value: 5, color: "#f44336" },
];

const leaveTypeData = [
  { name: "Sick Leave", value: 12 },
  { name: "Vacation", value: 15 },
  { name: "Casual Leave", value: 8 },
];


const leavesPerDepartment = [
    { name: "HR", value: 6 },
    { name: "Sales", value: 5 },
    { name: "Operations", value: 3 },
    { name: "IT", value: 5},
    { name: "Procurement", value: 2 },
    { name: "Finance", value: 5 },
    { name: "Marketing", value: 3 },
];

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 class="_subtitle">Overview</h1>
      <div className="charts-container">
        <div className="chart">
          <h3>Leave Status Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={leaveData} dataKey="value" nameKey="name" outerRadius={100} label>
                {leaveData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Leave Types Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leaveTypeData}>
                {/* cartesian creates a dashed line pattern with alternating 3px dashes and 3px gaps */}
              <CartesianGrid strokeDasharray="3 3" /> 
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#5975eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart">
          <h3>Leaves Per Department</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={leavesPerDepartment}>
              <CartesianGrid strokeDasharray="3 3" /> 
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#5975eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
