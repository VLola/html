let variableOne;
let variableTwo;
let action;
let elementInputText;
let elementPHistory;

function SaveVariableOne(){
    variableOne = elementInputText.value;
    elementInputText.value = '';
}

function SaveVariableTwo(){
    variableTwo = elementInputText.value;
    elementInputText.value = '';
}

function Plus(){
    SaveVariableOne();
    action = '+';
}

function Minus(){
    SaveVariableOne();
    action = '-';
}

function Mul(){
    SaveVariableOne();
    action = '*';
}

function Divide(){
    SaveVariableOne();
    action = '/';
}

function Equals(){
    SaveVariableTwo();
    if(action == '+'){
        elementPHistory.innerText += `${variableOne} + ${variableTwo} = ${parseInt(variableOne) + parseInt(variableTwo)}\n`;
    }
    else if(action == '-'){
        elementPHistory.innerText += `${variableOne} - ${variableTwo} = ${parseInt(variableOne) - parseInt(variableTwo)}\n`;
    }
    else if(action == '/'){
        elementPHistory.innerText += `${variableOne} / ${variableTwo} = ${parseInt(variableOne) / parseInt(variableTwo)}\n`;
    }
    else if(action == '*'){
        elementPHistory.innerText += `${variableOne} * ${variableTwo} = ${parseInt(variableOne) * parseInt(variableTwo)}\n`;
    }
}

document.addEventListener('DOMContentLoaded', function(){

    let elementDiv = document.createElement('div');
    elementDiv.setAttribute('class', 'container w-25 mt-5 p-3 shadow');
    elementDiv.style.backgroundColor = 'azure';

    elementInputText = document.createElement('input');
    elementInputText.setAttribute('type', 'text');
    elementInputText.setAttribute('class', 'form-control');
    elementInputText.style.textAlign = "right";

    let elementButtonPlus = document.createElement('button');
    elementButtonPlus.innerText = '+';
    elementButtonPlus.setAttribute('class', 'btn btn-outline-primary m-4');
    elementButtonPlus.addEventListener('click', function(e){
        Plus();
    });

    let elementButtonMinus = document.createElement('button');
    elementButtonMinus.innerText = '-';
    elementButtonMinus.setAttribute('class', 'btn btn-outline-primary m-4 px-3');
    elementButtonMinus.addEventListener('click', function(e){
        Minus();
    });

    let elementButtonDivide = document.createElement('button');
    elementButtonDivide.innerText = '/';
    elementButtonDivide.setAttribute('class', 'btn btn-outline-primary m-4 px-3');
    elementButtonDivide.addEventListener('click', function(e){
        Divide();
    });

    let elementButtonMul = document.createElement('button');
    elementButtonMul.innerText = '*';
    elementButtonMul.setAttribute('class', 'btn btn-outline-primary m-4 px-3');
    elementButtonMul.addEventListener('click', function(e){
        Mul();
    });

    let elementButtonEquals = document.createElement('button');
    elementButtonEquals.innerText = '=';
    elementButtonEquals.setAttribute('class', 'btn btn-outline-primary m-4');
    elementButtonEquals.addEventListener('click', function(e){
        Equals();
    });
    
    elementDiv.append(elementInputText);
    elementDiv.append(elementButtonPlus);
    elementDiv.append(elementButtonMinus);
    elementDiv.append(elementButtonDivide);
    elementDiv.append(elementButtonMul);
    elementDiv.append(elementButtonEquals);

    this.body.append(elementDiv);

    elementPHistory = document.createElement('p');
    elementPHistory.setAttribute('class', 'container w-25 mt-5 p-3 shadow');
    elementPHistory.innerText = 'History:\n';
    elementPHistory.style.backgroundColor = 'azure';

    this.body.append(elementPHistory);
});