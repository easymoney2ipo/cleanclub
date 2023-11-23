import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import TimePicker from './TimePicker'; // Make sure you have the correct import path

export default function ValidationBehaviorView() {
    const [selectedDate, setSelectedDate] = React.useState(dayjs());

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Grid
                container
                columns={{ xs: 1, lg: 2 }}
                spacing={4}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <DateCalendar
                        value={selectedDate}
                        onChange={handleDateChange}
                        disablePast
                    />
                </Grid>
                <Grid item key={selectedDate.toString()}>
                    <TimePicker />
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}
