var rand1 = Math.random();
rand1 = Math.ceil(rand1 * 6);

var rand2 = Math.random();
rand2 = Math.ceil(rand2 * 6);

var linkImg = './images/dice' + rand1 + '.png';
document.querySelectorAll("img")[0].attributes.src.textContent = linkImg;
linkImg = './images/dice' + rand2 + '.png';
document.querySelectorAll("img")[1].attributes.src.textContent = linkImg;

if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Won";
}
else if (rand1 < rand2) {
    document.querySelector("h1").innerHTML = "Player 2 Won 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}