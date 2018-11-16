let buttom = document.getElementById('buttom');
let container = document.getElementById('container');

buttom.addEventListener('click', traer);

function traer() {

    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0']);

            container.innerHTML = `
                    <img src="${data.results['0'].picture.medium}" width="100px" class="responsive-img circle">
                    <p>NOMBRE: ${data.results['0'].name.first}</p>

            `;
        })
};