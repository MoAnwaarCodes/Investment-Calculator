import React from "react";

const Table = (props) => {
 console.log(props.data[0].savingsEndofYear)
  return (
    
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
        {props.data.map((d, index) => {
          return (
            <tr key={index}>
              <td>{d.year}</td>
              <td>{d.savingsEndofYear}</td>
              <td>{d.yearlyIntrest}</td>
              <td>
                {d.savingsEndofYear -
                  props.initialInvestment -
                  d.yearlyContribution * d.year}
              </td>
              <td>{d.yearlyContribution}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
