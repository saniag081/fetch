let container = document.getElementById('contenedor');
let buttom = document.getElementById('buttom');

buttom.addEventListener('click', traer);

async function traer() {
    
    try{

        let api = await fetch('https://randomuser.me/api/');
        let res = await api.json();
        
        console.log(res.results['0']);
        
        container.innerHTML = `
        
        <img src="${res.results['0'].picture.medium}" width="100px">
        <p>${res.results['0'].name.first}</p>
        `;

    }catch(e){

        console.log(e);
    }

};