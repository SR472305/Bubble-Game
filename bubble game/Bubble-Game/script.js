var timer = 60;
var score = 0;
var hitrn;

function increasescore() {
    score += 10;

    document.querySelector("#Scoreup").textContent = score
}

function hitme() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn
}
function bubble() {
    let double = "";

    for (let i = 1; i <= 72; i++) {
        let rn = Math.floor(Math.random() * 10)
        double += `<div class="buble">${rn}</div>`;
    }

    document.querySelector("#plnbtm").innerHTML = double;
}
function runtimer() {
    var timetake = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timetake);
            document.querySelector("#plnbtm").innerHTML = `<h1>Game over</h1> 
                  <button id="restart">Restart Game</button>
            <br>  `
            document.querySelector("#restart").addEventListener("click", function () {
                timer = 60;
                score  = 0;
                
                document.querySelector("#timerval").innerHTML = timer;
                document.querySelector("#hitval").innerHTML = hitrn;
                document.querySelector("#Scoreup").innerHTML = score
                bubble();
                hitme();
                runtimer();
                
            })
        }
    }, 1000)
}


document.querySelector("#plnbtm").addEventListener("click", function (detai) {
    var clickedno = Number(detai.target.textContent);
    if (clickedno === hitrn) {
        increasescore();
        hitme();
        bubble();
    }

})


runtimer()
bubble()
hitme()
