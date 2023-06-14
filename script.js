const number = Math.floor(Math.random() * 101);
console.log(number);
let val = "";
var a = 10;
let interval;
document.getElementById("check").addEventListener("click", () => {
    clearTimeout(interval);
    if (a > 1) {
        console.log("hi");
        val = document.getElementById("value").value;
        console.log(val);
        if (val == number) {
            let e = String.fromCodePoint(0x1F929);
            document.getElementById("show").innerHTML = `Congratulations!! You won ${e}`;
            document.getElementById("text").innerHTML = "";
            let a = new Audio("wistle.wav");
            a.play();
            interval = setTimeout(() => {
                window.location.reload();
            }, 6000);
        }
        else if (val > number) {
            --a;

            document.getElementById("show").innerHTML = "You guess is more";
            document.getElementById("text").innerHTML = `You have ${a} chances left`;
        }
        else if (val < number) {
            --a;

            document.getElementById("show").innerHTML = "You guess is less";
            document.getElementById("text").innerHTML = `You have ${a} chances left`;
        }
    }
    else {
        let ee = String.fromCodePoint(0x1F62B);
        document.getElementById("show").innerHTML = `OOps !!  You lost  ${ee}`;
        document.getElementById("text").innerHTML = "You have no chances left";
        let a = new Audio("Oops.mp3");
        a.play();
        interval = setTimeout(() => {
            window.location.reload();
        }, 4000);

    }
    document.getElementById("value").value = "";
})
