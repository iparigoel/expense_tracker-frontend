import React from 'react';
import CustomPieChart from '../Charts/CustomPieChart';

const FinanceOverview = ({totalBalance, totalIncome, totalExpense}) => {
  const safeTotalBalance = Number(totalBalance) || 0;
    const safeTotalIncome = Number(totalIncome) || 0;
    const safeTotalExpense = Number(totalExpense) || 0;

    const COLORS = ['#875CF5', '#FA2C37', '#FF6900'];
    const balanceData = [
        {name: "Total Balance", amount: safeTotalBalance},
        {name: "Total Income", amount: safeTotalIncome},
        {name: "Total Expense", amount: safeTotalExpense}
    ];
  return (
    <div className='card'>
      <div className='flex items-center justify-between'>
        <h5 className='text-lg'>Financial Overview</h5>
      </div>
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${safeTotalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  )
}

export default FinanceOverview
