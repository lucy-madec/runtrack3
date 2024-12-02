document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        locale: "fr",
        events: [
            { title: "Présence acceptée", start: "2024-12-03"},
            { title: "Présence refusée", start: "2024-12-04"},
        ],
    });
    calendar.render();
});