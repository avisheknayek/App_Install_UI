let percent = document.getElementById("percent");
let installBtn = document.getElementById("btn2");
let uninstallBtn = document.getElementById("btn1");
let circle = document.getElementById("progressCircle");

let progress = 0;
let interval;

const circumference = 408;

function installApp() {
    if (progress > 0) return;

    installBtn.innerText = "Installing...";
    installBtn.disabled = true;

    interval =setInterval(() => {
        progress++;

        percent.innerText = progress + "%";


        let offset = circumference - (progress / 100) * circumference;
        circle.style.strokeDashoffset = offset;

        if (progress >= 100) {
            clearInterval(interval);

            installBtn.innerText = "Open";
            installBtn.disabled = false;

            installBtn.style.width = "250px";
            uninstallBtn.style.width = "250px";
            uninstallBtn.style.display = "inline-block";
        }
    }, 70);
}

function uninstallApp() {
    progress = 0;
    percent.innerText = "0%"

    circle.style.strokeDashoffset = circumference;
    installBtn.style.width = "450px";

    installBtn.innerText = "Install";
    uninstallBtn.style.display = "none";
}