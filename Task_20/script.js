function SendFile(){
    var fd = new FormData();
    var files = $('#input__file')[0].files[0];
    fd.append('file', files);

    $.ajax({
        // url: 'https://localhost:7259/File/Add',
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
    // $.get("https://localhost:7259/File/GetAll?start=" + dateStart + "&end=" + dateEnd)
    $.get("http://vbu011valentyn-001-site1.htempurl.com/File/GetAll?start=" + dateStart + "&end=" + dateEnd)
    .done((data) =>{
        for (const iterator of data) {
            AddItem(iterator.name, iterator.time, iterator.size);
            // console.log(iterator);
        }
    })
    .fail(() =>{
        console.warn("ERROR !");
    });
}

function Delete(name){
    $.ajax({
        // url: "https://localhost:7259/File/Delete?name=" + name,
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
        // url: "https://localhost:7259/File/GetFile?name=" + name,
        url: "http://vbu011valentyn-001-site1.htempurl.com/File/GetFile?name=" + name,
        type: "GET",
        error:(function(data) {
            console.log(data);
        }),
        success: function(response){
            
            let index = name.lastIndexOf('.') + 1;
            let extension = name.substring(index);
            let typefile = "text/plain";
            if(extension == "png"){
                typefile = "image/png";
            }
            var bb = new Blob([response], { type: typefile });
            var a = document.createElement('a');
            a.download = name;
            a.href = window.URL.createObjectURL(bb);
            a.click();
        }
    });
}

let count = 0;
function AddItem(name, dateTime, sizeFile) {
    let time = new Date(dateTime).toLocaleString();
    count++;
    let index = name.lastIndexOf('.') + 1;
    let extension = name.substring(index);
    let imgSrc = `images/doc.svg`;
    if(extension == "avi" || extension == "bmp" || extension == "cad" || extension == "dll" || extension == "doc" || extension == "eps" || extension == "jpg" || extension == "pdf" || extension == "png" || extension == "ps" || extension == "psd" || extension == "sql" || extension == "txt" || extension == "zip"){
        imgSrc = `images/${extension}.svg`;
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
    let sizeText = $("<small></small>").text(`${sizeFile} kb`);
    let elemDate = $("<p></p>").addClass("mb-0");
    let elemDateText = $("<small></small>").text(`${time}`);

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
    box.append(elemDate);
    elemDate.append(elemDateText);
    
    $("#file__manager").append(box);

}

document.addEventListener('DOMContentLoaded', (e) => {
    $("#button__load").click(function() {
        SendFile();
    });
    $("#date__start").change(function() {
        GetAll();
    });
    $("#date__end").change(function() {
        GetAll();
    });

    GetAll();
});