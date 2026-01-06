document.addEventListener('DOMContentLoaded', function() {
    const demoBtn = document.getElementById('demoBtn');
    const titleOverlay = document.querySelector('.title-overlay');
    const toggle = document.getElementById('toggle');
    const curtainContainer = document.getElementById('curtain');

    demoBtn.addEventListener('click', function() {
        // 1. Oculta título y botón
        titleOverlay.classList.add('hidden');
        
        // 2. Activa cortina después del fade
        setTimeout(function() {
            toggle.checked = false;
            
            // 3. Oculta nieve cuando se abra la cortina
            setTimeout(function() {
                curtainContainer.classList.add('opened');
            }, 50); // Después de la animación de cortina (1s)
        }, 100);
    });
});