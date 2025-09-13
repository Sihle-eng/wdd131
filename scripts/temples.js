const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = ` ©${currentYear} ✌️ Sihlelelweyinkhosi Mchobokazi ✌️ | Eswatini`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList = navMenu.classList.contains('open')
})