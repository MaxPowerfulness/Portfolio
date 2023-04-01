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


// Creates a welcome message. 
function writeWelcomeDisplay () {
    const textContainer = document.createElement('div');
    textContainer.classList.add('welcome');
    const line1 = document.createElement('p');
    const line2 = document.createElement('p');
    line1.textContent = "Welcome to my Portfolio";
    line2.textContent = "Here's a little about me";
    document.body.appendChild(textContainer);
    textContainer.appendChild(line1);
    textContainer.appendChild(line2);;
    setTimeout(function () {
        line1.classList.add('fadeIn')
    }, 500)
    setTimeout(function () {
        line2.classList.add('fadeIn');
    }, 3000)
    return textContainer;
};

// Executes writeWelcomeDisaply and adds classes for text fade in fade out effect.
function welcomeDisplay() {
    const textContainer = writeWelcomeDisplay().children;
    console.log('textContainer', textContainer);
    setTimeout(function() { 
        for (const element in textContainer) {
            textContainer[element].classList.remove('fadeIn');
            textContainer[element].classList.add('fadeOut');
        }
    }, 7000);
}

// Runs welcomeDisaply on page load.
Window.onload(welcomeDisplay());