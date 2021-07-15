import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    hideNewExpenseForm();
  };

  const hideNewExpenseForm = () => {
    setFormShow(false);
  };

  const showExpenseForm = () => {
    setFormShow(true);
  };

  return (
    <div className='new-expense'>
      {!formShow && <button onClick={showExpenseForm}>Add new Expense</button>}
      {formShow && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideNewExpenseForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
