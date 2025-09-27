const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = ` ©${currentYear} ✌️ Sihlelelweyinkhosi Mchobokazi ✌️ | Eswatini`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    // hamburger.classList = navMenu.classList.contains('open')
    hamburger.classList.toggle('open');
})

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"

    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Aba Nigeria",
        location: "Aba Nogeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/5-a34bb1899983ed73e499a18da741b3704e1d4d35.jpg"
    },
    {
        templeName: "Idaho Falls United States",
        location: "Idaho Falls, United States",
        dedicated: "1945, September, 23-25",
        area: 85624,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg",
    }
];
const templeContainer = document.getElementById("temple-cards");
function displayTemples(temples) {
    templeContainer.innerHTML = " ";
    temples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.className = "temple-card";

        templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">`;

        templeContainer.appendChild(templeCard);
    });
}
    function filterTemples(category) {
        let filteredTemples = [];

        switch (category) {
            case 'old':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area <= 10000);
                break;
            default:
                filteredTemples = temples;
        }
        displayTemples(filteredTemples);
    }
    document.addEventListener("DOMContentLoaded", () => {
        filterTemples("home");

        document.querySelectorAll("#navMenu a").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                const category = link.textContent.toLowerCase();
                filterTemples(category)
            })
        })
    })