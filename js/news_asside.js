var asside = document.getElementById("cal");
asside.addEventListener("click", function () {
    if (asside.style.transform == "0") {
        asside.classList.toggle("expand");
    }
});
var Calendar = /** @class */ (function () {
    function Calendar() {
        this.today = new Date();
        this.day = this.today.getDate();
        this.month = this.today.getMonth();
        this.year = this.today.getFullYear();
        this.daysInMonth = this.countMonthDays(this.month);
        this.startDay = new Date(this.month + 1 + " 1 " + this.year);
        this.startDayName =
            this.startDay.getDay() == 0 ? 7 : this.startDay.getDay();
        this.elmMonth = document.getElementById("month");
        this.elmYear = document.getElementById("year");
        this.elmDays = document.getElementById("days");
    }
    Calendar.prototype.countMonthDays = function (b) {
        if ((b + (1 % 2) == 0 && b + 1 < 7) ||
            (b + (1 % 2) == 1 && b + 1 > 8)) {
            if (b == 2)
                return 28;
            else
                return 30;
        }
        else {
            return 31;
        }
    };
    Calendar.prototype.getMonthName = function (month) {
        if (month == 0) {
            return "Styczeń";
        }
        if (month == 1) {
            return "Luty";
        }
        if (month == 2) {
            return "Marzec";
        }
        if (month == 3) {
            return "Kwiecień";
        }
        if (month == 4) {
            return "Maj";
        }
        if (month == 5) {
            return "Czerwiec";
        }
        if (month == 6) {
            return "Lipiec";
        }
        if (month == 7) {
            return "Sierpień";
        }
        if (month == 8) {
            return "Wrzesień";
        }
        if (month == 9) {
            return "Październik";
        }
        if (month == 10) {
            return "Listopad";
        }
        if (month == 11) {
            return "Grudzień";
        }
    };
    Calendar.prototype.createCal = function () {
        this.elmYear.href = "#/" + this.year;
        this.elmYear.innerHTML = this.year;
        this.elmMonth.href =
            "#/" + this.getMonthName(this.month).toLocaleLowerCase();
        this.elmMonth.innerHTML = this.getMonthName(this.month);
        var a = "";
        for (var i = 0; i < this.startDayName - 1; i++) {
            a += '<div class="day disable">' + " " + "</div>";
        }
        for (var i = 0; i < this.daysInMonth; i++) {
            a +=
                '<a href="' +
                    "#/" +
                    (i + 1) +
                    "/" +
                    (this.month + 1) +
                    "/" +
                    this.year +
                    '" class="day' +
                    (i + 1 == this.day ? " today" : "") +
                    '">' +
                    (i + 1) +
                    "</a>";
        }
        this.elmDays.innerHTML = a;
    };
    return Calendar;
}());
var a = new Calendar();
a.createCal();
