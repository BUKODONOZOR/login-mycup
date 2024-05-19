
const saludoRecuperado = localStorage.getItem("email");

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

    document.getElementById("formpassword").addEventListener("submit", function (e) {
        e.preventDefault()  
        const password = document.getElementById("passwordinput").value
        const span = document.getElementById("formspantext")
        

       postData('http://localhost:4000/api/login', {email: saludoRecuperado, password: password })
       .then(data => {
         console.log('Success:', data);
         console.log(saludoRecuperado);
         console.log(password)
       })
       .catch(error => {
         console.error('Error:', error);
       });
       
        
    })
}) 

