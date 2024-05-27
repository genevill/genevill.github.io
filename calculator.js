//---Calculator--------------------------------------------------------
var displayString = "0";
var totalString = "";
var allNumbers = [];
var allOperands = [];
var tempAnswer = 0.0;
var idNames = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "add", "subtract", "multiply", "divide", "decimal", "clear", "equals"
]
var buttonNames = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "x", "/", ".", "AC", "="
]

function Button() {
    /*return (<button class="calc-button calc-buttonpadding calc-unselectable" id={idNames[buttonNames.indexOf(props.text)]} onClick={() => {
        if (/[0-9]/.test(props.text)) {
            if (/\-0/.test(displayString)) {
                displayString = displayString.replace("0", "");
            }
            displayString += props.text;
        }
        if (/AC/.test(props.text)) {
            displayString = "0";
            totalString = "";
            UpdateDisplayTotal();
        }
        if (/[\+\-/x]/.test(props.text) && !/\-/.test(displayString) && displayString != 0) {
            totalString += displayString + props.text;
            if (/\.$/.test(totalString)) {
                totalString = totalString.replace(".", "")
            }
            displayString = "0";
            document.getElementById("calc-display").innerHTML = displayString;
            UpdateDisplayTotal();
        } else if (/[\+/x]/.test(props.text) && /[\+\-/x]/.test(totalString.slice(totalString.length - 1, totalString.length))) {
            if (/\+/.test(props.text) && /\-/.test(displayString.slice(0))) {
                displayString = displayString.slice(1);
            }
            totalString = totalString.slice(0, totalString.length - 1) + props.text;
            document.getElementById("calc-display").innerHTML = displayString;
            UpdateDisplayTotal();
        } else if (/\-/.test(props.text) && !/\-/.test(displayString.slice(0)) && /[\+\-/x]/.test(totalString.slice(totalString.length - 1, totalString.length))) {
            displayString = "-" + displayString;
            document.getElementById("calc-display").innerHTML = displayString;
            UpdateDisplayTotal();
        } else if (/\-/.test(props.text) && /\-/.test(displayString.slice(0))) {
            displayString = displayString.replace(/\-/, "");
            document.getElementById("calc-display").innerHTML = displayString;
            UpdateDisplayTotal();
        }
        if (/\./.test(props.text) && !/\./.test(displayString) && displayString != 0) {
            displayString += props.text;
        }
        if (/=/.test(props.text) && totalString.length != "") {
            if (displayString == 0 || /\-0/.test(displayString)) {
                totalString = totalString.slice(0, totalString.length - 1) + props.text;
            } else {
                totalString += displayString + props.text;
            }
            displayString = "0";
            allNumbers = totalString.match(/[0-9]+\.?[0-9]*g);//should be star/g
            allOperands = totalString.match(/[\+\-/x=]+/g);
            //allNumbers.forEach( current => console.log(current) );
            //allOperands.forEach( current => console.log(current) );
            for (let i = 0; i < allNumbers.length; i++) {
                if (allOperands[i] != "=" && i == 0) {
                    if (/[\+\-/x=]{2}/.test(allOperands[i])) {
                        allNumbers[i + 1] = "-" + allNumbers[i + 1];
                        allOperands[i] = allOperands[i].slice(0, 1);
                    }
                    tempAnswer = Math(allOperands[i], allNumbers[i], allNumbers[i + 1]);
                } else if (allOperands[i] != "=") {
                    tempAnswer = Math(allOperands[i], tempAnswer, allNumbers[i + 1]);
                }
            }
            while (tempAnswer.length > 1 && tempAnswer.charAt(0) == "0") {
                tempAnswer = tempAnswer.replace(/^0/, "");
            }
            totalString += tempAnswer;
            displayString = tempAnswer;
            document.getElementById("calc-display").innerHTML = displayString;
            UpdateDisplayTotal();
            totalString = "";
        }
        while (displayString.length > 1 && displayString.charAt(0) == "0") {
            displayString = displayString.replace(/^0/, "");
        }
        document.getElementById("calc-display").innerHTML = displayString;
        //console.log(document.getElementById("display").innerHTML);
    }} > { props.text }</button >)
    */
}

function Math(operation, num1, num2) {
    var total = 0;
    switch (operation) {
        case "+":
            total = parseFloat(num1) + parseFloat(num2);
            //console.log(num1, parseFloat(num1), num2, parseFloat(num2), total);
            break;
        case "-":
            total = parseFloat(num1) - parseFloat(num2);
            break;
        case "x":
            total = parseFloat(num1) * parseFloat(num2);
            break;
        case "/":
            total = parseFloat(num1) / parseFloat(num2);
            break;
    }
    return total;
}

function UpdateDisplayTotal() {
    if (totalString.length >= 1 && document.getElementById("calc-totaldisplay") != null) {
        document.getElementById("calc-totaldisplay").style.gridRowStart = 1;
    } else {
        document.getElementById("calc-totaldisplay").style.gridRowStart = 2;
    }
    document.getElementById("calc-totalString").innerHTML = totalString;
}

function DisplayTotal() {
    //return (<p class="calc-totalString" id="calc-totalString">{totalString}</p>)
}

document.getElementById('calculator').innerHTML = `
        <div class="calc-outer-box">
            <div class="calc-grid-container calc-box">
                <div class="calc-totaldisplay" id="calc-totaldisplay"><p class="calc-totalString" id="calc-totalString">0</p></div>
                <div class="calc-itemdisplay"><p class="calc-display-text" id="calc-display">0</p></div>
                <div class="calc-itemac"><button id="AC" class="calc-button calc-buttonpadding calc-unselectable" />AC</div>
                <div class="calc-itemdivide"><button id="/" class="calc-button calc-buttonpadding calc-unselectable" />/</div>
                <div class="calc-itemtimes"><button id="x" class="calc-button calc-buttonpadding calc-unselectable" />x</div>
                <div class="calc-itemminus"><button id="-" class="calc-button calc-buttonpadding calc-unselectable" />-</div>
                <div class="calc-itemplus"><button id="+" class="calc-button calc-buttonpadding calc-unselectable" />+</div>
                <div class="calc-itemequals"><button id="=" class="calc-button calc-buttonpadding calc-unselectable" />=</div>
                <div class="calc-itemdot"><button id="." class="calc-button calc-buttonpadding calc-unselectable" />.</div>
                <div class="calc-item0"><button id="0" class="calc-button calc-buttonpadding calc-unselectable" />0</div>
                <div class="calc-item1"><button id="1" class="calc-button calc-buttonpadding calc-unselectable" />1</div>
                <div class="calc-item2"><button id="2" class="calc-button calc-buttonpadding calc-unselectable" />2</div>
                <div class="calc-item3"><button id="3" class="calc-button calc-buttonpadding calc-unselectable" />3</div>
                <div class="calc-item4"><button id="4" class="calc-button calc-buttonpadding calc-unselectable" />4</div>
                <div class="calc-item5"><button id="5" class="calc-button calc-buttonpadding calc-unselectable" />5</div>
                <div class="calc-item6"><button id="6" class="calc-button calc-buttonpadding calc-unselectable" />6</div>
                <div class="calc-item7"><button id="7" class="calc-button calc-buttonpadding calc-unselectable" />7</div>
                <div class="calc-item8"><button id="8" class="calc-button calc-buttonpadding calc-unselectable" />8</div>
                <div class="calc-item9"><button id="9" class="calc-button calc-buttonpadding calc-unselectable" />9</div>
            </div>
        </div>
    `;
