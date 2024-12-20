import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClientBarChart = () => {
  // Fake data for the number of clients per month
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Number of Clients",
        data: [120, 150, 200, 180, 160, 210, 250, 300, 270, 320, 350, 400], // Fake client numbers for each month
        backgroundColor: "rgba(38, 198, 218, 0.7)", // Light teal gradient effect for bars
        borderColor: "rgba(38, 198, 218, 1)", // Matching border color for bars
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Client Growth Over the Year",
        font: {
          size: 20,
          weight: 'bold',
        },
        color: "#FFFFFF", // White text for better readability
      },
      tooltip: {
        backgroundColor: "#4A4A4A", // Dark gray tooltip background
        titleColor: "#fff", // White title color
        bodyColor: "#fff", // White body text
        borderColor: "#fff", // White border for tooltips
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
          },
          color: "#E2E8F0", // Light gray color for the Y-axis labels
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
          color: "#E2E8F0", // Light gray color for the X-axis labels
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-teal-700 p-6 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105">
      <div className="p-6 bg-white rounded-xl shadow-xl border-4 border-teal-600">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ClientBarChart;
