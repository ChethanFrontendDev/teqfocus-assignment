import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function MaturityChart({ value = 74 }) {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#FF7B7B', '#F5F5F5'],
        borderWidth: 0,
        circumference: 300,
        rotation: 210,
      },
    ],
  }

  const options = {
    cutout: '75%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  }

  return (
    <div className="relative w-full h-[300px]">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-sm text-gray-400">Out of 100</span>
        <span className="text-4xl font-bold">{value}%</span>
      </div>
    </div>
  )
}