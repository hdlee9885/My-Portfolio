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
        const tl = new TimelineMax({ delay: 0.5 });
        if (dest.index === 0) {
            // leftColumn = document.querySelector(".left-column");
            // rightCol = document.querySelector(".right-column");
            // tl.fromTo(leftColumn, 1, { x: '-200', opacity: 0 }, { x: '0', opacity: 1 })
            //   .fromTo(rightCol, 1, { x: '200', opacity: 0 }, { x: '0', opacity: 1 });
        }

        if (dest.index === 1) {
            const aboutMe = document.querySelector(".about-me");
            const ztech = document.querySelector(".work");
            const education = document.querySelector(".edu-wrapper");
            const cmu = document.querySelector("#cmu");
            const uta = document.querySelector('#uta');
            const iit = document.querySelector('#iit');
            tl.fromTo(aboutMe, 1, { x: '-200', opacity: 0 }, { x: '0', opacity: 1 })
              .fromTo(ztech, 0.7, { opacity: 0 }, { opacity: 1 })
              .fromTo(education, 1, { x: '200', opacity: 0 }, { x: '0', opacity: 1 }, '-=1')
              .fromTo(cmu, 0.7, { opacity: 0 }, { opacity: 1 })
              .fromTo(uta, 0.7, { opacity: 0 }, { opacity: 1 })
              .fromTo(iit, 0.7, { opacity: 0 }, { opacity: 1 });
        }

        if (dest.index === 2) {
            const projects = document.querySelectorAll(".project");
            const projectTitle = document.querySelector("#project-title");
            tl.fromTo(projectTitle, 1, { y: '-200', opacity: 0 }, { y: '0', opacity: 1 });
            for (let i = 0; i < projects.length; i++) {
                tl.fromTo(projects[i], 1, { y: '200', opacity: 0 }, { y: '0', opacity: 1 });                
            }
        }

        if (dest.index === 3) {
            const contactTitle = document.querySelector("#contact-title");
            const form = document.querySelector(".form-wrapper");
            tl.fromTo(contactTitle, 1, { y: '-200', opacity: 0 }, { y: '0', opacity: 1 })
              .fromTo(form, 1, { y: '200', opacity: 0 }, { y: '0', opacity: 1 }, '-=1');
        }
    }
    // onLeave: (origin, dest, direction) => {
    //     const section = dest.item;
    //     const title = section.querySelector('h1');
    //     const tl = new TimelineMax({delay: 0.5});
    //     tl.fromTo(title, 0.5, {y: '50', opacity: 0}, {y: '0', opacity: 1});

    //     if (dest.index === 1) {
    //         const chairs = document.querySelectorAll(".chair");
    //         const description = document.querySelector(".description");
    //         tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-50%" })
    //           .fromTo(
    //             description,
    //             0.5,
    //             { opacity: 0, y: "50" },
    //             { y: "0", opacity: 1 }
    //           )
    //           .fromTo(chairs[0], 1, { opacity: 1 }, { opacity: 1 })
    //           .fromTo(chairs[1], 1, { opacity: 0 }, { opacity: 1 })
    //           .fromTo(chairs[2], 1, { opacity: 0 }, { opacity: 1 });
    //       }
    // }


})