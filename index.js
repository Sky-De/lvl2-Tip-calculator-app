
let msg = document.querySelector('#msg');
let each = document.querySelector('#each-person');
let all = document.querySelector('#all-persons');
let bill = document.querySelector('#bill');
let number = document.querySelector('#number');
let custom = document.querySelector('#custom');
let tips = document.querySelectorAll('.tip');


//select tip percent
tips.forEach((tip)=>{
    tip.addEventListener('click',()=>{
        if(document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active');
        }
        tip.classList.add('active');
        custom.value = '';
        if(bill.value!=='' && number.value!==''){
            each.innerHTML = '$' + bill.value *  document.querySelector('.active').value /100;
            all.innerHTML = '$' + (bill.value *  document.querySelector('.active').value /100) * number.value;
        }
        calcTip();
    })
})



//custom tipPercent
custom.addEventListener('focus', ()=>{
    document.querySelector('.active').classList.remove('active');
    custom.classList.add('active')
})


//inputs event
let inputs = document.querySelectorAll('input');
inputs.forEach((input)=>{
    input.addEventListener('input',()=>{
        calcTip();
    })
})




// resets all inputs and results and sets 15% for default percent
let reset = document.getElementById('reset')
reset.addEventListener('click',()=>{
    bill.value = '';
    number.value = '' ;
    each.innerHTML = '$ 0.00';
    all.innerHTML = '$ 0.00';
    document.querySelector('.active').value = '';
    document.querySelector('.active').classList.remove('active');
    tips[2].classList.add('active');
    document.querySelector('.active').value = 15;
    inputs.forEach((input)=>{
        input.classList.remove('err')
    })
})


//validation for inputs
//calculator for tip and total tip
let calcTip = () =>{
        if(bill.value === ''){
            bill.classList.add('err')
        }else{
            bill.classList.remove('err')
        }
        if(document.querySelector('.active').value === ''){
            document.querySelector('.active').classList.add('err')
        }else{
            document.querySelector('.active').classList.remove('err')
        }
        if(number.value === ''){
            number.classList.add('err')
            msg.classList.remove('hide')
        }else{
            msg.classList.add('hide')
            number.classList.remove('err')
        }
        if(bill.value!=='' && document.querySelector('.active').value!=="" && number.value!==''){
        each.innerHTML = '$' + (bill.value *  document.querySelector('.active').value /100).toFixed(2);
        all.innerHTML = '$' + ((bill.value *  document.querySelector('.active').value /100) * number.value).toFixed(2);
    }
}