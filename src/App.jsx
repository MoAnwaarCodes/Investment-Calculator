import { useState } from "react";
import Form from "./Component/Form";
import Header from "./Component/Header";
import Table from "./Component/Table";
function App() {
  const [userInput, setUserInput] = useState({});

  const calculate_Handler = (data) => {
    setUserInput(data);
  };
  let yearlyData = [];
let currentSavings;
  if (userInput) {
     currentSavings = userInput.saving;
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
  }

  return (
    <div>
      <Header></Header>
      <Form calculateHandler={calculate_Handler}></Form>

      {userInput ? (
        yearlyData.length > 0 ? (
          <Table data={yearlyData} initialInvestment={currentSavings}></Table>
        ) : (
          <p>No investment Calculated yet.</p>
        )
      ) : (
        <p>Waiting for user input...</p>
      )}
    </div>
  );
}

export default App;
