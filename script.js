const servicesData = [{
    title: "Frontend Development",
    category: "frontend",
    description: ['Skilled Front-end Developer with 4 years of experience in designing, developing and maintaining front-end web applications. Achieved measurable success in increasing page load speeds by 20% which lead to an increase in website conversion rates. Led the implementation of new front-end development system which resulted in a 15% reduction in development time and a 20% increase in website performance. Adept in collaborating with cross-functional teams and delivering projects on-time and on-budget.']
}, {
    title: "Backend Development",
    category: "backend",
    description: ['John Doe is a Backend Developer with 10 years of experience in software development and project management. He has in-depth knowledge of programming languages and development tools, and his strong problem-solving and troubleshooting skills enable him to identify and solve technical problems quickly. He is also proficient in multiple languages and has certifications in programming and software development. ']
}, {
    title: "Fullstack Development",
    category: "fullstack",
    description: ['Experienced full-stack developer with nine years of experience in the industry. Seeking to leverage high proficiency in SQL, Python, JavaScript and CSS in a full-time career as a full-stack developer for Greenway Tech.']
}, ]




//  =================SERVICES TOGGLE=================

const serviceButtons = document.querySelectorAll('.service-item');
const serviceDetails = document.querySelector(".services-right");

const getService = (category) => {
    const details = servicesData.find(item => item.category === category);
    serviceDetails.innerHTML = `
        <h3>${details.title}</h3>
        <p>${details.description}</p>
    `;
}

const removeActiveClass = () =>{
 serviceButtons.forEach((button) =>{
        button.classList.remove('active');
    });
}
 serviceButtons.forEach((item) =>{
    item.addEventListener('click', () =>{
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass);
        item.classList.add('active');
    });
});


getService('frontend');//why this is not work


//  =================MIXITUP=================


const containerEl = document.querySelector(".projects-container");
var mixer = mixitup(containerEl, {
    animation:{
        enable: false
    }
});

mixer.filter('*');



//  =================SWIPER (testimonial sections)=================


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination:{
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});




//  =================NAV TOGGLE (small screen)=================



const navMenu = document.querySelector(".nav-menu");
const navOpenBtn = document.querySelector(".nav-toggle-open");
const navCloseBtn = document.querySelector(".nav-toggle-close");

const openNavHandler = () =>{
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () =>{
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click', openNavHandler);
navCloseBtn.addEventListener('click', closeNavHandler);


// close nav menu on click of nav link or small screens

const navItems = document.querySelectorAll('a');
if(window.innerWidth < 768){
    navItems.forEach(item => {
        item.addEventListener('click', closeNavHandler);
    });
}



//  =================THEME TOGGLE (light & dark mode)=================

const themeBtn = document.querySelector(".nav-theme-btn");

themeBtn.addEventListener('click', () => {
    let bodyClass = document.body.className;
    if(!bodyClass){
        bodyClass = 'dark';
        document.body.className = bodyClass;
        // change toggle icon
        themeBtn.innerHTML = `<i class="uil uil-sun"></i>`;
        //save theme to local storage
        window.localStorage.setItem('theme', bodyClass);
    }
    else{
        bodyClass = '';
        document.body.className = bodyClass;
        themeBtn.innerHTML = `<i class="uil uil-moon"></i>`;
        //save theme to local storage
        window.localStorage.setItem('theme', bodyClass);
    }
});


//load theme on load
window.addEventListener('load', () => {
    document.body.className = window.localStorage.getItem('theme');
})