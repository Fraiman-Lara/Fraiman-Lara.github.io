
// Enviar formulario de contacto
const form = document.getElementById('form')
const sendMail = document.getElementById('emailA')

function handleSendEmail(event) {
    event.preventDefault()
    const fd = new FormData(this)

    sendMail.setAttribute(
        'href' ,
         `mailTo: fraimanlara@gmail.com?subject=${fd.get('subject')}&body${fd.get(
            'message'
        )}`
    )

    sendMail.click()
    alert('El mensaje ha sido enviado exitosamente');
}

form.addEventListener('submit', handleSendEmail)

// Modo Oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
