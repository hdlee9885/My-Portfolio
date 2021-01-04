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
        document.getElementById('theme-style').href = 'portfolio.css';
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css';
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css';
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css';
    }

    if (mode == 'orange') {
        document.getElementById('theme-style').href = 'orange.css';
    }

    localStorage.setItem('theme', mode);
}