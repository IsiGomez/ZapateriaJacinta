document.addEventListener('DOMContentLoaded', () => {
    const seccLogin = document.getElementById('secc-login');
    const seccRegistro = document.getElementById('secc-registro');

    const linkRegistro = document.getElementById('link-registro');
    const linkLogin = document.getElementById('link-login');

    if (linkRegistro) {
        linkRegistro.addEventListener('click', (e) => {
            e.preventDefault();
            seccLogin.classList.toggle("oculto");
            seccRegistro.classList.toggle("oculto");
        });
    }

    if (linkLogin) {
        linkLogin.addEventListener('click', (e) => {
            e.preventDefault();
            seccLogin.classList.toggle("oculto");
            seccRegistro.classList.toggle("oculto");
        });
    }
});