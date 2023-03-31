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


aboutSide.addEventListener('click', () => {
    cover.style.display = 'block';
    overlay.classList.toggle('overlay');
});

skillsSide.addEventListener('click', () => {
    skills.style.display = 'block';
    overlay.classList.toggle('overlay');
});

overlay.addEventListener('click', () => {
    skills.classList.add('popdown');
    cover.style.display = 'none';
    skills.style.display = 'none';
    contact.style.display = 'none';
    overlay.classList.toggle('overlay');
});

skillImgs.forEach((skillImg, index) => {
    skillImg.addEventListener('mouseover', () => {
        skillImgTexts[index].style.display = 'block';
    })
    skillImg.addEventListener('mouseout', () => {
        skillImgTexts[index].style.display = 'none';
      });
})

contactSide.addEventListener('click', () => {
    contact.style.display = 'flex';
    overlay.classList.toggle('overlay');
})



console.log('skillImg', skillImgs)
console.log('texts', skillImgTexts)




function welcomeDisplay() {
    welcome.style.display = 'block';
    setTimeout(function() {
        document.querySelector('#welcome > div ~ p').classList.add('fadeOut');
      }, 8000);
}


//Window.onload(welcomeDisplay());