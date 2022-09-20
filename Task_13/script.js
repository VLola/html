let arrTask1 = 
[{name:"Молоко", count: 5, isBuy: true} 
,{name:"Конфета", count: 4, isBuy: false} 
,{name:"Апельсин", count: 3, isBuy: true} 
,{name:"Персик", count: 3, isBuy: false} 
,{name:"Мивина", count: 2, isBuy: true}]

function showItem(){
    arrTask1.forEach(e => {
        console.info(`${e.name} ${e.count} ${e.isBuy}`);
    });
}

function sortItem(){
    arrTask1.sort((firstItem, secondItem) => firstItem.isBuy - secondItem.isBuy);
}

function addItem(item){
    if(arrTask1.find((e) => e.name === item.name && e.isBuy === item.isBuy)) {
        arrTask1.find((e) => e.name === item.name && e.isBuy === item.isBuy).count+= item.count;
    } 
    else arrTask1.push(item);
}

function buyItem(item){
    if(arrTask1.find((e) => e.name === item && e.isBuy === false)) {
        arrTask1.find((e) => e.name === item && e.isBuy === false).count--;
    } 
    addItem({name: item, count: 1, isBuy: true});
}

console.info(`Task 1`);
sortItem();
showItem();

console.info(`Task 2`);
addItem({name:"Хлеб", count: 5, isBuy: true});
addItem({name:"Молоко", count: 5, isBuy: true});
showItem();

console.info(`Task 3`);
buyItem("Конфета");
showItem();

//------------------------------------------------------------------------------

let arrTask2 = 
[{name:"Молоко", count: 5, price: 30} 
,{name:"Конфета", count: 4, price: 11} 
,{name:"Апельсин", count: 3, price: 13} 
,{name:"Персик", count: 3, price: 18} 
,{name:"Мивина", count: 2, price: 20}]

function showItemTask2(){
    arrTask2.forEach(element => {
        console.info(`${element.name} ${element.count} ${element.price}`);
    });
}

function showAllPrice(){
    let sum = 0;
    arrTask2.forEach(e => sum += (e.price * e.count));
    return sum;
}

function showAllCount(){
    let sum = 0;
    arrTask2.forEach(e => sum += e.count);
    return sum;
}

function showMaxPrice(){
    let max = 0;
    arrTask2.forEach(e => max = ((e.price * e.count) > max ? (e.price * e.count) : max));
    let name;
    arrTask2.forEach(e => {
        if(e.count * e.price === max) name = e.name;
    });
    console.info(`${name} - ${max}`);
}

console.info(`Task 1`);
showItemTask2();
console.info(`Task 2`);
console.info(`${showAllPrice()}`);
console.info(`Task 3`);
showMaxPrice();
console.info(`Task 4`);
console.info(`Average - ${showAllPrice() / showAllCount()}`);

//-------------------------------------------------------------------------------------------

let arrTask3 = 
[{name: "font-size", value: "25px"} 
,{name: "color", value: "red"} 
,{name: "text-decoration", value: "underline"} 
,{name: "text-align", value: "center"} 
,{name: "font-weight", value: "bold"} 
,{name: "font-style", value: "italic"}]



function newContent(text, array) {
    let style = "";
    array.forEach(e =>{
        style += `${e.name}:${e.value};`;
    });
    document.open();
    document.write(`<p style="${style}">${text}</p>`);
    document.close();
  }

  newContent("Lola Valentyn", arrTask3);

//-------------------------------------------------------------------------------------------

let arrTask4 = 
[{name: "P100", faculty: "Факультет психологии", size: "12"}
,{name: "P101", faculty: "Факультет психологии", size: "13"}
,{name: "P102", faculty: "Факультет психологии", size: "14"}
,{name: "P103", faculty: "Факультет психологии", size: "15"}
,{name: "P104", faculty: "Факультет психологии", size: "16"}
,{name: "S200", faculty: "Факультет социологии", size: "17"}
,{name: "S201", faculty: "Факультет социологии", size: "18"}
,{name: "S202", faculty: "Факультет социологии", size: "19"}
,{name: "S203", faculty: "Факультет социологии", size: "13"}
,{name: "S204", faculty: "Факультет социологии", size: "11"}
,{name: "S205", faculty: "Факультет социологии", size: "10"}
,{name: "I300", faculty: "Исторический факультет", size: "14"}
,{name: "I301", faculty: "Исторический факультет", size: "15"}
,{name: "I302", faculty: "Исторический факультет", size: "20"}
,{name: "I303", faculty: "Исторический факультет", size: "17"}
,{name: "I304", faculty: "Исторический факультет", size: "18"}
,{name: "Y400", faculty: "Юридический факультет", size: "15"}
,{name: "Y401", faculty: "Юридический факультет", size: "16"}
,{name: "Y402", faculty: "Юридический факультет", size: "14"}
,{name: "Y403", faculty: "Юридический факультет", size: "17"}
,{name: "Y404", faculty: "Юридический факультет", size: "18"}
,{name: "E500", faculty: "Экономический факультет", size: "10"}
,{name: "E501", faculty: "Экономический факультет", size: "11"}
,{name: "E502", faculty: "Экономический факультет", size: "12"}
,{name: "E503", faculty: "Экономический факультет", size: "13"}
,{name: "E504", faculty: "Экономический факультет", size: "14"}
,{name: "E505", faculty: "Экономический факультет", size: "15"}
,{name: "PL600", faculty: "Факультет политологии", size: "13"}
,{name: "PL601", faculty: "Факультет политологии", size: "12"}
,{name: "PL602", faculty: "Факультет политологии", size: "11"}
,{name: "PL603", faculty: "Факультет политологии", size: "16"}
,{name: "PL604", faculty: "Факультет политологии", size: "15"}
,{name: "PL605", faculty: "Факультет политологии", size: "19"}]

function showItemTask4(){
    arrTask4.forEach(e=>{
        document.write(`<p>Аудитория: ${e.name}, ${e.faculty}, мест: ${e.size}</p>`);
    });
}

function showFaculty(name){
    arrTask4.forEach(e=>{
        if(e.faculty == name)
        document.write(`<p>Аудитория: ${e.name}, ${e.faculty}, мест: ${e.size}</p>`);
    });
}

function showAudience(item){
    arrTask4.forEach(e=>{
        if(e.faculty == item.faculty && e.size >= item.size)
        document.write(`<p>Аудитория: ${e.name}, ${e.faculty}, мест: ${e.size}</p>`);
    });
}

function sortSizeAudiences(){
    arrTask4.sort((a, b) => a.size - b.size);
}

function sortNameAudiences(){
    arrTask4.sort((a, b) => a.name.localeCompare(b.name));
}

document.write(`<h3>Task 1</h3>`);
showItemTask4();

document.write(`<h3>Task 2</h3>`);
showFaculty("Факультет психологии");

document.write(`<h3>Task 3</h3>`);
showAudience({faculty: "Экономический факультет", size: "13"});

document.write(`<h3>Task 4</h3>`);
sortSizeAudiences();
showItemTask4();

document.write(`<h3>Task 5</h3>`);
sortNameAudiences();
showItemTask4();