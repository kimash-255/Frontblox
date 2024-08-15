
import React from 'react';
import { format, startOfMonth, addMonths, subMonths, eachDayOfInterval, isToday, isWeekend } from 'date-fns';

const Calendar = ({ id, initialPosition = { left: 0, top: 0 } }) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  
  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = addMonths(startOfCurrentMonth, 1);
  
  const days = eachDayOfInterval({ start: startOfCurrentMonth, end: endOfCurrentMonth });
  
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  
  return (
    <div
      id={id}
      className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-lg"
      style={{
        position: 'absolute',
        left: initialPosition.left,
        top: initialPosition.top,
        width: '100%', // Adjust as needed
        maxWidth: '400px', // Adjust as needed
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="p-2 text-white bg-gray-800 rounded hover:bg-gray-700">
          &lt;
        </button>
        <h2 className="text-lg font-bold text-white">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth} className="p-2 text-white bg-gray-800 rounded hover:bg-gray-700">
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 text-center rounded-lg ${isToday(day) ? 'bg-yellow-300' : ''} ${
              isWeekend(day) ? 'text-red-500' : 'text-gray-800'
            }`}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
