import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell  } from 'recharts';


const CustomBarChart = ({data = [], xKey = 'month'}) => {
  // Function to alternative colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
  };
  const CustomTooltip = ({active, payload}) => {
    if(active && payload && payload.length){
      const label = payload[0].payload[xKey] ?? payload[0].category ?? payload[0].month;
      return (
        <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
          <p className='text-xs font-semibold text-purple-800 mb-1'>{label}</p>
          <p className='text-sm text-gray-600'>
            Amount: <span className='text-sm font-medium text-gray-900'>${payload[0].value}</span>
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className='bg-white mt-6 rounded-lg w-full h-80'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data || []}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#555"}} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#555"}} stroke="none" />
          <Tooltip content={CustomTooltip} cursor={{ fill: '#f3f4f6' }}/>
          <Bar dataKey="amount" fill="#FF8042"
            radius={[10, 10, 0, 0]}
            activeDot={{r: 8, fill: "yellow"}}
            activeStyle={{fill: "green"}}
          >
          {data?.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={getBarColor(index)}
            />
          ))}
            </Bar>
        </BarChart>
      </ResponsiveContainer>          
    </div>
  )
}

export default CustomBarChart;