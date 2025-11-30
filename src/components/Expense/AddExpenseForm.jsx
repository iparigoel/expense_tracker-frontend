import React, { useState } from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../Layouts/EmojiPickerPopup';

const AddExpenseForm = ({onAddExpense}) => {
    const [expense, setExpense] = useState({
        category:"",
        amount:"",
        date:"",
        icon:"",
    });
    const handlechange = (key, value) => setExpense({...expense, [key]: value});
  return (
    <div >
        <EmojiPickerPopup
            icon={expense.icon}
            onSelect={(selectedIcon) => handlechange("icon", selectedIcon)}
        />
      <Input
        value={expense.category}
        onChange={({target}) => handlechange("category", target.value)}
        label="Expense Category"
        placeholder="e.g. Food, Rent"
        type="text"
      />
      <Input
        value={expense.amount}
        onChange={({target}) => handlechange("amount", target.value)}
        label="Expense Amount"
        placeholder=""
        type="number"
      />
      <Input
        value={expense.date}
        onChange={({target}) => handlechange("date", target.value)}
        label="Expense Date"
        placeholder=""
        type="date"
      />
      <div className='flex justify-end mt-6'>
        <button className='add-btn add-btn-fill'
            type='button'
            onClick={()=>onAddExpense(expense)}
        >Add Expense</button>
      </div>
    </div>
  )
}

export default AddExpenseForm
