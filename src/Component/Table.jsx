import React from "react";

const Table = ({ data, initialInvestment }) => {
  return (
    <>
      
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => {
            return (
              <tr key={index}>
                <td>{d.year}</td>
                <td>{d.savingsEndOfYear}</td>
                <td>{d.yearlyInterest}</td>
                <td>
                  {d.savingsEndOfYear -
                    initialInvestment -
                    d.yearlyContribution * d.year}
                </td>
                
                <td>{initialInvestment+d.yearlyContribution*d.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
