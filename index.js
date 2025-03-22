document.addEventListener("DOMContentLoaded", function() {
    // Create the calendar container dynamically
    createCalendarContainer();

    // Google Calendar API integration
    let gapiClientLoaded = false;
    let gsiLoaded = false;

    function gapiLoaded() {
        gapiClientLoaded = true;
        maybeInitGoogleCalendar();
    }

    function gisLoaded() {
        gsiLoaded = true;
        maybeInitGoogleCalendar();
    }

    function maybeInitGoogleCalendar() {
        if (gapiClientLoaded && gsiLoaded) {
            const storedCalendarSrc = localStorage.getItem('calendarSrc');
            if (storedCalendarSrc) {
                document.querySelector('.calendar-container iframe').src = storedCalendarSrc;
            } else {
                const calendarSrc = "https://calendar.google.com/calendar/embed?src=aguerr12@uncc.edu&ctz=America%2FNew_York";
                localStorage.setItem('calendarSrc', calendarSrc);
                document.querySelector('.calendar-container iframe').src = calendarSrc;
            }
        }
    }

    function createCalendarContainer() {
        const container = document.createElement('div');
        container.className = 'calendar-container';
        const iframe = document.createElement('iframe');
        iframe.style.border = "0";
        iframe.width = "300";
        iframe.height = "300";
        iframe.frameBorder = "0";
        iframe.scrolling = "no";
        container.appendChild(iframe);
        document.body.appendChild(container);
    }

    const gapiScript = document.createElement('script');
    gapiScript.src = "https://apis.google.com/js/api.js";
    gapiScript.async = true;
    gapiScript.defer = true;
    gapiScript.onload = gapiLoaded;
    document.head.appendChild(gapiScript);

    const gsiScript = document.createElement('script');
    gsiScript.src = "https://accounts.google.com/gsi/client";
    gsiScript.async = true;
    gsiScript.defer = true;
    gsiScript.onload = gisLoaded;
    document.head.appendChild(gsiScript);
});
