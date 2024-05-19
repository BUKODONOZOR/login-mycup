
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST', // Método de la solicitud
    headers: {
      'Content-Type': 'application/json' // Tipo de contenido
    },
    body: JSON.stringify(data) // Cuerpo de la solicitud en formato JSON
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json(); // Parsear la respuesta como JSON
};


document.addEventListener("DOMContentLoaded", (event) => {

  document.getElementById("formemail").addEventListener("submit", function (e) {
    e.preventDefault()
    const name = document.getElementById("nameinput").value
    const email = document.getElementById("emailinput").value
    const password = document.getElementById("passwordinput").value

    const span = document.getElementById("formspantext")

    postData('http://localhost:4000/api/controller', { name: name, email: email, password: password })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  })
})