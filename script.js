let isDark = true;

function toggleColors() {
    if (isDark) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    isDark = !isDark;
}

document.addEventListener("click", toggleColors);