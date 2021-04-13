// Immediately invoked function expression
// to not pollute the global scope
(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
        // Disable button during spin
        startButton.style.pointerEvents = 'none';
        // Set the transition on the wheel
        wheel.style.transition = 'all 1s ease';
        // Rotate the wheel
        deg = 272 + Math.floor(Math.random() * 59);
        wheel.style.transform = 'rotate(' + deg + 'deg)';
    });

    wheel.addEventListener('transitionend', () => {
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        //feestoeter
        naarNoordKorea();
    });
})();

async function naarNoordKorea(){
    document.cookie = "confetti=ON;"
    await sleep(500);
    var audio = new Audio('meuk/plaatjes/toet.mp3');
    audio.play();
    await sleep(1500);
    window.location.href = "noord-korea.html";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}