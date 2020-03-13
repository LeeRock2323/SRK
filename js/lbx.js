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
