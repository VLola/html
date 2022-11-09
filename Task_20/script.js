function SendFile(){
    var fd = new FormData();
    var files = $('#input__file')[0].files[0];
    fd.append('file', files);

    $.ajax({
        url: 'http://vbu011valentyn-001-site1.htempurl.com/File/Add',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        error:(function(data) {
                console.log(data);
            }),
        success: function(response){
            console.log(response);
        },
    });
    setTimeout(function(){ GetAll(); }, 500);
}

function GetAll(){
    $("#file__manager").children().remove();

    let dateStart = $("#date__start").val();
    let dateEnd = $("#date__end").val();
    $.get("http://vbu011valentyn-001-site1.htempurl.com/File/GetAll")
    .done((data) =>{
        for (const iterator of data) {
            AddItem(iterator);
        }
    })
    .fail(() =>{
        console.warn("ERROR !");
    });
}

function Delete(name){
    $.ajax({
        url: "http://vbu011valentyn-001-site1.htempurl.com/File/Delete?name=" + name,
        type: "DELETE",
        error:(function(data) {
            console.log(data);
        }),
        success: function(response){
            console.log(response);
        }
    });
    setTimeout(function(){ GetAll(); }, 500);
}

function GetFile(name){
    $.ajax({
        url: "http://vbu011valentyn-001-site1.htempurl.com/File/GetFile?name=" + name,
        type: "GET",
        error:(function(data) {
            console.log(data);
        }),
        success: function(response){

            var bb = new Blob([response ], { type: 'text/plain' });
            var a = document.createElement('a');
            a.download = name;
            a.href = window.URL.createObjectURL(bb);
            a.click();
        }
    });
}

let count = 0;
function AddItem(name) {
    count++;
    let index = name.lastIndexOf('.') + 1;
    let roz = name.substring(index);
    let imgSrc = `images/doc.svg`;
    if(roz == "avi" || roz == "bmp" || roz == "cad" || roz == "dll" || roz == "doc" || roz == "eps" || roz == "jpg" || roz == "pdf" || roz == "png" || roz == "ps" || roz == "psd" || roz == "sql" || roz == "txt" || roz == "zip"){
        imgSrc = `images/${roz}.svg`;
    }

    let box = $("<div></div>").addClass("file-man-box");
    let close = $("<a></a>").addClass("file-close").attr("id", `delete-${count}`).click(function() {
        Delete(name);
    });
    let closeImg = $("<i></i>").addClass("fa fa-times-circle");
    let imgBox = $("<div></div>").addClass("file-img-box");
    let img = $("<img></img>").attr("src", `${imgSrc}`);
    let download = $("<a></a>").addClass("file-download").click(function() {
        GetFile(name);
    });;
    let downloadImg = $("<i></i>").addClass("fa fa-download");
    let title = $("<div></div>").addClass("file-man-title");
    let titleText = $("<h5></h5>").addClass("mb-0 text-overflow").text(`${name}`);
    let size = $("<p></p>").addClass("mb-0");
    let sizeText = $("<small></small>").text("55 kb");

    box.append(close);
    close.append(closeImg);
    box.append(imgBox);
    imgBox.append(img);
    box.append(download);
    download.append(downloadImg);
    box.append(title);
    title.append(titleText);
    box.append(size);
    size.append(sizeText);
    
    $("#file__manager").append(box);


    // let elem = $(`<div class='file-man-box'><a class='file-close' id='delete-${count}'><i class='fa fa-times-circle'></i></a><div class='file-img-box'><img src='${imgSrc}' alt='icon'></div><a href='#' class='file-download'><i class='fa fa-download'></i></a><div class='file-man-title'><h5 class='mb-0 text-overflow'>${name}</h5><p class='mb-0'><small>568.8 kb</small></p></div></div>`);
    
    // $("#file__manager").append(elem);

    // $(`#delete-${count}`).click(function() {
    //     Delete(name);
    // });
}

document.addEventListener('DOMContentLoaded', (e) => {
    $("#button__load").click(function() {
        SendFile();
    });
    $("#button__show").click(function() {
        GetAll();
    });

    GetAll();
});