import React, { useState } from "react";

const Form = () => {
  const [saving, setSaving] = useState("");
  const [yearSaving, setYearSaving] = useState("");
  const [intrest, setIntrest] = useState("");
  const [duration, setDuration] = useState("");

  const submitHandler = (event) => {
 event.preventDefault()
    console.log(saving);
    console.log(yearSaving);
    console.log(intrest);
    console.log(duration);
  };
  const inputHandler = (input, value) => {
    if (input == "current-savings") {
      setSaving(value);
    } else if (input == "yearly-contribution") {
      setYearSaving(value);
    } else if (input == "expected-return") {
      setIntrest(value);
    } else if (input == "duration") {
      setDuration(value);
    }
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => inputHandler("duration", event.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
