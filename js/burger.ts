var burger = document.getElementById("burger")! as HTMLDivElement;

burger.addEventListener("click", function() {
    document.getElementById("mobile").classList.toggle("hidden");
});
