document.addEventListener('DOMContentLoaded', ()=>{
    let urlApi = 'http://vbu011valentyn-001-site1.htempurl.com/User/GetAll';
    fetch(urlApi)
    .then((res) =>{
        return res.json();
    })
    .then( (data) => {
        let container = document.getElementById('container');
        container.setAttribute('class', 'container w-50 mt-5 p-3 shadow');
        for (const iterator of data) {
            let card = document.createElement('div');
            card.setAttribute('class', 'card-body  mt-5 p-3 shadow bg-primary text-white');

            let cartTitle = document.createElement('h5');
            cartTitle.setAttribute('class', 'card-title');
            cartTitle.innerText = `Name - ${iterator['name']}`;

            let cartText = document.createElement('p');
            cartText.setAttribute('class', 'card-text');
            cartText.innerText = `Token - ${iterator['token']}`;

            card.append(cartTitle);
            card.append(cartText);
            container.append(card);
        }
    })
    .catch( (err) =>{
        console.error("BAD API!");
    });
});