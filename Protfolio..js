  // Dynamically set the current year in the footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Optional: JavaScript to highlight active navigation link based on scroll position
        const sections = document.querySelectorAll('section[id]'); // Get all sections with an ID
        const navLinks = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                // Get a comfortable mid-point for activation, adjust 150px as needed
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active from all
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active'); // Add active to the current one
                }
            });

            // Ensure 'Home' is active when at the very top of the page
            if (window.scrollY === 0) {
                navLinks.forEach(link => link.classList.remove('active')); // Clear all
                document.querySelector('nav ul li a[href="#home"]').classList.add('active'); // Activate Home
            }
        });
   
