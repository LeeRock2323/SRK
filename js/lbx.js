var foto = document.getElementsByClassName("nav-foto");
var lbx_menu = document.getElementById("lbx-menu");
var main_foto = document.getElementById("main-foto");
var amciu = document.cookie.split("/; */");
amciu.forEach(am => {
    console.log(am);
    if (am.split("=")[0] == "main_foto--src") {
        main_foto.src = am.split("=")[1];
    }
});

lbx_menu.style.gridTemplateColumns = "repeat(" + (foto.length + 1) + ", 250px)";
console.log(lbx_menu.style.gridTemplateColumns);

for (let i = 0; i < foto.length; i++) {
    const elm = foto[i];
    elm.addEventListener("click", function() {
        document.getElementById("main-foto").src = elm.src;
    });
}

var navigation = document.getElementById("navigation");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");

var transformFoto = 1.0;

plus.addEventListener("click", function() {
    transformFoto += 0.1;
    main_foto.style.transform = "scale(" + transformFoto + ")";
});

minus.addEventListener("click", function() {
    transformFoto -= 0.1;
    main_foto.style.transform = "scale(" + transformFoto + ")";
});
