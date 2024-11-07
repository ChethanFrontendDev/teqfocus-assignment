import { PolarArea } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default function CapabilitiesChart() {
  const data = {
    labels: ['Build', 'Buy', 'Partner'],
    datasets: [
      {
        data: [20, 40, 20],
        backgroundColor: [
          'rgba(255, 123, 123, 1)',
          'rgba(255, 123, 123, 0.8)',
          'rgba(255, 123, 123, 0.6)',
        ],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        grid: {
          circular: true,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <div className="h-[300px] relative mt-20">
      <div className="absolute left-0 top-0 space-y-2">
        {[
          { label: 'Build', value: 20 },
          { label: 'Buy', value: 40 },
          { label: 'Partner', value: 20 },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.label === 'Build' ? 'rgba(255, 123, 123, 1)' : item.label === 'Buy' ? 'rgba(255, 123, 123, 0.8)' : 'rgba(255, 123, 123, 0.6)' }}></span>
            <span className="text-sm">{item.label}</span>
            <span className="text-sm text-gray-500 ml-4">{item.value}</span>
          </div>
        ))}
      </div>
      <PolarArea data={data} options={options}/>
    </div>
  )
}