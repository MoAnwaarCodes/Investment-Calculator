import { useState } from "react";
import Form from "./Component/Form";
import Header from "./Component/Header";
import Table from "./Component/Table";
function App() {
  const [userInput, setUserInput] = useState(null);
  const calculate_Handler = (data) => {
    setUserInput(data);
  };
  const yearlyData = [];

  if (userInput) {
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
  }

  return (
    <div>
      <Header></Header>
      <Form calculateHandler={calculate_Handler}></Form>
      {!userInput && <p>No investment Calculated yet.</p>}
      {userInput && (
        <Table data={yearlyData} initialInvestment={userInput.saving} />
      )}
    </div>
  );
}

export default App;
