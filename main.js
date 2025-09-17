// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Typing effect for code rain
function updateCodeRain() {
    const codeElements = document.querySelectorAll('.code-rain');
    const codeSnippets = [
        'fun calculateResult() {\n    val result = a + b\n    return result\n}',
        'override fun onCreate() {\n    super.onCreate()\n    initializeViews()\n}',
        '@GET("weather/current")\n    suspend fun getCurrentWeather()\n    : Response<Weather>',
        'LazyColumn {\n    items(newsList) {\n        NewsCard(it)\n    }\n}',
        'class WeatherRepository {\n    suspend fun fetchWeather()\n    = api.getWeather()\n}',
        'data class News(\n    val title: String,\n    val content: String\n)',
        'binding.btnCalculate.setOnClickListener {\n    performCalculation()\n}',
        '@Composable\nfun WeatherCard(weather: Weather) {\n    Card { Text(weather.temp) }\n}',
        'val retrofit = Retrofit.Builder()\n    .baseUrl(BASE_URL)\n    .build()',
        'implementation "androidx.compose.ui:ui"\nimplementation "androidx.lifecycle:lifecycle"'
    ];
    
    codeElements.forEach((element, index) => {
        setTimeout(() => {
            const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            element.innerHTML = randomSnippet.replace(/\n/g, '<br>');
        }, index * 2000);
    });
}

// Update code rain every 10 seconds
setInterval(updateCodeRain, 10000);

// Add click effects to buttons (ripple effect)
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Enhanced hover effects for skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.code-rain');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Simulate loading
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
        heroContent.style.transition = 'all 1s ease-out';
    }, 300);
    
    // Initialize code rain
    updateCodeRain();
});

// Mobile menu toggle (if you want to add a mobile menu later)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button (you can add this to HTML later)
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (scrollToTopBtn) {
        if (scrollTop > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    }
});

// Dynamic typing effect for subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', function() {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 150);
    }
});

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll