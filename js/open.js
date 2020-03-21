var Open = /** @class */ (function() {
    function Open() {
        this.lastCompletCity = 0;
        this.DoW = [
            "Niedziela",
            "Poniedziałek",
            "Wtorek",
            "Środa",
            "Czwartek",
            "Piątek",
            "Sobota"
        ];
        this.elmTime = document.getElementById("time");
        this.elmDay = document.getElementById("day");
        this.how = 0;
        this.name = new Array(this.how);
        this.hours = new Array(this.how);
    }
    Open.prototype.appendCity = function(name, hours) {
        this.how++;
        this.name.push(name);
        this.hours.push(new Array(7));
        for (var i = 0; i < 7; i++) {
            this.hours[this.lastCompletCity][i] = hours[i];
        }
        this.lastCompletCity++;
    };
    Open.prototype.logCity = function(number) {
        console.log(this.name[number]);
        console.log(this.hours[number]);
    };
    Open.prototype.changeHoursOnSite = function(number) {
        var time = new Date().getDay();
        this.elmDay.innerHTML = this.DoW[time];
        if (this.hours[number][time] != "") {
            this.elmTime.innerHTML = this.hours[number][time];
        } else {
            this.elmTime.innerHTML = "Dzisiaj zamknięte";
        }
    };
    return Open;
})();
var Kobyłka = ["", "16:15 - 18:45", "", "", "16:15 - 18:45", "", ""];
var Siedlce = ["", "", "16:30 - 17:30", "16:30 - 17:30", "", "", ""];
var openHours = new Open();
openHours.appendCity("Kobyłka", Kobyłka);
openHours.appendCity("Siedlce", Siedlce);
openHours.changeHoursOnSite(0);
