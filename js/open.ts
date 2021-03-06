class Open {
    how;
    name;
    hours;
    lastCompletCity = 0;

    DoW = [
        "Niedziela",
        "Poniedziałek",
        "Wtorek",
        "Środa",
        "Czwartek",
        "Piątek",
        "Sobota"
    ];

    elmTime = document.getElementById("time");
    elmDay = document.getElementById("day");
    constructor() {
        this.how = 0;
        this.name = new Array(this.how);
        this.hours = new Array(this.how);
    }
    appendCity(name, hours) {
        this.how++;
        this.name.push(name);
        this.hours.push(new Array(7));
        for (let i = 0; i < 7; i++) {
            this.hours[this.lastCompletCity][i] = hours[i];
        }
        this.lastCompletCity++;
    }
    logCity(number) {
        console.log(this.name[number]);
        console.log(this.hours[number]);
    }
    changeHoursOnSite(number) {
        var time = new Date().getDay();
        this.elmDay.innerHTML = this.DoW[time];
        if (this.hours[number][time] != "") {
            this.elmTime.innerHTML = this.hours[number][time];
        } else {
            this.elmTime.innerHTML = "Dzisiaj zamknięte";
        }
    }
}

var Kobyłka = ["", "16:15 - 18:45", "", "", "16:15 - 18:45", "", ""];
var Siedlce = ["", "", "16:30 - 17:30", "16:30 - 17:30", "", "", ""];
//Liczone od niedzieli
var openHours = new Open();
openHours.appendCity("Kobyłka", Kobyłka);
openHours.appendCity("Siedlce", Siedlce);
openHours.changeHoursOnSite(0);
