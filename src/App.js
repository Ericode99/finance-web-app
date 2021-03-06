import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Phone Bill",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Car Repair",
    amount: 690,
    date: new Date(2022, 1, 10),
  },
  {
    id: "e6",
    title: "Flight to Miami",
    amount: 250,
    date: new Date(2022, 2, 9),
  },
  {
    id: "e7",
    title: "New Chair",
    amount: 199,
    date: new Date(2022, 4, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [expense, ...prevExpenses];
      return updatedExpenses;
    });
  };

  const deleteItemHandler = (itemId) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((item) => item.id !== itemId);
      return updatedExpenses;
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDeleteItemMain={deleteItemHandler} />
    </div>
  );
}

export default App;
