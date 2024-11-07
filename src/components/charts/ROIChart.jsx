// import { Bar } from 'react-chartjs-2'
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// )

// export default function ROIChart() {
//   const data = {
//     labels: ['Build', 'Buy', 'Partner'],
//     datasets: [
//       {
//         label: 'Investment allocation',
//         data: [65, 59, 80],
//         backgroundColor: 'hsl(var(--primary))',
//       },
//       {
//         label: 'Delivery Confidence',
//         data: [28, 48, 40],
//         backgroundColor: 'hsl(var(--primary) / 0.6)',
//       },
//       {
//         label: 'ROI Score',
//         data: [30, 70, 60],
//         backgroundColor: 'hsl(var(--primary) / 0.3)',
//       },
//     ],
//   }

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//   }

//   return <Bar data={data} options={options} />
// }

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export default function ROIChart() {
  const data = {
    labels: ['Build', 'Buy', 'Partner'],
    datasets: [
      {
        label: 'Investment allocation',
        data: [35, 40, 35],
        backgroundColor: '#3B82F6',
      },
      {
        label: 'Delivery Confidence',
        data: [50, 85, 95],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'ROI Score',
        data: [25, 75, 90],
        backgroundColor: '#FFC107',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  }

  return (
    <div className="h-[300px] relative">
      <div className="absolute top-0 right-0">
        <a href="#" className="text-green-500 text-sm flex items-center gap-1 -mt-8">
          Go to ROI Page
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <Bar data={data} options={options} />
    </div>
  )
}