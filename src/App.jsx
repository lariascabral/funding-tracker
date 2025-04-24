// This code was implemented with GitHub Copilot based on the student's prompts.

import { useState, useEffect } from 'react'
import FundingBarChart from './components/FundingBarChart'
import IndustryTrendChart from './components/IndustryTrendChart'
import './App.css'

function App() {
  // Task 1: State to store funding data
  const [fundingData, setFundingData] = useState([])

  // Task 1: Fetch funding.json and store the data in fundingData
  useEffect(() => {
    fetch('/funding.json')
      .then((response) => response.json())
      .then((data) => setFundingData(data))
      .catch((error) => console.error('Error fetching funding data:', error))
  }, [])

  return (
    <div>
      <h1>Funding Tracker</h1>
      <p>
        Visualizing startup funding data over time and by industry.
      </p>

      {/* Task 2: Render the bar chart for total funding by year */}
      <h2>Total Funding by Year</h2>
      <FundingBarChart fundingData={fundingData} />

      {/* Task 3: Render the line chart for funding trends by industry */}
      <h2>Funding Trends by Industry</h2>
      <IndustryTrendChart fundingData={fundingData} />
    </div>
  )
}

export default App