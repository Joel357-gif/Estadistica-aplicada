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
    
    function initSlider(items, iframeId, linkId, counterId, prevId, nextId) {
        const iframe = document.getElementById(iframeId);
        const link = document.getElementById(linkId);
        const counter = document.getElementById(counterId);
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nextId);
        let current = 0;
        
        if (!iframe || !link || !counter) return;
        
        function update(index) {
            const item = items[index];
            iframe.src = 'https://drive.google.com/file/d/' + item.id + '/preview';
            link.href = 'https://drive.google.com/file/d/' + item.id + '/view?usp=sharing';
            counter.textContent = (index + 1) + ' / ' + items.length;
        }
        
        prev.addEventListener('click', function() {
            current = (current - 1 + items.length) % items.length;
            update(current);
        });
        
        next.addEventListener('click', function() {
            current = (current + 1) % items.length;
            update(current);
        });
    }

    initSlider(
        [
            { id: '1UYpKoAcPEa1P3DdXXG6mcoUyeq35xmVV', name: 'Ensayo 1' },
            { id: '1gu6rkkBZrNd15Q6jZFmRr03x7SvAKbP-', name: 'Ensayo 2' }
        ],
        'ensayoIframe', 'ensayoLink', 'ensayoCounter', 'ensayoPrev', 'ensayoNext'
    );

    initSlider(
        [
            { id: '1bztNwXv_EhqqAupLg4VkQYMjCM0vjw1x', name: 'Mapa 1' },
            { id: '1Zq-DGebgJIc_COg4Fedh5eAp639jIUXp', name: 'Mapa 2' },
            { id: '1UtOOP0QIvjGlDFlorGeOUBkcc5NRdTJA', name: 'Mapa 3' },
            { id: '1UZtnA4TdF9KopzANAoUL45jO94L5v4oj', name: 'Mapa 4' }
        ],
        'mapaIframe', 'mapaLink', 'mapaCounter', 'mapaPrev', 'mapaNext'
    );
});
