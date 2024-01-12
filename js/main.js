function stars() {
    let universe = document.querySelector("#universe");
    let count = 1900;
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
stars();
