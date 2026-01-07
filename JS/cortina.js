document.addEventListener('DOMContentLoaded', function() {
    const demoBtn = document.getElementById('demoBtn');
    const titleOverlay = document.querySelector('.title-overlay');
    const toggle = document.getElementById('toggle');
    const curtainContainer = document.getElementById('curtain');

    demoBtn.addEventListener('click', function() {
        //Oculta título y botón
        titleOverlay.classList.add('hidden');
        
        //Activa cortina después del fade
        setTimeout(function() {
            toggle.checked = false;
            
            //Oculta nieve cuando se abra la cortina
            setTimeout(function() {
                curtainContainer.classList.add('opened');
            }, 50); 
        }, 100);
    });
});