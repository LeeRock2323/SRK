//obiekty dom
var but = document.getElementById("change");
var map = document.getElementById("google-map");
var lokalizacja = document.getElementById("loc");
//zmienne tekstowe
//linki map
var sdl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d625979.2524138221!2d21.989477582362266!3d52.20284125031774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f5af37861c3ef%3A0x9a7b94472e056c28!2sSzko%C5%82a%20Podstawowa%20nr%208!5e0!3m2!1spl!2spl!4v1583838981095!5m2!1spl!2spl";
var kob = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262199.07224991074!2d21.198655342391355!3d52.370278023097086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ed00c4e5df801%3A0x565fcfb8a99a36ed!2zWmVzcMOzxYIgU3prw7PFgiBQdWJsaWN6bnljaCBOciAyIHcgS29iecWCY2U!5e0!3m2!1spl!2spl!4v1583827134038!5m2!1spl!2spl";
//lokalizacja
var ulSdl = "<div>ul. Pescantina 2</div><div>Siedlce, 08-101</div>";
var ulKob = "<div>ul. Elizy Orzeszkowej 3/5</div><div>Kobyłka, 05-230</div>";
//flagi
var flag = 1;
but.addEventListener("click", function () {
    if (flag) {
        map.src = sdl;
        but.innerHTML = "Znajdź nas w Kobyłce";
        lokalizacja.innerHTML = ulSdl;
        flag = 0;
    }
    else {
        map.src = kob;
        but.innerHTML = "Znajdź nas w Siedlcach";
        lokalizacja.innerHTML = ulKob;
        flag = 1;
    }
});
