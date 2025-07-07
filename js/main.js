let nav = document.getElementById("navv");
let closeBtn = document.getElementById("close");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        nav.classList.add("fixed-top");
        nav.style.marginTop = "0px";
    } else {
        nav.classList.remove("fixed-top");
        nav.style.marginTop = "140px"; 
    }
});


closeBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
});
