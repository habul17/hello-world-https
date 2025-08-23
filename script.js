let isDark = true;
const link = document.querySelector("a");

function toggleColors() {
    if (isDark) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        link.style.color = "black";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        link.style.color = "white";

    }
    isDark = !isDark;
}

document.addEventListener("click", toggleColors);