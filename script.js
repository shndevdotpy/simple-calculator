let operation;
let number1 = 0;
let number2 = 0;
let op = 0;

function key(key){
    //clear function
    if (key==='c'){
        document.getElementById("screenoutput").innerHTML = "";
        document.getElementById("screenoperation").innerHTML = "";
        number1,number2 = 0
    }
    //clear function

    //operation functions
    else if (key==='/'){
        alert(number1)
        if (!document.getElementById("screenoutput").innerHTML.includes("/") &&
        !document.getElementById("screenoutput").innerHTML.includes("*") &&
        !document.getElementById("screenoutput").innerHTML.includes("+") &&
        !document.getElementById("screenoutput").innerHTML.includes("-")){
            number1 = parseInt(document.getElementById("screenoutput").innerHTML)
            
            document.getElementById("screenoutput").innerHTML += "/";
            operation = "/"
        }
    }

    else if (key==='*'){
        if (!document.getElementById("screenoutput").innerHTML.includes("/") &&
        !document.getElementById("screenoutput").innerHTML.includes("*") &&
        !document.getElementById("screenoutput").innerHTML.includes("+") &&
        !document.getElementById("screenoutput").innerHTML.includes("-")){
            document.getElementById("screenoutput").innerHTML += "x";
            number1 = parseInt(document.getElementById("screenoutput").innerHTML)
            operation = "*"
        }
    }

    else if (key==='+'){
        if (!document.getElementById("screenoutput").innerHTML.includes("/") &&
        !document.getElementById("screenoutput").innerHTML.includes("*") &&
        !document.getElementById("screenoutput").innerHTML.includes("+") &&
        !document.getElementById("screenoutput").innerHTML.includes("-")){
            document.getElementById("screenoutput").innerHTML += "+";
            number1 = parseInt(document.getElementById("screenoutput").innerHTML)
            operation = "+"
        }
    }

    else if (key==='-'){
        if (!document.getElementById("screenoutput").innerHTML.includes("/") &&
        !document.getElementById("screenoutput").innerHTML.includes("*") &&
        !document.getElementById("screenoutput").innerHTML.includes("+") &&
        !document.getElementById("screenoutput").innerHTML.includes("-")){
            document.getElementById("screenoutput").innerHTML += "-";
            number1 = parseInt(document.getElementById("screenoutput").innerHTML)
            operation = "-"
        }
    }
    //operation functions


    //number functions
    else if(key==='0'){

        document.getElementById("screenoutput").innerHTML += 0;
    }
    else if(key==='1'){

        document.getElementById("screenoutput").innerHTML += 1;
    }
    else if(key==='2'){

        document.getElementById("screenoutput").innerHTML += 2;
    }
    else if(key==='3'){

        document.getElementById("screenoutput").innerHTML += 3;
    }
    else if(key==='4'){

        document.getElementById("screenoutput").innerHTML += 4;
    }
    else if(key==='5'){

        document.getElementById("screenoutput").innerHTML += 5;
    }
    else if(key==='6'){

        document.getElementById("screenoutput").innerHTML += 6;
    }
    else if(key==='7'){

        document.getElementById("screenoutput").innerHTML += 7;
    }
    else if(key==='8'){

        document.getElementById("screenoutput").innerHTML += 8;
    }
    else if(key==='9'){

        document.getElementById("screenoutput").innerHTML += 9;
    }    
    
    //number functions

    //equal function
    else if(key==='='){
        if(operation==="+"){
            if(!document.getElementById("screenoutput".innerHTML === "")){
                numbers = document.getElementById("screenoutput").innerHTML;
                //number2 = parseInt(document.getElementById("screenoutput").innerHTML.split("+").join(""));
                //number2 = parseInt(Array.from(document.getElementById("screenoutput").innerHTML).filter(char => char !== '+').join(''));
                number2 = getSecondNumber(numbers)
                op = parseInt(number1)+parseInt(number2);
                document.getElementById("screenoutput").innerHTML = op;
                document.getElementById("screenoperation").innerHTML = number1 + "+" + number2;

            }
        }
        
    }
    //equal function
}

function getSecondNumber(expression) {
    // '+' karakterine göre böl ve ikinci sayıyı döndür
    const parts = expression.split('+');
    return parts.length > 1 ? parts[1].trim() : null;
}