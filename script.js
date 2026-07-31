const attributeButtons = document.querySelectorAll(".attribute-heading");

attributeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const attributeSection = button.parentElement;
        const perkList = attributeSection.querySelector(".perk-list");
        perkList.classList.toggle("open");
    });
});