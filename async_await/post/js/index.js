let formulario = document.getElementById('form');
let btn = document.getElementById('btn');
let parrafo = document.getElementById('parrafo');

formulario.addEventListener('submit', post)

async function post(e) {
    try {
        e.preventDefault();

        let data = new FormData(formulario);

        console.log(data.get('pass'));

        let enviar = await fetch('js/post.php', {

            method: 'POST',

            body: data

        })

        let res = await enviar.json();

        // console.log(res);
        // parrafo.textContent = `${res}`;
        parrafo.innerHTML = `
            
            <p>${res}</p>

            `

    } catch (erro) {

        console.log(erro);

    }

}

