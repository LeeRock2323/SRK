window.addEventListener("scroll", function() {
    var a = this.scrollY;
    var b = this.document.getElementById("header");
    if (a > 120 && this.innerHeight <= 600) {
        b.classList.add("opacity0");
    } else {
        b.classList.remove("opacity0");
    }
    if (a > 1000) {
        goTop.classList.remove("hidden");
    } else {
        goTop.classList.add("hidden");
    }
});
var hed = document.getElementById("header");
hed.addEventListener("mouseover", function() {
    this.classList.remove("opacity0");
});
hed.addEventListener("mouseout", function() {
    if (window.scrollY > 120 && window.innerHeight <= 600) {
        hed.classList.add("opacity0");
    }
});

var goTop = document.getElementById("to-top");

goTop.addEventListener("click", function() {
    window.scroll(0, 0);
});
