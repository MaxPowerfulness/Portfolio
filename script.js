// Global Variables
const overlay = document.getElementById('overlay');
const aboutSide = document.querySelector('.about');
const cover = document.getElementById('about');
const welcome = document.getElementById('welcome');
const skills = document.getElementById('skills');
const skillsSide = document.querySelector('.skills');
const skillImgs = document.querySelectorAll('.skillImg');
const skillImgTexts = document.querySelectorAll('.iconText');
const contactSide = document.querySelector('.contact');
const contact = document.getElementById('contact');
const email = document.getElementById('email');

// Nav bar
aboutSide.addEventListener('click', () => {
    cover.style.display = 'block';
    overlay.classList.toggle('overlay');
});

skillsSide.addEventListener('click', () => {
    skills.style.display = 'block';
    overlay.classList.toggle('overlay');
});

// Nav bar pages
skillImgs.forEach((skillImg, index) => {
    skillImg.addEventListener('mouseover', () => {
        skillImgTexts[index].style.display = 'block';
    })
    skillImg.addEventListener('mouseout', () => {
        skillImgTexts[index].style.display = 'none';
      });
});

contactSide.addEventListener('click', () => {
    contact.style.display = 'flex';
    overlay.classList.toggle('overlay');
});

overlay.addEventListener('click', () => {
    skills.classList.add('popdown');
    cover.style.display = 'none';
    skills.style.display = 'none';
    contact.style.display = 'none';
    overlay.classList.toggle('overlay');
});


// Form
email.addEventListener('input', (event) => {
    if (!email.validity.valid) {
        email.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
    }
});




function welcomeDisplay() {
    welcome.style.display = 'block';
    setTimeout(function() {
        document.querySelector('#welcome > div ~ p').classList.add('fadeOut');
      }, 8000);
}


//Window.onload(welcomeDisplay());