const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    navLinks.classList.toggle('show');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        if (mobileMenuBtn.classList.contains('open')) {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('show');
        }
        
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


const featureHeaders = document.querySelectorAll('.feature-header');

featureHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const description = header.nextElementSibling;
        const icon = header.querySelector('.feature-icon');
        
        document.querySelectorAll('.feature-description').forEach(desc => {
            if (desc !== description) {
                desc.classList.remove('active');
            }
        });
        
     
        description.classList.toggle('active');
        
   
        if (description.classList.contains('active')) {
            icon.style.transform = 'rotate(90deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
});


const appointmentForm = document.querySelector('.appointment-form');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = appointmentForm.querySelector('input[type="text"]').value;
        const phone = appointmentForm.querySelector('input[type="tel"]').value;
        const consent = appointmentForm.querySelector('input[type="checkbox"]').checked;
        
        if (!name || !phone) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (!consent) {
            alert('Please agree to the terms and conditions');
            return;
        }
        
      
        alert(`Thank you ${name}! Your appointment request has been received. We will contact you at ${phone} shortly.`);
        appointmentForm.reset();
    });
}


document.querySelectorAll('.consult-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to consultation booking...');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const firstFeature = document.querySelector('.feature-description');
    if (firstFeature) {
        firstFeature.classList.add('active');
        const firstIcon = document.querySelector('.feature-icon');
        if (firstIcon) {
            firstIcon.style.transform = 'rotate(90deg)';
        }
    }
});


const sections = document.querySelectorAll('section');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navAnchors.forEach(anchor => {
        anchor.classList.remove('active');
        if (anchor.getAttribute('href') === `#${current}`) {
            anchor.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);