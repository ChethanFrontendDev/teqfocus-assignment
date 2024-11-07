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

// export default function LifecycleChart({ data }) {
//   const chartData = {
//     labels: data.map(item => item.stage),
//     datasets: [
//       {
//         label: 'Value',
//         data: data.map(item => item.value),
//         backgroundColor: 'hsl(var(--primary))',
//       },
//     ],
//   }

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   }

//   return <Bar data={chartData} options={options} />
// }

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

export default function LifecycleChart() {
  const data = {
    labels: ['Launch', 'Execution', 'Evaluation', 'Need'],
    datasets: [
      {
        data: [8, 16, 12, 25],
        backgroundColor: '#4CAF50',
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 30,
        ticks: {
          callback: (value) => `${value}%`,
          stepSize: 10,
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="h-[300px] relative mt-24">
      <div className="absolute top-0 right-0">
        <a href="#" className="text-green-500 text-sm flex items-center gap-1 -mt-14">
          Go to Capabilities list
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      <Bar data={data} options={options} />
    </div>
  )
}