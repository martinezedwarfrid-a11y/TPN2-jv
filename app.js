// EJERCICIO 1 y 2: pedir las publicaciones y mostrar las primeras 10.
async function cargarPublicaciones() {
  const lista = document.getElementById("lista");

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!respuesta.ok) {
      throw new Error("No se pudieron cargar las publicaciones.");
    }

    const datos = await respuesta.json();
    console.log("Publicaciones recibidas:", datos);

    lista.innerHTML = "";

    datos.slice(0, 10).forEach(post => {
      const tarjeta = document.createElement("article");
      tarjeta.classList.add("tarjeta");

      const titulo = document.createElement("h3");
      titulo.textContent = post.title;

      const texto = document.createElement("p");
      texto.textContent = post.body;

      tarjeta.append(titulo, texto);
      lista.append(tarjeta);
    });
  } catch (error) {
    lista.innerHTML = '<p class="error">Ocurrió un error al cargar las publicaciones.</p>';
    console.error(error);
  }
}

// EJERCICIO 4: pedir usuarios y mostrar nombre, email y ciudad.
async function cargarUsuarios() {
  const contenedor = document.getElementById("usuarios");

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      throw new Error("No se pudieron cargar los usuarios.");
    }

    const usuarios = await respuesta.json();
    console.log("Usuarios recibidos:", usuarios);

    contenedor.innerHTML = "";

    usuarios.forEach(usuario => {
      const tarjeta = document.createElement("article");
      tarjeta.classList.add("tarjeta");

      const nombre = document.createElement("h3");
      nombre.textContent = usuario.name;

      const email = document.createElement("p");
      email.classList.add("email");
      email.textContent = "Email: " + usuario.email;

      const ciudad = document.createElement("p");
      ciudad.textContent = "Ciudad: " + usuario.address.city;

      tarjeta.append(nombre, email, ciudad);
      contenedor.append(tarjeta);
    });
  } catch (error) {
    contenedor.innerHTML = '<p class="error">Ocurrió un error al cargar los usuarios.</p>';
    console.error(error);
  }
}

cargarPublicaciones();
cargarUsuarios();

/*
PREGUNTAS CONCEPTUALES

1. El cliente es nuestra página web, que hace la petición desde el navegador.
   El servidor es JSONPlaceholder, que recibe la petición y devuelve los datos.

2. Usé el método GET para consultar las publicaciones. Para crear una nueva
   publicación usaría POST.

3. Al pedir GET /posts/500, JSONPlaceholder responde con un objeto vacío {}
   y código 404? En JSONPlaceholder, los recursos inexistentes pueden responder
   con 404. Se puede comprobar en la pestaña Network del navegador o en la consola.
   (La API de prueba puede tener comportamientos simulados según la ruta.)

4. Una API es un conjunto de rutas que permiten que un programa solicite datos
   o realice operaciones. JSONPlaceholder sirve para practicar con datos de prueba
   sin necesitar crear nuestro propio servidor.

5. Usamos JavaScript porque se ejecuta en el navegador y puede modificar el HTML
   para mostrar los datos en la página. Python se usa normalmente en la computadora
   o en el servidor y no modifica directamente la página del navegador.

6. Tendríamos que cambiar las direcciones de fetch por las rutas de nuestra API
   creada con FastAPI, manteniendo el resto del código si los datos tienen
   la misma estructura.
*/
