
# Online Leave Application

# Overview

The Online Leave Application System is a web-based application designed to streamline and automate the process of managing employee leave requests. This system provides employees with the ability to submit leave requests online and allows managers to approve, reject, and manage these requests efficiently. The system is accessible from any device, making it a convenient tool for both employees and managers to handle leave management remotely.

# Features
# User Registration and Login: 
Secure user registration and login functionality using encrypted passwords and JSON Web Tokens (JWT) for session management.
# Role-Based Access Control: 
Different user roles (Employees, Managers, Admins) with specific permissions and access levels.
# Leave Request Submission: 
Employees can submit leave requests by selecting leave type, start and end dates, and providing a reason for the leave.
Leave Management Dashboard: A dedicated dashboard for managers to view, approve, or reject leave requests and see leave history.
# Leave Balance Tracking: 
Automated leave balance tracking that updates based on approved and rejected leave requests.
#Notification System: 
Employees and managers receive notifications when a leave request is submitted, approved, or rejected.
#Leave History: 
Both employees and managers can view the history of leave requests, including their status (approved, rejected, pending).
#Responsive Design: 
The website is fully responsive, allowing users to access the system from desktops, tablets, and mobile devices.


# Technology Stack
# Front-End
HTML5 & CSS3: For structuring and styling the web pages.
JavaScript: For client-side logic, form validation, and AJAX calls to the server.
Bootstrap: To ensure responsive and mobile-friendly design.


# Back-End
Node.js & Express.js: For building the server-side application and handling API requests.
MongoDB: A NoSQL database for storing user data, leave requests, and other application data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.


# Security
Bcrypt.js: For hashing and securely storing user passwords.
JWT (JSON Web Tokens): For secure user authentication and session management.
