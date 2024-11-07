// src/pages/DashboardPage.jsx
import React from 'react';
import LineChart from '../charts/LineChart';

const DashboardPage = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example cards with metrics */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">1,024</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-2xl font-bold">$2,564</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">New Signups</h3>
          <p className="text-2xl font-bold">230</p>
        </div>
      </div>

      {/* Chart */}
      <div className="p-4 bg-white shadow rounded">
        <LineChart data={data} />
      </div>
    </div>
  );
};

export default DashboardPage;
