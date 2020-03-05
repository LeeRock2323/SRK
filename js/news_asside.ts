var asside = document.getElementById("cal")! as HTMLDivElement;
asside.addEventListener("click", function() {
    if (asside.style.transform == "0") {
        asside.classList.toggle("expand");
    }
});
