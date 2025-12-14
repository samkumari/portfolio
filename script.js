// Dark Mode Toggle
const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

// Load saved theme preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.innerHTML = '<span class="toggle-icon">☀️</span>';
    } else {
        document.body.classList.remove('dark-mode');
        themeBtn.innerHTML = '<span class="toggle-icon">🌙</span>';
    }
}

// Toggle theme
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
        themeBtn.style.animation = 'pulse 0.5s ease-out';
    
        setTimeout(() => {
            themeBtn.style.animation = '';
        }, 500);
    
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '<span class="toggle-icon">☀️</span>';
    } else {
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '<span class="toggle-icon">🌙</span>';
    }
});

// Initialize theme on page load
initTheme();

// Navigation Active State
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll detection for active navigation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;
        const scroll = window.scrollY;
        
        if (scroll >= top && scroll <= bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(
                `.nav-link[data-section="${section.id}"]`
            );
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});

// Form submission (basic validation)
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const messageInput = form.querySelector('textarea');
        const submitBtn = form.querySelector('.submit-btn');
        
        const name = nameInput.value;
        const email = emailInput.value;
        const message = messageInput.value;
        
        if (name && email && message) {
            // Store original button content
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '✓ Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
            
            form.reset();
            
                    // Reset button after 2 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                    }, 2000);
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
            entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
                    // Add staggered animation to child elements
                    const projectCards = entry.target.querySelectorAll('.project-card');
                    const pills = entry.target.querySelectorAll('.pill');
                    const tableRows = entry.target.querySelectorAll('.table-row');
                    const timelineItems = entry.target.querySelectorAll('.timeline-item');
            
                    projectCards.forEach((card, idx) => {
                        card.style.setProperty('--card-index', idx);
                    });
            
                    pills.forEach((pill, idx) => {
                        pill.style.setProperty('--item-index', idx);
                    });
            
                    tableRows.forEach((row, idx) => {
                        row.style.setProperty('--row-index', idx);
                    });
            
                    timelineItems.forEach((item, idx) => {
                        item.style.setProperty('--timeline-index', idx);
                    });
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});


// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Add hover ripple effect to buttons
document.querySelectorAll('.submit-btn, .toggle-btn').forEach(button => {
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
        
        // Only add ripple style if button doesn't have it
        if (!this.querySelector('.ripple')) {
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
        }
    });
});

console.log('🎨 Portfolio loaded with enhanced animations! 🚀');
