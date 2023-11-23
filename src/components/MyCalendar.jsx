import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function MyCalendar() {
    const [appointments, setAppointments] = useState([]);
    const [view, setView] = useState('dayGridMonth');

    useEffect(() => {
        // Fetch appointment data from your backend API
        // Example using fetch
        fetch('/api/appointments')
            .then((response) => response.json())
            .then((data) => setAppointments(data))
            .catch((error) => console.error('Error fetching appointments:', error));
    }, []);

    const handleDayClick = (arg) => {
        // Change the view to timeGridWeek when a day is clicked
        setView('timeGridWeek');
    };

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin]}
                initialView={view}
                events={appointments}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek',
                }}
                // Additional time-related options
                slotDuration="00:15:00" // Set the time slot duration
                slotMinTime="08:00:00"  // Set the minimum time to display
                slotMaxTime="18:00:00"  // Set the maximum time to display
                dayClick={handleDayClick} // Handle day clicks in dayGridMonth view
            />
        </div>
    );
}

export default MyCalendar;
