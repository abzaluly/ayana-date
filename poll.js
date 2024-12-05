document.getElementById("poll-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливает стандартную отправку формы

    const formData = new FormData(event.target); // Собираем данные формы

    // Используем fetch для отправки данных формы
    fetch('https://formspree.io/f/xpwznwqv', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert("Thank you for your answers! ❤️");
        } else {
            alert("Thank you for your answers! ❤️");
        }
    })
    .catch(error => {
        console.error('Thank you for your answers! ❤️', error);
        alert("Thank you for your answers! ❤️");
    });
});
