let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', (e) => {
    //evitar que se ejecute por defecto
    e.preventDefault();

    //acceder a los input
    var datos = new FormData(formulario);

    console.log(datos);
    console.log(datos.get('usuario'));
    console.log(datos.get('pass'));


    fetch('post.php', {

        method: 'POST',
        //enviar los input
        body: datos
    })
        //resibir respuesta
        .then((rest) => {

            return rest.json();
        })
        .then((data) => {
            //    return console.log(data)
            if (data === "error") {
                respuesta.innerHTML = `
                 <div class="card-panel teal lighten-2 blue-text text-lighten-5">
                        <p>llena todos los campos<p>                 
                 </div>
               
               `
            } else {
                respuesta.innerHTML = `
                 <div class="card-panel teal lighten-2 blue-text text-lighten-5">
                    ${data}
                <div>               
               `
            }
        })
});