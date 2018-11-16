let buttom = document.getElementById('buttom');
let container = document.getElementById('container');

buttom.addEventListener('click', traer);

    function traer(){

    fetch('texto.txt')
    .then( data => data.text())
    .then (data =>{
        console.log(data);

        container.innerHTML = `${data}`;
    })

};