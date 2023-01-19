//Objeto con los datos de los usuarios existentes (simulación de objeto JSON)
var objJSON = {
    personajes: [
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        location: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        location: "Earth",
        image: "",
      },
      {
        name: "Abadango Cluster Princess",
        status: "Alive",
        species: "Alien",
        location: "", //#unless location reemplaza contenido que devuelve false
        image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      }, //#if image devuelve false y no renderiza
      {
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        location: "Earth",
        image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
    ],
  };
  var gif = document.getElementById("gif");
  function mostrarPersonajes() {
    //Toggle de Botones
    botonMostrar.style.display = "none";
    botonOcultar.style.display = "block";
  
    //1ro - Obtener los datos del template (script) y convertirlo a string
    var template = document.querySelector("#template").innerHTML;
    console.log(template);
  
    //2do - Compilar el template (Generar la función que hace el trabajo de Handlebars. Para hacer su trabajo debe recibir un objeto)
    var templateCompilado = Handlebars.compile(template);
  
    //3ro - Insertar el template en el HTML
    var div = document.querySelector(".template");
    div.innerHTML = templateCompilado(objJSON);
  
    //Mostrar Lista
    templateVista.style.display = "block";

    gif.style.display="none";
  }
  
  function ocultarPersonajes() {
    
    //Toggle de Botones
    botonMostrar.style.display = "block";
    botonOcultar.style.display = "none";
    //Ocultar Lista
    templateVista.style.display = "none";
    //muestro gif
    gif.style.display="block";
   
  }
  
  //Escuchas de Evento Click para los botones
  var botonMostrar = document.querySelector("#mostrarPersonajes");
  botonMostrar.addEventListener("click", mostrarPersonajes);
  
  var botonOcultar = document.querySelector("#ocultarPersonajes");
  botonOcultar.addEventListener("click", ocultarPersonajes);
  
  var templateVista = document.querySelector(".template");