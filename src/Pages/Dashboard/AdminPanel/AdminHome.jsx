// import React from 'react';

const AdminHome = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Admin Home</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2" > </h2>
          <p className="text-gray-600 mb-4">Add, edit, or remove books from the library.</p>
          <a href="/dashboard/addBook" className="text-blue-500 hover:underline">Go to Book Management</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
          <p className="text-gray-600 mb-4">Manage user accounts and permissions.</p>
          <a href="/dashboard/allusers" className="text-blue-500 hover:underline">Go to User Management</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-gray-600 mb-4">Generate reports and view library statistics.</p>
          <a href="/reports" className="text-blue-500 hover:underline">Go to Reports</a>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600 mb-4">Configure system settings and preferences.</p>
          <a href="/settings" className="text-blue-500 hover:underline">Go to Settings</a>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
