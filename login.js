
const getdata = async ()=>{
    try{

        return new Promise((resolve,reject)=>{
            fetch('http://localhost:4000/api/controller')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
                
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            }); 
        })
    }catch(error){
        console.log(error);
    }

}


let arrayemails = []
const obtener =async (array) =>{
    const datausers = await getdata();
    datausers.forEach(element => {
        element.forEach(element2 => {
            array.push(element2.email);
        });
    });    
}
obtener(arrayemails)
console.log(arrayemails)

let user =[];
const obteneruser =async (usuario,email) =>{
    const datausers = await getdata();
    datausers.forEach(element => {
        element.forEach(element2 => {
            if(element2.email === email){
                usuario.push(element2);
            }
        });
    });    
}


async function obtenerYMostrarpassword() {
    await obteneruser(user, "peitoperez@gmail.com");
    console.log(user[0].password);
}


document.addEventListener("DOMContentLoaded", (event) => {
    
    document.getElementById("formemail").addEventListener("submit", function (e) {
        e.preventDefault()
        const email = document.getElementById("emailinput").value
        const span = document.getElementById("formspantext")
       
        
        if (arrayemails.includes(email)) {
            localStorage.setItem("email", email);
            window.location = ("index2.html")
           
 
        }
        else {
            span.innerText = "El usuario no ha sido registrado"
        }
    })
}) 

