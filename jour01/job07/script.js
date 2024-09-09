function dayWorked(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    // Check if the date is a week-end
    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + day + " " + month + " " + year + " est un week-end");
    } else {
        // Check if the date is a day off
        var daysOff = [
            new Date(year, 0, 1), // 1st January
            new Date(year, 4, 1), // 1st May
            new Date(year, 4, 8), // 8 May
            new Date(year, 11, 25) // 25 December
        ];

        var isDayOff = daysOff.some(function(dayOff) {
            return dayOff.getDate() === day &&
                   dayOff.getMonth() === month - 1 &&
                   dayOff.getFullYear() === year;
        });

        if (isDayOff) {
            console.log("Le " + day + " " + month + " " + year + " est un jour férié");
        } else {
            console.log("Oui, " + day + " " + month + " " + year + " est un jour travaillé");
        }
    }
}