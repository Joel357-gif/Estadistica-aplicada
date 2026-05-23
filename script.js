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
    
    function initSlider(items, iframeId, linkId, counterId, prevId, nextId, onUpdate) {
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
            if (onUpdate) onUpdate(index);
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
            { id: '1gu6rkkBZrNd15Q6jZFmRr03x7SvAKbP-', name: 'Ensayo 2' },
            { id: '16JcJUyWTFLAacRpvcWkioXTjiodcst9B', name: 'Conferencia Smart Learning' },
            { id: '18ABNDYcoEcr5FDTQRJXap_8wJbsfDkoi', name: 'Conferencia Transformación Digital' },
            { id: '1vv220YV0zNKL70Ovr8fuliAxKFngLihh', name: 'Conferencia Educación a Distancia' },
            { id: '1MmCjmSqatj7NEbR3xr1901ibLBmgiwlj', name: 'Conferencia Metodología Activa' }
        ],
        'ensayoIframe', 'ensayoLink', 'ensayoCounter', 'ensayoPrev', 'ensayoNext',
        function(index) {
            const btn = document.getElementById('ensayoLink');
            const titleEl = document.getElementById('ensayoTitle');
            if (index === 2) {
                btn.textContent = 'Ver Ensayo de la Conferencia';
                btn.className = 'btn-small highlight';
                titleEl.textContent = 'IA Generativa en el ámbito profesional: Editorial Tekman / Directora Carolina Clemente';
                titleEl.style.display = 'block';
            } else if (index === 3) {
                btn.textContent = 'Ver Ensayo de la Conferencia';
                btn.className = 'btn-small highlight';
                titleEl.textContent = 'Caracterización de plataformas de inteligencia artificial para la transformación digital de la gestión educativ - MSc. Milton Labanda';
                titleEl.style.display = 'block';
            } else if (index === 4) {
                btn.textContent = 'Ver Ensayo de la Conferencia';
                btn.className = 'btn-small highlight';
                titleEl.textContent = 'Transformación Digital de la Educación a Distancia: PhD. Yolanda Borja y MSc. Diego Tipán';
                titleEl.style.display = 'block';
            } else if (index === 5) {
                btn.textContent = 'Ver Ensayo de la Conferencia';
                btn.className = 'btn-small highlight';
                titleEl.textContent = 'Metodolodia activa apoyadas por tecnología - MSc. Hamilton Cabrera y MSc. Jorge Muñoz';
                titleEl.style.display = 'block';
            } else {
                btn.textContent = 'Ver PDF';
                btn.className = 'btn-small';
                titleEl.style.display = 'none';
            }
        }
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

    initSlider(
        [
            { id: '1lBt40wAm1IC3PKDntFUcbwallMTVEkyc', name: 'Trabajo 1' },
            { id: '1ET7n--US4QR1Omhr0Ztue_cEOPXx_5dX', name: 'Trabajo 2' }
        ],
        'trabajoIframe', 'trabajoLink', 'trabajoCounter', 'trabajoPrev', 'trabajoNext',
        function(index) {
            const excelLink = document.getElementById('trabajoExcelLink');
            const excelDivider = excelLink.previousElementSibling;
            const pbiLink = document.getElementById('trabajoPbiLink');
            const pbiDivider = document.getElementById('trabajoPbiDivider');
            if (index === 0) {
                excelLink.style.display = 'inline-block';
                excelDivider.style.display = 'block';
                pbiLink.style.display = 'none';
                pbiDivider.style.display = 'none';
            } else {
                excelLink.style.display = 'none';
                excelDivider.style.display = 'none';
                pbiLink.style.display = 'inline-block';
                pbiDivider.style.display = 'block';
            }
        }
    );
});
