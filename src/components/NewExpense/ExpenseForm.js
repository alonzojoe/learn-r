import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //   const [form, setForm] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChange = (event) => {
    // setForm({
    //   ...form,
    //   title: event.target.value,
    // });
    // setForm((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
    setTitle(event.target.value);
  };
  const amountChange = (event) => {
    // setForm({
    //   ...form,
    //   amount: event.target.value,
    // });
    setAmount(event.target.value);
  };
  const dateChange = (event) => {
    // setForm({
    //   ...form,
    //   date: event.target.value,
    // });
    setDate(event.target.value);
  };

  const changeHandler = (type, value) => {
    if (type == "title") {
      setTitle(value);
    } else if (type == "amount") {
      setAmount(value);
    } else if (type == "date") {
      setDate(value);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    console.log("expenseData", expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitForm}>
      {title}-{amount}-{date}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => changeHandler("title", event.target.value)}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            stop="0.01"
            onChange={(event) => changeHandler("amount", event.target.value)}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            onChange={(event) => changeHandler("date", event.target.value)}
            value={date}
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
