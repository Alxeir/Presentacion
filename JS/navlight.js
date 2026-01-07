document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const sections = document.querySelectorAll('#quien-soy, #gustos, #videojuegos, #redes, #proyectos');
        const navLinks = document.querySelectorAll('.nav-btn');
        
        const observer = new IntersectionObserver((entries) => {
            let activeSection = '';
            
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const threshold = entry.target.id === 'proyectos' ? 0.05 : 0.1;
                    if (entry.intersectionRatio > threshold) {
                        activeSection = entry.target.id;
                    }
                }
            });
            
            if (activeSection) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`a[href="#${activeSection}"].nav-btn`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        }, {
            threshold: [0.05, 0.1, 0.2, 0.3, 0.4],  
            rootMargin: window.innerWidth <= 767 ? '-30% 0px -50% 0px' : '-15% 0px -65% 0px'  
        });
        
        sections.forEach(section => observer.observe(section));
    }, 100);
});
