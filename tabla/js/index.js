var bottom = document.getElementById('bottom');
var box = document.getElementById('box');

bottom.addEventListener('click', rest);

function rest() {

    fetch('tabla.json')
        .then(res => res.json())
        .then(datos => {
            tabla(datos)
        })
}

function tabla(datos) {

    box.innerHTML = ''

    for(let valor of datos){

        box.innerHTML += `
        
             <tr>
                <td> ${ valor.id }</td>
                <td>${ valor.nombre }</td>
                <td>${ valor.email }.87</td>
                <td>${ valor.estado ? 'activo' : 'inactivo'}</td>
            </tr>

        `
        
    }
}

