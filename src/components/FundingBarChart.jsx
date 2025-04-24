// This component was implemented with GitHub Copilot based on the student's prompts.

import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function FundingBarChart({ fundingData }) {
  // Task 2: Calculate total funding by year
  const fundingByYear = fundingData.reduce((acc, item) => {
    acc[item.year] = (acc[item.year] || 0) + item.amount
    return acc
  }, {})

  const years = Object.keys(fundingByYear)
  const totals = Object.values(fundingByYear)

  // Prepare data for the bar chart
  const data = {
    labels: years,
    datasets: [
      {
        label: 'Total Funding ($)',
        data: totals,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  return <Bar data={data} />
}

export default FundingBarChart