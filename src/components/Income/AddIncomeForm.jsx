import React, { useState } from 'react';
import Input from '../Inputs/Input';
import EmojiPickerPopup from '../Layouts/EmojiPickerPopup';

const AddIncomeForm = ({onAddIncome}) => {
    const [income, setIncome] = useState({
        source:"",
        amount:"",
        date:"",
        icon:"",
    });
    const handlechange = (key, value) => setIncome({...income, [key]: value});
  return (
    <div >
        <EmojiPickerPopup
            icon={income.icon}
            onSelect={(selectedIcon) => handlechange("icon", selectedIcon)}
        />
      <Input
        value={income.source}
        onChange={({target}) => handlechange("source", target.value)}
        label="Income Source"
        placeholder="e.g. Salary, Freelance"
        type="text"
      />
      <Input
        value={income.amount}
        onChange={({target}) => handlechange("amount", target.value)}
        label="Income Amount"
        placeholder=""
        type="number"
      />
      <Input
        value={income.date}
        onChange={({target}) => handlechange("date", target.value)}
        label="Income Date"
        placeholder=""
        type="date"
      />
      <div className='flex justify-end mt-6'>
        <button className='add-btn add-btn-fill'
            type='button'
            onClick={()=>onAddIncome(income)}
        >Add Income</button>
      </div>
    </div>
  )
}

export default AddIncomeForm
