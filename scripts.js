document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remover o efeito 'active' de todos os links
            links.forEach(link => link.parentElement.classList.remove('active'));

            // Adicionar o efeito 'active' ao link clicado
            link.parentElement.classList.add('active');

            // Redirecionar suavemente para a seção
            const sectionId = event.target.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);

            section.scrollIntoView({ behavior: 'smooth' });

            // Alterar a cor da seção clicada (efeito visual temporário)
            highlightSection(section);
        });
    });

    function highlightSection(section) {
        section.classList.add('active'); // Adicionar classe 'active'
        setTimeout(() => {
            section.classList.remove('active'); // Remover após 1 segundo
        }, 1000);
    }
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

