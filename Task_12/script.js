let matrix = 
[["90 %", "82 %", "64 %", "82 %", "95 %", "85 %", "80 %", "92 %", "90 %", "75 %", "75 %", "82 %"],  // Овен
["82 %", "93 %", "75 %", "85 %", "94 %", "90 %", "90 %", "95 %", "81 %", "99 %", "82 %", "90 %"],   // Телец
["64 %", "75 %", "82 %", "62 %", "80 %", "92 %", "90 %", "92 %", "99 %", "83 %", "92 %", "83 %"],   // Близнецы
["82 %", "85 %", "62 %", "83 %", "56 %", "83 %", "93 %", "90 %", "82 %", "95 %", "85 %", "99 %"],   // Рак
["95 %", "94 %", "80 %", "56 %", "91 %", "86 %", "90 %", "98 %", "92 %", "90 %", "97 %", "83 %"],   // Лев
["85 %", "90 %", "92 %", "83 %", "86 %", "74 %", "73 %", "98 %", "72 %", "61 %", "71 %", "66 %"],   // Дева
["80 %", "90 %", "90 %", "93 %", "90 %", "73 %", "95 %", "98 %", "99 %", "91 %", "97 %", "65 %"],   // Весы
["92 %", "95 %", "92 %", "90 %", "98 %", "98 %", "98 %", "99 %", "90 %", "92 %", "67 %", "96 %"],   // Скорпион
["90 %", "81 %", "99 %", "82 %", "92 %", "72 %", "99 %", "90 %", "98 %", "70 %", "96 %", "70 %"],   // Стрелец
["75 %", "99 %", "83 %", "95 %", "90 %", "61 %", "91 %", "92 %", "70 %", "83 %", "80 %", "65 %"],   // Козерог
["75 %", "82 %", "92 %", "85 %", "97 %", "71 %", "97 %", "67 %", "96 %", "80 %", "75 %", "98 %"],   // Водолей
["82 %", "90 %", "83 %", "99 %", "83 %", "66 %", "81 %", "96 %", "70 %", "65 %", "98 %", "99 %"]];  // Рыбы

let man;
let woman;
let day = parseInt(prompt('день рождения мужчины?'));
let month = parseInt(prompt('месяц рождения мужчины?'));
if(month > 12 || day > 31) man = 12;
else if(month === 3 && day >= 21 || month === 4 && day <= 19) man = 0; 
else if(month === 4 && day >= 20 || month === 5 && day <= 20) man = 1; 
else if(month === 5 && day >= 21 || month === 6 && day <= 20) man = 2; 
else if(month === 6 && day >= 21 || month === 7 && day <= 22) man = 3; 
else if(month === 7 && day >= 23 || month === 8 && day <= 22) man = 4; 
else if(month === 8 && day >= 23 || month === 9 && day <= 22) man = 5; 
else if(month === 9 && day >= 23 || month === 10 && day <= 22) man = 6; 
else if(month === 10 && day >= 23 || month === 21 && day <= 18) man = 7; 
else if(month === 11 && day >= 22 || month === 12 && day <= 21) man = 8; 
else if(month === 12 && day >= 22 || month === 1 && day <= 19) man = 9; 
else if(month === 1 && day >= 20 || month === 2 && day <= 18) man = 10; 
else if(month === 2 && day >= 19 || month === 3 && day <= 20) man = 11; 
else man = 12;

day = parseInt(prompt('день рождения женщины?'));
month = parseInt(prompt('месяц рождения женщины?'));
if(month > 12 || month <= 0 || day > 31 || day <= 0) woman = 12;
else if(month === 3 && day >= 21 || month === 4 && day <= 19) woman = 0; 
else if(month === 4 && day >= 20 || month === 5 && day <= 20) woman = 1; 
else if(month === 5 && day >= 21 || month === 6 && day <= 20) woman = 2; 
else if(month === 6 && day >= 21 || month === 7 && day <= 22) woman = 3; 
else if(month === 7 && day >= 23 || month === 8 && day <= 22) woman = 4; 
else if(month === 8 && day >= 23 || month === 9 && day <= 22) woman = 5; 
else if(month === 9 && day >= 23 || month === 10 && day <= 22) woman = 6; 
else if(month === 10 && day >= 23 || month === 21 && day <= 18) woman = 7; 
else if(month === 11 && day >= 22 || month === 12 && day <= 21) woman = 8; 
else if(month === 12 && day >= 22 || month === 1 && day <= 19) woman = 9; 
else if(month === 1 && day >= 20 || month === 2 && day <= 18) woman = 10; 
else if(month === 2 && day >= 19 || month === 3 && day <= 20) woman = 11; 
else woman = 12;

if(man === 12 || woman === 12) alert("Error!");
else  alert(`Вы совместимы на ${matrix[man][woman]}`);