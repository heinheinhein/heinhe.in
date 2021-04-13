function showForm() {
    var form = document.getElementById("form");
    var success = document.getElementById("success");
    var voorwaarden = document.getElementById("voorwaarden");
    var contact = document.getElementById("contact");

    if (success.hasAttribute("hidden") === false) {
        success.setAttribute("hidden", "");
    }
    if (voorwaarden.hasAttribute("hidden") === false) {
        voorwaarden.setAttribute("hidden", "");
    }
    if (contact.hasAttribute("hidden") === false) {
        contact.setAttribute("hidden", "");
    }

    form.removeAttribute("hidden");
}

function showSuccess() {
    var form = document.getElementById("form");
    var success = document.getElementById("success");
    var voorwaarden = document.getElementById("voorwaarden");
    var contact = document.getElementById("contact");

    if (form.hasAttribute("hidden") === false) {
        form.setAttribute("hidden", "");
    }
    if (voorwaarden.hasAttribute("hidden") === false) {
        voorwaarden.setAttribute("hidden", "");
    }
    if (contact.hasAttribute("hidden") === false) {
        contact.setAttribute("hidden", "");
    }

    success.removeAttribute("hidden");
}

function showVoorwaarden() {
    var form = document.getElementById("form");
    var success = document.getElementById("success");
    var voorwaarden = document.getElementById("voorwaarden");
    var contact = document.getElementById("contact");

    if (form.hasAttribute("hidden") === false) {
        form.setAttribute("hidden", "");
    }
    if (success.hasAttribute("hidden") === false) {
        success.setAttribute("hidden", "");
    }
    if (contact.hasAttribute("hidden") === false) {
        contact.setAttribute("hidden", "");
    }

    voorwaarden.removeAttribute("hidden");
}

function showContact() {
    var form = document.getElementById("form");
    var success = document.getElementById("success");
    var voorwaarden = document.getElementById("voorwaarden");
    var contact = document.getElementById("contact");

    if (form.hasAttribute("hidden") === false) {
        form.setAttribute("hidden", "");
    }
    if (voorwaarden.hasAttribute("hidden") === false) {
        voorwaarden.setAttribute("hidden", "");
    }
    if (success.hasAttribute("hidden") === false) {
        success.setAttribute("hidden", "");
    }

    contact.removeAttribute("hidden");
}