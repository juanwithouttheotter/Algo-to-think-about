import React, { useEffect } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

function DoBSelector({ className, dobOnChange }) {
        useEffect(() => {
                const calendars = bulmaCalendar.attach('[type="date"]', {});

                calendars.forEach((calendar) => {
                        calendar.on('date:selected', (date) => {
                                console.log(date);
                        });
                });
        });

        const element = document.querySelector('#dob');
        if (element) {
                element.bulmaCalendar.on('select', (datepicker) => {
                        let choseDate = new Date(datepicker.data.value());
                        choseDate = choseDate.toISOString();
                        dobOnChange('birthday', choseDate);
                });
        }

        return (
                <div className={className}>
                        <input id="dob" type="date" />
                </div>
        );
}

export default DoBSelector;
