var g = document.querySelectorAll("img");
var foto__container;
for (let index = 0; index < g.length; index++) {
    g[index].addEventListener("click", function() {
        var lbx = document.getElementById("lbxC");
        lbx.innerHTML =
            '<iframe src="lightboxgallery.html" frameborder="0" id="lbx" ></iframe>';
        lbx.classList.add("visible");
        document.getElementsByClassName("mini")[0].classList.add("hidden");
        document.querySelectorAll("header")[0].classList.add("hidden");

        document.cookie = "main_foto--src=" + g[index].src;
    });
}

var xX = document.getElementById("close-lbx");
xX.addEventListener("click", function() {
    var lbx = document.getElementById("lbxC");
    lbx.innerHTML = "";
    lbx.classList.remove("visible");
    document.getElementsByClassName("mini")[0].classList.remove("hidden");
    document.querySelectorAll("header")[0].classList.remove("hidden");
});
