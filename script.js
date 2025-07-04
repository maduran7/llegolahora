document.addEventListener('DOMContentLoaded', () => {

    // --- ELEMENTOS DEL DOM ---
    const inicioDiv = document.getElementById('inicio');
    const slideshowContainer = document.getElementById('slideshow-container');
    const propuestaDiv = document.getElementById('propuesta');
    
    const empezarBtn = document.getElementById('empezarBtn');
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');

    const contadorSpan = document.getElementById('contador');
    const fotoEl = document.getElementById('foto');
    const textoEl = document.getElementById('texto');

    // --- CONFIGURACIÓN DEL CONTADOR ---
    const fechaInicio = new Date('2025-04-06T00:00:00');

    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        contadorSpan.textContent = `${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
    }

    // Actualizar el contador cada segundo
    setInterval(actualizarContador, 1000);
    actualizarContador(); // Llamada inicial

    // --- CONFIGURACIÓN DEL SLIDESHOW ---
    // ¡¡IMPORTANTE!! Personaliza esto con tus fotos y textos
    const slides = [
        { foto: 'fotos/foto1.jpg', texto: 'Nuestra primera foto juntos.. Aquí no se notaba pero la verdad estaba demasiado nervioso.' },
        { foto: 'fotos/foto2.jpg', texto: 'Aquí, ya mi corazón empezaba a later a mil por hora, nos dimos nuestro primer beso y me flechaste por completo.' },
        { foto: 'fotos/foto3.jpg', texto: 'Los días pasaban, y yo cada segundo me sentía mas afortunado de recopilar momentos contigo.' },
        { foto: 'fotos/foto4.jpg', texto: 'Y como no enamorarme de ti? Si te robaste hasta el último rincón de mi corazón.' },
        { foto: 'fotos/foto5.jpg', texto: 'Me fui dando cuenta que lo que estábamos viviendo, iba a ser para siempre. Este día estabas particularmente hermosa.' },
        { foto: 'fotos/foto6.jpg', texto: 'Cada minuto que vivimos juntos, cada risa, cada palabra y admiración, han sido los principales culpables de lo babeado que me tienes.' },
        { foto: 'fotos/foto7.jpg', texto: 'Y por supuesto, tu también me incluiste con tus tesoros mas preciados.' },
        { foto: 'fotos/foto8.jpg', texto: 'Tienes una mirada que me enamora cada día más, y me hace reafirmar todos los días lo enamorado que estoy.' },
        { foto: 'fotos/foto9.jpg', texto: 'Tienes una hermosa personalidad, sentimientos unicos, y de paso, eres bellísima.' },
        { foto: 'fotos/foto10.jpg', texto: 'Es por estas razones y muchas más, que estoy demasiado seguro de mi futuro contigo.' },


    ];

    let slideActual = 0;
    let intervaloSlideshow;

    function mostrarSiguienteSlide() {
        if (slideActual < slides.length) {
            fotoEl.src = slides[slideActual].foto;
            textoEl.textContent = slides[slideActual].texto;
            slideActual++;
        } else {
            // Se acabaron las fotos, mostrar la propuesta
            clearInterval(intervaloSlideshow);
            slideshowContainer.classList.remove('active');
            propuestaDiv.classList.add('active');
        }
    }

    // --- MANEJO DE EVENTOS ---

    // Al hacer clic en "Empezar"
    empezarBtn.addEventListener('click', () => {
        inicioDiv.classList.remove('active');
        slideshowContainer.classList.add('active');
        
        mostrarSiguienteSlide(); // Muestra la primera imagen de inmediato
        intervaloSlideshow = setInterval(mostrarSiguienteSlide, 15000); // Cambia cada 15 segundos
    });

    // Al hacer clic en "Sí"
    siBtn.addEventListener('click', () => {
        propuestaDiv.innerHTML = `
            <h1 class="nombre-especial">Te amo!</h1>
        `;
    });

    // Al pasar el mouse sobre "No", el botón se escapa
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});