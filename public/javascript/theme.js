let themeDots = document.getElementsByClassName('theme-dot');

let currTheme = localStorage.getItem('theme');

if (currTheme == null) {
    setTheme('light');
} else {
    setTheme(currTheme);
}

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', () => {
        let mode = themeDots[i].dataset.mode;
        console.log(mode)
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = '../public/stylesheets/portfolio.css';
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = '../public/stylesheets/blue.css';
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = '../public/stylesheets/green.css';
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = '../public/stylesheets/purple.css';
    }

    if (mode == 'orange') {
        document.getElementById('theme-style').href = '../public/stylesheets/orange.css';
    }

    localStorage.setItem('theme', mode);
}

$(document).ready(function() {
    $('.contact-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});

// 3d card effect

const container = document.querySelectorAll(".project-container");
const project = document.querySelectorAll(".project");

const projectImg = document.querySelectorAll(".thumbnail");
const projectTitle = document.querySelectorAll(".project-title");
const projectIntro = document.querySelectorAll(".project-intro");
const projectButton = document.querySelectorAll(".project-link");

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener('mousemove', (e) => {
        console.log(window.innerWidth, innerHeight);
        console.log(e.pageX, e.pageY);
        let x = ((window.innerWidth - e.pageX) / (container.length - i)) / ((container.length - i) * 300);
        let y = ((window.innerHeight - e.pageY) / (container.length - i)) / ((container.length - i) * 300);
        project[i].style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
    
    container[i].addEventListener('mouseenter', (e) => {
        project[i].style.transition = "none";
        // pop out
        projectTitle[i].style.transform = 'translateZ(150px)';
        projectImg[i].style.transform = 'translateZ(125px)';
        // $(".thumbnail").css({"border-radius": "100px"});
        projectIntro[i].style.transform = "translateZ(150px)";
        projectButton[i].style.transform = "translateZ(150px)";
    });
    
    container[i].addEventListener('mouseleave', (e) => {
        project[i].style.transition = "all 0.75s ease";
        project[i].style.transform = `rotateY(0deg) rotateX(0deg)`;
        // pop out
        projectTitle[i].style.transform = 'translateZ(0px)';
        // $(".thumbnail").css({"border-radius": "0px"});
        projectImg[i].style.transform = 'translateZ(0px)';
        projectIntro[i].style.transform = "translateZ(0px)";
        projectButton[i].style.transform = "translateZ(0px)";
    });
}



// let mouseCursor = document.querySelector(".cursor");
// window.addEventListener("mousemove", (e)=> {
//     mouseCursor.style.top = e.pageY + 'px';
//     mouseCursor.style.left = e.pageX + 'px';
// })

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, dest, direction) => {
        const section = dest.item;
        const leftColumn = section.querySelector(".left-column");        const rightCol = section.querySelector(".right-column");
        const tl = gsap.timeline({ defaults: { ease: 'power1.oot' } });
        if (dest.index === 0) {
            // leftColumn = document.querySelector(".left-column");
            // rightCol = document.querySelector(".right-column");
            // tl.fromTo(leftColumn, 1, { x: '-200', opacity: 0 }, { x: '0', opacity: 1 })
            //   .fromTo(rightCol, 1, { x: '200', opacity: 0 }, { x: '0', opacity: 1 });
        }

        if (dest.index === 1) {
            const aboutMe = document.querySelector(".about-me");
            const ztech = document.querySelector(".work");
            const expertise = document.querySelector("#expertise");
            const skills = document.querySelector('#skills');
            const education = document.querySelector(".edu-wrapper");
            const cmu = document.querySelector("#cmu");
            const uta = document.querySelector('#uta');
            const iit = document.querySelector('#iit');
            tl.fromTo(aboutMe, 0.5, { x: '-200', opacity: 0 }, { x: '0', opacity: 1, delay: 0.5 })
              .fromTo(ztech, 0.5, { opacity: 0 }, { opacity: 1 })
              .fromTo(education, 0.5, { x: '200', opacity: 0 }, { x: '0', opacity: 1 })
              .fromTo(cmu, 0.5, { opacity: 0 }, { opacity: 1 })
              .fromTo(uta, 0.5, { opacity: 0 }, { opacity: 1 })
              .fromTo(iit, 0.5, { opacity: 0 }, { opacity: 1 })
              .fromTo(expertise, 0.5, { x: '-200', opacity: 0 }, { x: '0', opacity: 1 })
              .fromTo(skills, 0.5, { opacity: 0 }, { opacity: 1 });
        }

        // if (dest.index === 2) {
        //     const projects = document.querySelectorAll(".project");
        //     const projectTitle = document.querySelector("#project-title");
        //     tl.fromTo(projectTitle, 0.5, { y: '-200', opacity: 0 }, { y: '0', opacity: 1 });
        //     for (let i = 0; i < projects.length; i++) {
        //         tl.fromTo(projects[i], 0.5, { y: '200', opacity: 0 }, { y: '0', opacity: 1 });                
        //     }
        // }

        if (dest.index === 3) {
            const contactTitle = document.querySelector("#contact-title");
            const form = document.querySelector(".form-wrapper");
            tl.fromTo(contactTitle, 0.5, { y: '-200', opacity: 0 }, { y: '0', opacity: 1 })
              .fromTo(form, 0.5, { y: '200', opacity: 0 }, { y: '0', opacity: 1 }, '-=1');
        }
    }

});
