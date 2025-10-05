        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        const carouselInner = document.getElementById('carouselInner');
        const indicatorsContainer = document.getElementById('indicators');

        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('span');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.onclick = () => goToSlide(i);
            indicatorsContainer.appendChild(indicator);
        }

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            const indicators = document.querySelectorAll('.indicator');
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        setInterval(nextSlide, 5000);

        if (window.innerWidth <= 768) {
            document.querySelectorAll('.nav-item').forEach(item => {
                const link = item.querySelector('.nav-link');
                const dropdown = item.querySelector('.dropdown-content');
                
                if (dropdown) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        item.classList.toggle('active');
                    });
                }
            });
        }

        function toggleMenu() {
            const navMenu = document.getElementById("navMenu");
            navMenu.classList.toggle("open");
        
            const menuToggle = document.querySelector(".menu-toggle");
            menuToggle.classList.toggle("open");
        }

        const navLinks = document.querySelectorAll('.nav-link');
        const currentPath = window.location.pathname.split("/").pop();

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href').split("/").pop();
            if(linkPath === currentPath) {
                link.classList.add('active');
            }
        });



