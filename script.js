class Calculator{
    
    constructor(previousOperationText, currentOperatoinText){
        this.previousOperationText =previousOperationText;
        this.currentOperationText = currentOperatoinText;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation =undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand += number

    }

    chooseOperation(operation){
        
    }

    compute(){

    }

    updateDisplay(){
        this.currentOperationText.innerText = this.currentOperand
      

    }







}







const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperationText = document.querySelector('[data-previous-operand]')
const currentOperationText = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperationText, currentOperationText)

Array.from(numberButtons).forEach( button => {
    button.addEventListener('click', () =>{
        console.log(button.innerText)
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})
