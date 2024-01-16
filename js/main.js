function stars() {
    let universe = document.querySelector("#universe");
    let count = 2500;
    let i = 0;

    while (i < count) {
        let star = document.createElement("i");

        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 2;
        let duration = Math.random() * 30;

        star.style.left = 0.2 + x + "px";
        star.style.top = 0.2 + y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1.2 + size + "px";
        star.style.animationDuration = 10 + duration + "s";
        star.style.animationDelay = duration + "s";
        universe.appendChild(star);
        i++;
    }
}
function dropStar() {
    let droppedStar = document.querySelector(".cometa");
    let x = Math.random() * (window.innerWidth / 3);
    let y = Math.random() * (window.innerHeight / 3);
    let random = Math.floor(Math.random() * 3);
    let delay = Math.random() * 4;
    if (random == 0 || random == 1) {
        droppedStar.style.right = x + "px";
        droppedStar.style.top = 0 + "px";
    } else {
        droppedStar.style.top = y + "px";
        droppedStar.style.right = 0 + "px";
        droppedStar.style.left = "initial";
    }
    droppedStar.style.animationDelay = delay + "s";
    console.log(droppedStar);
    console.log(delay);
}
setInterval(dropStar, 6000);
stars();
