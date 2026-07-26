var dropdown = document.getElementById("contactMethod");
var emailSection = document.getElementById("emailSection");
var phoneSection = document.getElementById("phoneSection");

dropdown.addEventListener("change", function () {
    if (dropdown.value === "email") {
        emailSection.style.display = "block";
        phoneSection.style.display = "none";
    } else if (dropdown.value === "phone") {
        emailSection.style.display = "none";
        phoneSection.style.display = "block";
    } else {
        emailSection.style.display = "none";
        phoneSection.style.display = "none";
    }
});
