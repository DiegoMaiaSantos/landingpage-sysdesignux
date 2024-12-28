function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');

    const button = document.querySelector('.dropdown-toggle');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !isExpanded);
}
