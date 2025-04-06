document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Typing animation
    const typingElement = document.getElementById('typing');
    const professions = ['Frontend Developer', 'Web Designer', 'UI/UX Enthusiast', 'Problem Solver'];
    let professionIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentProfession = professions[professionIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentProfession.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentProfession.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentProfession.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            professionIndex = (professionIndex + 1) % professions.length;
            setTimeout(type, 500);
        } else {
            const typingSpeed = isDeleting ? 100 : 150;
            const randomFactor = Math.random() * 100;
            setTimeout(type, isEnd ? typingSpeed : typingSpeed + randomFactor);
        }
    }

    // Start typing animation after a delay
    setTimeout(type, 1000);

    // Mobile menu toggle
    function openMenu() {
        document.getElementById('navLinks').classList.add('active');
    }

    function closeMenu() {
        document.getElementById('navLinks').classList.remove('active');
    }

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('#navLinks a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Project data
    // Updated Project data - Beginner Friendly Projects
const projects = [
    {
        title: 'To-Do List App',
        description: 'A simple task manager that allows adding, completing, and deleting tasks with local storage persistence.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://67f253d3ae6056c40a6d60a0--wonderful-choux-82a3e7.netlify.app/',
        codeLink: 'https://github.com/callmeab213/Todo_List',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
        title: 'Calculator',
        description: 'A functional calculator that performs basic arithmetic operations with a clean interface.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        demoLink: 'https://warm-melomakarona-2ae88e.netlify.app/',
        codeLink: 'https://github.com/callmeab213/Calculator',
        image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80'
    },
    {
        title: 'Quiz Game',
        description: 'A multiple-choice quiz with score tracking and feedback on answers.',
        tags: ['JavaScript', 'DOM Manipulation'],
        demoLink: 'https://quizzg.netlify.app/',
        codeLink: 'https://github.com/callmeab213/Quiz-Game',
        image:'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=250&q=80'
    },
    // {
    //     title: 'Beach Website',
    //     description: 'A responsive blog layout with articles, categories, and a comment section UI.',
    //     tags: ['HTML', 'CSS', 'Javascript'],
    //     demoLink: '#',
    //     codeLink: 'https://github.com/callmeab213/BeachWebsite',
    //     image: 'beach.jpg'
    // }
];

    // Render projects
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.codeLink}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Scroll reveal animation
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        reset: false
    });

    scrollReveal.reveal('.hero-content, .hero-image', { delay: 200 });
    scrollReveal.reveal('.section-title', { delay: 200 });
    scrollReveal.reveal('.about-image, .about-text', { delay: 300, interval: 200 });
    scrollReveal.reveal('.skill-card', { delay: 200, interval: 150 });
    scrollReveal.reveal('.project-card', { delay: 200, interval: 150 });
    scrollReveal.reveal('.contact-info, .contact-form', { delay: 300, interval: 200 });
});