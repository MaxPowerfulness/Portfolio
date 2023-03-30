// Global Variables
const overlay = document.getElementById('overlay');
const aboutSide = document.querySelector('.about');
const cover = document.getElementById('about');
const welcome = document.getElementById('welcome');
const skills = document.getElementById('skills');
const skillsSide = document.querySelector('.skills');
const skillImgs = document.querySelectorAll('.skillImg');

aboutSide.addEventListener('click', () => {
    cover.style.display = 'block';
    overlay.classList.toggle('overlay');
})

skillsSide.addEventListener('click', () => {
    skills.style.display = 'block';
    overlay.classList.toggle('overlay');
})

overlay.addEventListener('click', () => {
    cover.style.display = 'none';
    skills.style.display = 'none';
    overlay.classList.toggle('overlay');
})

skillImgs.forEach(skillImg => {
    skillImg.addEventListener('mouseover', () => {

    })
})




function welcomeDisplay() {
    welcome.style.display = 'block';
    setTimeout(function() {
        document.querySelector('#welcome > div ~ p').classList.add('fadeOut');
      }, 8000);
}


//Window.onload(welcomeDisplay());