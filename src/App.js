import { useState } from "react";
import "./App.css"; // Assuming you have a CSS file for styling

function CompanyImage() {
  return (
    <div className="company-image-container">
      <img src="../company-2.jpg" alt="Company Logo" className="company-image" />
    </div>
  );
}

export default function EmployeeLeaveList() {
  const employees = [
    { id: 1, name: "Alice", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-20", endDate: "2025-02-23", department: "HR", jobTitle: "HR Manager", contactDetails: "alice@example.com" },
    { id: 2, name: "Bob", leaveType: "Vacation", status: "Pending", startDate: "2025-03-10", endDate: "2025-03-15", department: "Finance", jobTitle: "Accountant", contactDetails: "bob@example.com" },
    { id: 3, name: "Charlie", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-18", endDate: "2025-02-19", department: "IT", jobTitle: "Software Engineer", contactDetails: "charlie@example.com" },
    { id: 4, name: "David", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-21", endDate: "2025-02-22", department: "Marketing", jobTitle: "Marketing Specialist", contactDetails: "david@example.com" },
    { id: 5, name: "Eve", leaveType: "Vacation", status: "Pending", startDate: "2025-03-05", endDate: "2025-03-10", department: "Sales", jobTitle: "Sales Representative", contactDetails: "eve@example.com" },
    { id: 6, name: "Frank", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-25", endDate: "2025-02-28", department: "Operations", jobTitle: "Operations Manager", contactDetails: "frank@example.com" },
    { id: 7, name: "Grace", leaveType: "Vacation", status: "Pending", startDate: "2025-04-01", endDate: "2025-04-05", department: "Finance", jobTitle: "Financial Analyst", contactDetails: "grace@example.com" },
    { id: 8, name: "Hannah", leaveType: "Casual Leave", status: "Approved", startDate: "2025-02-18", endDate: "2025-02-19", department: "HR", jobTitle: "Recruiter", contactDetails: "hannah@example.com" },
    { id: 9, name: "Isaac", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-20", endDate: "2025-03-22", department: "IT", jobTitle: "System Administrator", contactDetails: "isaac@example.com" },
    { id: 10, name: "Jack", leaveType: "Vacation", status: "Rejected", startDate: "2025-02-28", endDate: "2025-03-05", department: "Marketing", jobTitle: "SEO Specialist", contactDetails: "jack@example.com" },
    { id: 11, name: "Kathy", leaveType: "Sick Leave", status: "Approved", startDate: "2025-03-05", endDate: "2025-03-07", department: "Sales", jobTitle: "Sales Manager", contactDetails: "kathy@example.com" },
    { id: 12, name: "Liam", leaveType: "Vacation", status: "Pending", startDate: "2025-03-10", endDate: "2025-03-12", department: "Operations", jobTitle: "Logistics Coordinator", contactDetails: "liam@example.com" },
    { id: 13, name: "Mona", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-15", endDate: "2025-02-16", department: "IT", jobTitle: "Backend Developer", contactDetails: "mona@example.com" },
    { id: 14, name: "Nathan", leaveType: "Sick Leave", status: "Pending", startDate: "2025-04-05", endDate: "2025-04-10", department: "Finance", jobTitle: "Tax Consultant", contactDetails: "nathan@example.com" },
    { id: 15, name: "Olivia", leaveType: "Vacation", status: "Approved", startDate: "2025-03-01", endDate: "2025-03-04", department: "HR", jobTitle: "HR Assistant", contactDetails: "olivia@example.com" },
    { id: 16, name: "Paul", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-12", endDate: "2025-03-14", department: "IT", jobTitle: "UI/UX Designer", contactDetails: "paul@example.com" },
    { id: 17, name: "Quincy", leaveType: "Vacation", status: "Approved", startDate: "2025-04-01", endDate: "2025-04-07", department: "Marketing", jobTitle: "Content Creator", contactDetails: "quincy@example.com" },
    { id: 18, name: "Rachel", leaveType: "Casual Leave", status: "Pending", startDate: "2025-03-05", endDate: "2025-03-06", department: "Finance", jobTitle: "Payroll Specialist", contactDetails: "rachel@example.com" },
    { id: 19, name: "Samuel", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-22", endDate: "2025-02-24", department: "Sales", jobTitle: "Account Executive", contactDetails: "samuel@example.com" },
    { id: 20, name: "Tina", leaveType: "Vacation", status: "Rejected", startDate: "2025-03-20", endDate: "2025-03-25", department: "HR", jobTitle: "Training Coordinator", contactDetails: "tina@example.com" },
];

  

  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;
  
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredEmployees(
      employees.filter((employee) => employee.name.toLowerCase().includes(query))
    );
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  return (
    <section className="employee-leave-list-container">
      <h1 className="title">ABC COMPANY</h1>
      <CompanyImage />
      <h2 className="subtitle">Employee Leave Requests</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by employee name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Leave Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map((employee) => (
              <tr key={employee.id} onClick={() => handleEmployeeClick(employee)}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.leaveType}</td>
                <td className={employee.status === "Approved" ? "approved" : employee.status === "Pending" ? "pending" : "rejected"}>
                  {employee.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedEmployee && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Leave Request Details</h2>
            <p><strong>Employee Name:</strong> {selectedEmployee.name}</p>
            <p><strong>Department:</strong> {selectedEmployee.department}</p>
            <p><strong>Job Title:</strong> {selectedEmployee.jobTitle}</p>
            <p><strong>Contact Details:</strong>{selectedEmployee.contactDetails}</p>
            <p><strong>Leave Type:</strong> {selectedEmployee.leaveType}</p>
            <p><strong>Status:</strong> {selectedEmployee.status}</p>
            <p><strong>Leave Dates:</strong> {selectedEmployee.startDate} to {selectedEmployee.endDate}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <div className="pagination mt-2">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
