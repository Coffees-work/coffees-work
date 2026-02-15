const scriptURL = 'https://script.google.com/macros/s/AKfycbz4MA07IcoF4yCq2lSq9VfKlrkIpVQNWzRmB1hTVgCX1TeSmLzl5eiu33w2lcf9tM4n2A/exec';
const form = document.getElementById('contactForm');
const messageBox = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
       messageBox.textContent = 'Zpráva byla úspěšně odeslána.';
      messageBox.className = 'form-message success';
      form.reset();
    } else {
      messageBox.textContent = 'Chyba při odesílání zprávy.';
      messageBox.className = 'form-message error';
    }
  })
  .catch(error => {
    messageBox.textContent = 'Chyba: ' + error.message;
    messageBox.className = 'form-message error';
  });
});
