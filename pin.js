function generatePin(){
    const pin = getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
    //    console.log('got 3 digit and calling again',pin );
        return getPin();
    } 
}
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayNumber = document.getElementById('display-number');
    if(isNaN(number)){
       // alert('is not a number please enter the number');
        if(number == 'C'){
            displayNumber.value = '';
        }
        // deleting the last element
        else if(number == '<'){
            let array = document.getElementById('display-number');
            let getValue = array.value;
            for(var i=0; i<getValue.length ; i++){
                var deleteLastElement = getValue.substring(0, getValue.length - 1);
            }
            // optional topic (conver to array)
            // var niloy = Array.from(tempArray);
            displayNumber.value = deleteLastElement;

        }
    }
    else{
        const previousNumber = displayNumber.value;
        const newNumber = previousNumber + number;
        displayNumber.value = newNumber;
    }
})
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const displayNumbers = document.getElementById('display-number').value;
    const success = document.getElementById('notify-pass');
    const failError = document.getElementById('notify-fail');
    if( pin == displayNumbers){
        success.style.display = 'block';
        failError.style.display = 'none';
    }
    else{
        failError.style.display = 'block';
        success.style.display = 'none';
    }
}

