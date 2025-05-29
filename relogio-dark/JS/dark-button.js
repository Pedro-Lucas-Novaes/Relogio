const themeToggle = document.getElementById('theme_toggle');
const body = document.body;

themeToggle.addEventListener('click', () =>{
    body.classList.toggle('dark');
    

    if(body.classList.contains('dark')) {
        themeToggle.src = 'IMGS/sun-icon.webp';
    } else {
        themeToggle.src = 'IMGS/moon-icon.webp';
    }
});