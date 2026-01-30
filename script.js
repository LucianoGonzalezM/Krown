document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica del Age Gate ---
    const ageGate = document.getElementById('age-gate');
    const btnEnter = document.getElementById('btn-enter');
    const btnLeave = document.getElementById('btn-leave');
    const body = document.body;

    // Bloquear scroll al inicio
    body.classList.add('no-scroll');

    // Comprobar si ya validó antes (usando localStorage)
    if(localStorage.getItem('ageVerified') === 'true') {
        ageGate.style.display = 'none';
        body.classList.remove('no-scroll');
    }

    btnEnter.addEventListener('click', () => {
        // Efecto de desvanecimiento
        ageGate.style.opacity = '0';
        setTimeout(() => {
            ageGate.style.display = 'none';
            body.classList.remove('no-scroll');
            // Guardar en memoria del navegador para no preguntar siempre
            localStorage.setItem('ageVerified', 'true');
        }, 500);
    });

    btnLeave.addEventListener('click', () => {
        alert("Lo sentimos, no puedes acceder a este sitio.");
        window.location.href = "https://google.com"; // Redirigir afuera
    });


    // --- 2. Inicializar Swiper Carrusel ---
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Cuantos se ven en móvil
        spaceBetween: 30, // Espacio entre tarjetas
        loop: true, // Carrusel infinito
        grabCursor: true, // Manito para arrastrar
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // Breakpoints (Responsivo)
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3, // 3 columnas en escritorio
            },
        },
    });

});

// --- LÓGICA DEL MENÚ MÓVIL ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        // Esto alterna la clase 'active' en el menú y el botón
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Opcional: Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ... (Tu código anterior) ...

    // --- 4. NAVBAR EFECTO SCROLL ---
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Si bajamos más de 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });