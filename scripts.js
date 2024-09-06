document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Função para abrir/fechar o menu no modo mobile
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
