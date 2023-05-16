import React from 'react';

const DashBoard = ({ headers, data }) => {
  return (
    <div className="flex flex-col col-span-3 p-5 min-w-full sm:w-1/2 lg:w-1/2 xl:w-1/3  bg-gray-100 rounded-lg shadow mx-3">
      {headers.map((header, index) => (
        <div key={index} className="flex items-center justify-between mb-4 mr-6">
          <div className="font-semibold text-gray-800 px-6">{header.label}</div>
          <div className="font-normal text-gray-600">{header.value(data)}</div>
        </div>
      ))}
    </div>
  );
};

export default DashBoard;