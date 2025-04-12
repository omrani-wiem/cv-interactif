document.addEventListener("DOMContentLoaded", function() {
    let skills = document.querySelectorAll(".fill");
    skills.forEach(skill => {
        skill.style.width = skill.classList.contains("html") ? "90%" : "80%";
    });
});
