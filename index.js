const handbuger = document.querySelector('.handbuger');
const close = document.querySelector('.close');
const features = document.querySelector('.features');
const featuresLink = document.querySelector('.features-link');
const company = document.querySelector('.company');
const companyLink = document.querySelector('.company-link');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const main = document.getElementById('main');
const section = document.getElementById('section');

features.addEventListener('click', (e) => {
e.preventDefault();
    featuresLink.parentElement.classList.toggle('active');
})

company.addEventListener('click', (e) => {
    e.preventDefault();
        companyLink.parentElement.classList.toggle('active');
    })

    handbuger.addEventListener('click', () => {
        close.style.display = "block";
        handbuger.style.display = "none";
        nav.parentElement.classList.add('display');
        
        

    })
    close.addEventListener('click', () => {
        handbuger.style.display = "block";
        close.style.display = "none";
        nav.parentElement.classList.remove('display');
        
        
    })