import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChange = (event) => {
    // setForm({
    //   ...form,
    //   title: event.target.value,
    // });
    setForm((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChange = (event) => {
    setForm({
      ...form,
      amount: event.target.value,
    });
  };
  const dateChange = (event) => {
    setForm({
      ...form,
      date: event.target.value,
    });
  };

  return (
    <form>
      {form.title}-{form.amount}-{form.date}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" stop="0.01" onChange={amountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
