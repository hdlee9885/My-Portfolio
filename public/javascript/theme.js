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