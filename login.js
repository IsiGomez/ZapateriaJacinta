document.addEventListener('DOMContentLoaded', () => {
    const seccLogin = document.getElementById('secc-login');
    const seccRegistro = document.getElementById('secc-registro');

    const linkRegistro = document.getElementById('link-registro');
    const linkLogin = document.getElementById('link-login');

    if (linkRegistro) {
        linkRegistro.addEventListener('click', (e) => {
            e.preventDefault();
            seccLogin.classList.toggle('oculto');
            seccRegistro.classList.toggle('oculto');
        });
    }

    if (linkLogin) {
        linkLogin.addEventListener('click', (e) => {
            e.preventDefault();
            seccLogin.classList.toggle('oculto');
            seccRegistro.classList.toggle('oculto');
        });
    }

    const logForm = document.getElementById('log-form');
    if (logForm) {
        logForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let esValido = true;

            const email = document.getElementById('log-email');
            const pass = document.getElementById('log-pass');
            const msgExito = document.getElementById('login-exito');

            msgExito.textContent = '';

            const valorEmail = email.value.trim();
            if (valorEmail === '') {
                mostrarError('error-log-email', 'El correo electrónico no puede estar vacío.');
                esValido = false;
            } else if (!valorEmail.includes('@') || !valorEmail.includes('.')) {
                mostrarError('error-log-email', 'El correo debe incluir "@" y un dominio (ej: .com o .cl).');
                esValido = false;
            } else if (valorEmail.indexOf('@') > valorEmail.lastIndexOf('.')) {
                mostrarError('error-log-email', 'El formato del correo es incorrecto.');
                esValido = false;
            } else {
                limpiarError('error-log-email');
            }

            const valorPass = pass.value.trim();
            if (valorPass === '') {
                mostrarError('error-log-pass', 'Por favor ingresa tu contraseña.');
                esValido = false;
            } else {
                limpiarError('error-log-pass');
            }

            if (esValido) {
                msgExito.textContent = 'Sesion Iniciada correctamente.';
                logForm.reset();
            }
        });
    }

    const regForm = document.getElementById('reg-form');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let esValido = true;

            const nombre = document.getElementById('reg-nombre');
            const email = document.getElementById('reg-email');
            const pass = document.getElementById('reg-pass');
            const passConfirm = document.getElementById('reg-pass-confirm');
            const msgExito = document.getElementById('registro-exito');

            msgExito.textContent = '';

            const valorNombre = nombre.value.trim();
            if (valorNombre === '') {
                mostrarError('error-reg-nombre', 'El nombre completo es obligatorio.');
                esValido = false;
            } else if (valorNombre.length < 3) {
                mostrarError('error-reg-nombre', 'El nombre debe tener al menos 3 caracteres.');
                esValido = false;
            } else {
                limpiarError('error-reg-nombre');
            }

            const valorEmail = email.value.trim();
            if (valorEmail === '') {
                mostrarError('error-reg-email', 'El correo electrónico es obligatorio.');
                esValido = false;
            } else if (!valorEmail.includes('@') || !valorEmail.includes('.')) {
                mostrarError('error-reg-email', 'Ingresa un correo válido (debe incluir "@" y ".")');
                esValido = false;
            } else if (valorEmail.indexOf('@') > valorEmail.lastIndexOf('.')) {
                mostrarError('error-reg-email', 'El dominio del correo no es válido.');
                esValido = false;
            } else {
                limpiarError('error-reg-email');
            }

            const valorPass = pass.value;
            if (valorPass === '') {
                mostrarError('error-reg-pass', 'Debes ingresar una contraseña.');
                esValido = false;
            } else if (valorPass.length < 6) {
                mostrarError('error-reg-pass', 'La contraseña debe tener un mínimo de 6 caracteres.');
                esValido = false;
            } else {
                limpiarError('error-reg-pass');
            }

            const valorPassConfirm = passConfirm.value;
            if (valorPassConfirm === '') {
                mostrarError('error-reg-pass-confirm', 'Debes confirmar tu contraseña.');
                esValido = false;
            } else if (valorPassConfirm !== valorPass) {
                mostrarError('error-reg-pass-confirm', 'Las contraseñas no coinciden.');
                esValido = false;
            } else {
                limpiarError('error-reg-pass-confirm');
            }

            if (esValido) {
                msgExito.textContent = '¡Registro completado exitosamente!';
                regForm.reset();
            }
        });
    }

    function mostrarError(idElemento, mensaje) {
        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.textContent = mensaje;
            elemento.style.color = '#c0392b';
            elemento.style.fontSize = '12px';
            elemento.style.display = 'block';
            elemento.style.marginTop = '4px';
        }
    }

    function limpiarError(idElemento) {
        const elemento = document.getElementById(idElemento);
        if (elemento) {
            elemento.textContent = '';
        }
    }

    function limpiarMensajes() {
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        const loginExito = document.getElementById('login-exito');
        const regExito = document.getElementById('registro-exito');
        if (loginExito) loginExito.textContent = '';
        if (regExito) regExito.textContent = '';
    }
});