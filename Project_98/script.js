
function SaveNote(){
    let cardTitle = document.getElementById('note-title');
    let cardText = document.getElementById('note-text');
    Add(cardTitle.value, cardText.value);
}

function Add(title, text){
    $.post( "https://localhost:7180/Admin/Add",
    {
        title: title,
        text: text,
    }).done(function(data) {
        console.log(data);
    });
}

function DeleteNotes(){
    for (const element of document.getElementsByClassName("valik")){
        if(element.checked){
            Delete(element.id);
        }
    }
}

function Delete(id){
    $.ajax({
        url: "https://localhost:7180/Admin/Delete?id=" + id,
        type: "DELETE",
        success: function() {
            console.log("Deleted successfully.");
        },
        error: function() {
            console.error("Error delete!");
        }
    });
}

function GetId(id){
    $.get("https://localhost:7180/User/GetId?id=" + id)
    .done((data) =>{
        console.log(data);
    })
    .fail(() =>{
        console.warn("ERROR !");
    });
}

function GetAll(){
    let elementDiv = document.getElementById('notes');
    while(elementDiv.firstChild){
        elementDiv.removeChild(elementDiv.firstChild);
    }
    $.get("https://localhost:7180/User/GetAll")
    .done((data) =>{
        for (const iterator of data) {
            LoadNote(iterator['id'],iterator['title'], iterator['text']);
        }
        
    })
    .fail(() =>{
        console.warn("ERROR !");
    });
}

function LoadNote(id, title, text){
    
    let elementDiv = document.getElementById('notes');

    let card = document.createElement('div');
    card.setAttribute('class', 'card-body mt-5 p-3 shadow bg-secondary text-white rounded');

    let cardCheckbox = document.createElement('input');
    cardCheckbox.setAttribute('id', `${id}`);
    cardCheckbox.setAttribute('type', 'checkbox');
    cardCheckbox.setAttribute('class', 'valik form-check-input ml-auto');
    cardCheckbox.setAttribute('data-toggle', 'tooltip');
    cardCheckbox.setAttribute('title', 'Выбрать для удаления');

    let cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerText = `${title}`;

    let cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');
    cardText.innerText = `${text}`;
    
    card.append(cardTitle);
    card.append(cardText);
    card.append(cardCheckbox);
    elementDiv.append(card);
}

document.addEventListener('DOMContentLoaded', (e) => {

    let container = document.getElementById('container');
    container.setAttribute('class', 'container w-50 mt-5 p-3 shadow rounded');
    
    let elementSpan = document.createElement('h1');
    elementSpan.setAttribute('class', 'text-primary font-weight-bold');
    elementSpan.innerText = "Notes";
    
    let elementDiv = document.createElement('div');
    elementDiv.setAttribute('id', 'notes');
    elementDiv.setAttribute('class', 'd-flex flex-column justify-content-center');
    
    let elementTitle = document.createElement('h5');
    elementTitle.innerText = 'Title:';

    let elementInputTitle = document.createElement('input');
    elementInputTitle.setAttribute('id', 'note-title');
    elementInputTitle.setAttribute('type', 'text');
    elementInputTitle.setAttribute('class', 'form-control');

    let elementText = document.createElement('h5');
    elementText.innerText = 'Text:';

    let elementInputText = document.createElement('input');
    elementInputText.setAttribute('id', 'note-text');
    elementInputText.setAttribute('type', 'text');
    elementInputText.setAttribute('class', 'form-control');

    let elementAddButton = document.createElement('button');
    elementAddButton.setAttribute('class', 'btn btn-primary mt-3');
    elementAddButton.innerText = `Save note`;
    elementAddButton.onclick = function(e){
        SaveNote();
        setTimeout(function(){ GetAll(); }, 1000);
    };

    
    let elementDeleteButton = document.createElement('button');
    elementDeleteButton.setAttribute('class', 'btn btn-primary mt-3');
    elementDeleteButton.innerText = `Delete selected notes`;
    elementDeleteButton.onclick = function(e){
        DeleteNotes();
        setTimeout(function(){ GetAll(); }, 1000);
    };
    
    
    container.append(elementSpan);
    container.append(elementTitle);
    container.append(elementInputTitle);
    container.append(elementText);
    container.append(elementInputText);
    container.append(elementAddButton);
    container.append(elementDiv);
    container.append(elementDeleteButton);
    
    GetAll();
});