var currentTime;

setInterval(function() {
    var d = new Date();
    currentTime =
        formatZero(d.getHours()) + " : " +
        formatZero(d.getMinutes()) + " : " +
        formatZero(d.getSeconds()) + "\n";
    document.getElementById("time").value = currentTime;
}, 1000)

function formatZero(num) {
    return String(num).padStart(2, '0')
}

let savedTime = [];

function saveTime() {
    savedTime.push(currentTime);
    if (savedTime.length < 11) {
        document.getElementById("labs").innerHTML +=
            `<div class="container-fluid d-flex justify-content-center fw-bold fs-4">
                ${currentTime}
            </div>`;

    }
}