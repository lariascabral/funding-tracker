// This component was implemented with GitHub Copilot based on the student's prompts.

import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend)

function IndustryTrendChart({ fundingData }) {
  if (!fundingData || fundingData.length === 0) {
    return <p>No data available to display the chart.</p>
  }

  const fundingByIndustry = fundingData.reduce((acc, item) => {
    if (!acc[item.industry]) {
      acc[item.industry] = {}
    }
    acc[item.industry][item.year] = (acc[item.industry][item.year] || 0) + item.amount
    return acc
  }, {})

  const industries = Object.keys(fundingByIndustry)
  const years = [...new Set(fundingData.map((item) => item.year))].sort()

  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
  const datasets = industries.map((industry, index) => ({
    label: industry,
    data: years.map((year) => fundingByIndustry[industry][year] || 0),
    borderColor: colors[index % colors.length],
    fill: false,
  }))

  const data = {
    labels: years,
    datasets,
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toLocaleString()}`,
        },
      },
    },
  }

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  )
}

export default IndustryTrendChart