function turnThatFrownUpsideDown() {
    window.location.href = "index.html#opdekop";
}

function sqlInjectie() {
    window.location.replace("php/functions/db_connect.php.html");
}

function selfhack(){
    window.location.href = "hack.html";
}

function login(){
    window.location.href = "https://demo.cpanel.net:2083/";
}

function Countdown(elem, seconds) {
    var that = {};

    that.elem = elem;
    that.seconds = seconds;
    that.totalTime = seconds * 100;
    that.usedTime = 0;
    that.startTime = +new Date();
    that.timer = null;

    that.count = function () {
        that.usedTime = Math.floor((+new Date() - that.startTime) / 10);

        var tt = that.totalTime - that.usedTime;
        if (tt <= 0) {
            that.elem.innerHTML = '00:00:00';
            clearInterval(that.timer);
            window.location.replace("tro/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/lo/trollface.html");
        } else {
            var mi = Math.floor(tt / (60 * 100));
            var ss = Math.floor((tt - mi * 60 * 100) / 100);
            var ms = tt - Math.floor(tt / 100) * 100;

            that.elem.innerHTML = that.fillZero(mi) + ":" + that.fillZero(ss) + ":" + that.fillZero(ms);
        }
    };

    that.init = function () {
        if (that.timer) {
            clearInterval(that.timer);
            that.elem.innerHTML = '00:00:00';
            that.totalTime = seconds * 100;
            that.usedTime = 0;
            that.startTime = +new Date();
            that.timer = null;
        }
    };

    that.start = function () {
        if (!that.timer) {
            that.timer = setInterval(that.count, 10);
        }
    };

    that.fillZero = function (num) {
        return num < 10 ? '0' + num : num;
    };

    return that;
}

function resetTimer(seconden) {
    var span = document.getElementById('time');
    var countdown = new Countdown(span, seconden);
    countdown.init();
    countdown.start();
}
