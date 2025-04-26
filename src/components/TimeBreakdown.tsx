import React from 'react';

interface TimeBreakdownProps {
  totalHours: number;
  totalMinutes: number
}

const TimeBreakdown: React.FC<TimeBreakdownProps> = ({
  totalHours,
  totalMinutes
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-[350px]">
      <h2 className="text-sm font-semibold text-[#0E0E11]">
        {totalHours} <span className="font-normal text-[#6D7079] mr-1">Hours</span>{' '}
        {totalMinutes} <span className="font-normal text-[#6D7079]">Minutes in total</span>
      </h2>
      <div className="flex mt-4 space-x-2 h-3">
        <div
          className="bg-[#E1E2E5] w-16 rounded-full"
        ></div>
        <div
          className="bg-[#87F7DC] w-28 rounded-full"
        ></div>
        <div
          className="bg-[#8792F7] w-44 rounded-full"
        ></div>
      </div>

      <div className="flex gap-4 mt-6 text-sm font-medium">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#E1E2E5]"></span>
          <span>Pause</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#87F7DC]"></span>
          <span>Active</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#8792F7]"></span>
          <span>Extra</span>
        </div>
      </div>
    </div>
  );
};

export default TimeBreakdown;
