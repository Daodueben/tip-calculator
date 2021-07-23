function calculateTip(){
// get the value of bill and calculate the percentage
let bill;
let percent_amount;
let people;
let total_amount;
let tip_per_person;
let total_per_person;
let disable_option;

disable_option = document.querySelector('.reset-btn');
disable_option.disabled = true;
disable_option.classList.add("btn-disabled");

document.querySelector('.bill').onkeyup = () => {
    if(document.querySelector('.bill').value.length > 0){
        disable_option.classList.remove("btn-disabled");
        disable_option.disabled = false;
    } else{
        disable_option.disabled = true;
        disable_option.classList.add("btn-disabled");
    }
}


document.querySelectorAll('button').forEach(button => {
    button.onclick = () =>{
       bill = Number(document.querySelector('.bill').value);
       console.log(typeof(bill));
       percent_amount = (bill * button.value) / 100;
       total_amount = bill + percent_amount;
       console.log(percent_amount);
       console.log(total_amount);
    }
});


document.querySelector('.people').onkeyup = () => {
    if(document.querySelector('.people').value == 0 ) {
        console.log(`can't be zero`);
    }
    else if(document.querySelector('.people').value > 0){
        people = document.querySelector('.people').value;

        let tip_amount = percent_amount / people;
        let total = total_amount / people;

        console.log(`${percent_amount} / ${people} = ${tip_amount}`);
        console.log(`the tip amount per person is ${tip_amount.toFixed(2)}`);
        tip_per_person = document.querySelector('.per-person').innerHTML = `$${tip_amount.toFixed(2)}`; 

        console.log(`${percent_amount} / ${people} = ${total}`);
        console.log(`the total amount per person is ${total.toFixed(2)}`);
        total_per_person = document.querySelector('.total-per-person').innerHTML = `$${total.toFixed(2)}`;
    }
}

document.querySelector('.reset-btn').onclick = () => {
    tip_per_person = document.querySelector('.per-person').innerHTML = `$0.00`;
    total_per_person = document.querySelector('.total-per-person').innerHTML = `$0.00`;
}
}




calculateTip();