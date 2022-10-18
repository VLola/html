document.addEventListener('DOMContentLoaded', ()=>{
    let urlApi = 'http://vbu011valentyn-001-site1.htempurl.com/Food';
    fetch(urlApi)
    .then((res) =>{
        return res.json();
    })
    .then( (data) => {
        let container = document.getElementById('container');
        container.setAttribute('class', 'container w-50 mt-5 p-3 shadow');
        
        let flex = document.createElement('div');
        flex.setAttribute('class', 'd-flex flex-wrap justify-content-center');
        container.append(flex);
        for (const iterator of data) {

            let card = document.createElement('div');
            card.setAttribute('class', 'card shadow');
            card.style.width = '14rem';
            card.style.margin = '1rem';

            let cardImgTop = document.createElement('img');
            cardImgTop.setAttribute('class', 'card-img-top m-auto mt-2');
            cardImgTop.setAttribute('src', `${iterator['urlImage'].replace( /%2F/g, "/")}`);
            cardImgTop.style.width = '12rem';

            let cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body d-flex flex-column p-3 shadow');

            let cartTitle = document.createElement('p');
            cartTitle.setAttribute('class', 'card-title text-primary');
            cartTitle.innerText = `${iterator['name']}`;

            let cartText = document.createElement('h5');
            cartText.setAttribute('class', 'card-text mt-auto');
            cartText.innerText = `${iterator['price']} грн.`;
            
            let cartButton = document.createElement('a');
            cartButton.setAttribute('class', 'btn btn-primary');
            cartButton.innerText = `Купить`;

            cardBody.append(cartTitle);
            cardBody.append(cartText);
            cardBody.append(cartButton);
            card.append(cardImgTop);
            card.append(cardBody);
            flex.append(card);
        }
    })
    .catch( (err) =>{
        console.error("BAD API!");
    });
});