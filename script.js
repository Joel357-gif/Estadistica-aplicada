document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const ensayos = [
        { id: '1UYpKoAcPEa1P3DdXXG6mcoUyeq35xmVV', name: 'Ensayo 1' },
        { id: '1gu6rkkBZrNd15Q6jZFmRr03x7SvAKbP-', name: 'Ensayo 2' }
    ];
    
    let currentEnsayo = 0;
    const ensayoIframe = document.getElementById('ensayoIframe');
    const ensayoLink = document.getElementById('ensayoLink');
    const ensayoCounter = document.getElementById('ensayoCounter');
    const ensayoPrev = document.getElementById('ensayoPrev');
    const ensayoNext = document.getElementById('ensayoNext');
    
    if (ensayoIframe && ensayoLink && ensayoCounter) {
        function updateEnsayo(index) {
            const e = ensayos[index];
            ensayoIframe.src = 'https://drive.google.com/file/d/' + e.id + '/preview';
            ensayoLink.href = 'https://drive.google.com/file/d/' + e.id + '/view?usp=sharing';
            ensayoCounter.textContent = (index + 1) + ' / ' + ensayos.length;
        }
        
        ensayoPrev.addEventListener('click', function() {
            currentEnsayo = (currentEnsayo - 1 + ensayos.length) % ensayos.length;
            updateEnsayo(currentEnsayo);
        });
        
        ensayoNext.addEventListener('click', function() {
            currentEnsayo = (currentEnsayo + 1) % ensayos.length;
            updateEnsayo(currentEnsayo);
        });
    }
});
