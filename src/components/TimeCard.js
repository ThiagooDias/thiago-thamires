import React from 'react';

const TimeCard = ({ value, label }) => {
  return (
    <div className="w-60 bg-slate-800 rounded-md p-2 text-center shadow-md shadow-slate-700">
      <div className='text-xl font-bold'>{value}</div>
      <div className='text-lg font-light'>{label}</div>
    </div>
  );
};

export default TimeCard;
