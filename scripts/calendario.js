document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Vista inicial
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [ // Puedes agregar tus eventos aquí
            {
                title: 'Evento 1',
                start: '2024-11-01'
            },
            {
                title: 'Evento 2',
                start: '2024-11-07',
                end: '2024-11-10'
            },
            {
                title: 'Evento 3',
                start: '2024-11-15T10:00:00',
                end: '2024-11-15T12:00:00'
            }
        ]
    });
    calendar.render();
});
