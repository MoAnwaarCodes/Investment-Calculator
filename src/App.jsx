import { useState } from "react";
import Form from "./Component/Form";
import Header from "./Component/Header";
import Table from "./Component/Table";

function App() {
  // Initialize userInput state with default values or an empty object
  const [userInput, setUserInput] = useState({
    saving: 0,
    yearSaving: 0,
    intrest: 0,
    duration: 0,
  });

  const calculate_Handler = (data) => {
    setUserInput(data);
  };

  // Calculate yearlyData whenever userInput changes
  const yearlyData = userInput
    ? calculateYearlyData(userInput)
    : [];

  return (
    <div>
      <Header />
      <Form calculateHandler={calculate_Handler} />

      {yearlyData.length > 0 ? (
        <Table data={yearlyData} initialInvestment={userInput.saving} />
      ) : (
        <p>No investment Calculated yet.</p>
      )}
    </div>
  );
}

// Function to calculate yearly data based on user input
function calculateYearlyData(userInput) {
  const yearlyData = [];
  let currentSavings = userInput.saving;
  const yearlyContribution = userInput.yearSaving;
  const expectedReturn = userInput.intrest / 100;
  const duration = userInput.duration;

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  return yearlyData;
}

export default App;
