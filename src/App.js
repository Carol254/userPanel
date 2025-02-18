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
    { id: 1, name: "Alice", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-20", endDate: "2025-02-23" },
    { id: 2, name: "Bob", leaveType: "Vacation", status: "Pending", startDate: "2025-03-10", endDate: "2025-03-15" },
    { id: 3, name: "Charlie", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-18", endDate: "2025-02-19" },
    { id: 4, name: "David", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-21", endDate: "2025-02-22" },
    { id: 5, name: "Eve", leaveType: "Vacation", status: "Pending", startDate: "2025-03-05", endDate: "2025-03-10" },
    { id: 6, name: "Frank", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-25", endDate: "2025-02-28" },
    { id: 7, name: "Grace", leaveType: "Vacation", status: "Pending", startDate: "2025-04-01", endDate: "2025-04-05" },
    { id: 8, name: "Hannah", leaveType: "Casual Leave", status: "Approved", startDate: "2025-02-18", endDate: "2025-02-19" },
    { id: 9, name: "Isaac", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-20", endDate: "2025-03-22" },
    { id: 10, name: "Jack", leaveType: "Vacation", status: "Rejected", startDate: "2025-02-28", endDate: "2025-03-05" },
    { id: 11, name: "Kathy", leaveType: "Sick Leave", status: "Approved", startDate: "2025-03-05", endDate: "2025-03-07" },
    { id: 12, name: "Liam", leaveType: "Vacation", status: "Pending", startDate: "2025-03-10", endDate: "2025-03-12" },
    { id: 13, name: "Mona", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-15", endDate: "2025-02-16" },
    { id: 14, name: "Nathan", leaveType: "Sick Leave", status: "Pending", startDate: "2025-04-05", endDate: "2025-04-10" },
    { id: 15, name: "Olivia", leaveType: "Vacation", status: "Approved", startDate: "2025-03-01", endDate: "2025-03-04" },
    { id: 16, name: "Paul", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-12", endDate: "2025-03-14" },
    { id: 17, name: "Quincy", leaveType: "Vacation", status: "Approved", startDate: "2025-04-01", endDate: "2025-04-07" },
    { id: 18, name: "Rachel", leaveType: "Casual Leave", status: "Pending", startDate: "2025-03-05", endDate: "2025-03-06" },
    { id: 19, name: "Samuel", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-22", endDate: "2025-02-24" },
    { id: 20, name: "Tina", leaveType: "Vacation", status: "Rejected", startDate: "2025-03-20", endDate: "2025-03-25" },
    { id: 21, name: "Ursula", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-28", endDate: "2025-03-01" },
    { id: 22, name: "Victor", leaveType: "Vacation", status: "Pending", startDate: "2025-04-03", endDate: "2025-04-08" },
    { id: 23, name: "Walter", leaveType: "Casual Leave", status: "Approved", startDate: "2025-02-20", endDate: "2025-02-22" },
    { id: 24, name: "Xander", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-05", endDate: "2025-03-08" },
    { id: 25, name: "Yvonne", leaveType: "Vacation", status: "Approved", startDate: "2025-03-15", endDate: "2025-03-18" },
    { id: 26, name: "Zachary", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-25", endDate: "2025-02-27" },
    { id: 27, name: "Adeline", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-28", endDate: "2025-03-02" },
    { id: 28, name: "Brian", leaveType: "Vacation", status: "Pending", startDate: "2025-03-11", endDate: "2025-03-13" },
    { id: 29, name: "Catherine", leaveType: "Casual Leave", status: "Approved", startDate: "2025-03-05", endDate: "2025-03-06" },
    { id: 30, name: "Derek", leaveType: "Sick Leave", status: "Pending", startDate: "2025-04-01", endDate: "2025-04-04" },
    { id: 31, name: "Ella", leaveType: "Vacation", status: "Approved", startDate: "2025-03-17", endDate: "2025-03-19" },
    { id: 32, name: "Frederick", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-10", endDate: "2025-02-13" },
    { id: 33, name: "Gina", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-22", endDate: "2025-02-24" },
    { id: 34, name: "Harold", leaveType: "Vacation", status: "Pending", startDate: "2025-03-07", endDate: "2025-03-10" },
    { id: 35, name: "Ivy", leaveType: "Casual Leave", status: "Approved", startDate: "2025-02-14", endDate: "2025-02-16" },
    { id: 36, name: "Jackie", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-18", endDate: "2025-03-22" },
    { id: 37, name: "Karl", leaveType: "Vacation", status: "Approved", startDate: "2025-03-25", endDate: "2025-03-30" },
    { id: 38, name: "Lillian", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-12", endDate: "2025-02-14" },
    { id: 39, name: "Martin", leaveType: "Sick Leave", status: "Pending", startDate: "2025-03-30", endDate: "2025-04-02" },
    { id: 40, name: "Nina", leaveType: "Vacation", status: "Approved", startDate: "2025-04-02", endDate: "2025-04-05" },
    { id: 41, name: "Oscar", leaveType: "Casual Leave", status: "Pending", startDate: "2025-03-19", endDate: "2025-03-21" },
    { id: 42, name: "Paula", leaveType: "Sick Leave", status: "Approved", startDate: "2025-02-20", endDate: "2025-02-22" },
    { id: 43, name: "Quentin", leaveType: "Vacation", status: "Pending", startDate: "2025-03-12", endDate: "2025-03-16" },
    { id: 44, name: "Rita", leaveType: "Casual Leave", status: "Approved", startDate: "2025-03-23", endDate: "2025-03-25" },
    { id: 45, name: "Steve", leaveType: "Sick Leave", status: "Pending", startDate: "2025-02-18", endDate: "2025-02-22" },
    { id: 46, name: "Tracy", leaveType: "Vacation", status: "Approved", startDate: "2025-03-28", endDate: "2025-03-31" },
    { id: 47, name: "Uma", leaveType: "Casual Leave", status: "Rejected", startDate: "2025-02-28", endDate: "2025-03-01" },
    { id: 48, name: "Vera", leaveType: "Sick Leave", status: "Pending", startDate: "2025-04-05", endDate: "2025-04-08" },
    { id: 49, name: "Wendy", leaveType: "Vacation", status: "Approved", startDate: "2025-03-04", endDate: "2025-03-08" },
    { id: 50, name: "Xena", leaveType: "Casual Leave", status: "Pending", startDate: "2025-03-15", endDate: "2025-03-17" },
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
