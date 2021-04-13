function openTab(tabName) {
    var i, b;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block"){
            b = x[i];
        }
        x[i].style.display = "none";
    }
    if (b === document.getElementById(tabName)) {
        document.getElementById(tabName).style.display = "none";
    } else {
        document.getElementById(tabName).style.display = "block";
    }
}

function opdekopChecker() {
    var anchor = window.location.hash.substr(1);
    if (anchor === 'opdekop') {
        document.body.className = 'opdekop';
    }

}
