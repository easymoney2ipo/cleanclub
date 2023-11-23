import React from 'react';
import CleaningNewDate from '../components/CleaningNewDate';
import MyCalendar from '../components/MyCalendar';

const Dashboard = () => {
  return (
    <div>
      {/* Desktop Layout */}
      <div className="">¨
        <MyCalendar />
        <div className="text-xl font-medium mb-4">Unesite termin čišćenja:</div>
      </div>
      <div className=''>
        <div className="">
          <CleaningNewDate />

        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Unesi</button>
      </div>
    </div>
  );
};

export default Dashboard;
