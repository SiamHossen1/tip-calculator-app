const totalBill = document.querySelector('.total_bill')
const tipAmountBtns = document.querySelectorAll('.tip_amount')
const totalPeoples = document.querySelector('.people_number')
const customTipBtn = document.querySelector('.cutom_tip_amount')
const perPersonTipAmount = document.querySelector('.per_person_tip_amount')
const perPersonTotalBillAmount = document.querySelector('.per_person-total_bill_amount')
const zeroError = document.querySelector('.zero_error')
const allInput = document.querySelectorAll('input')
const resetBtn = document.querySelector('.reset_btn')



let tipAmount;

totalPeoples.addEventListener('input',()=>{

    if(totalPeoples.value == 0 || totalPeoples.value < 0){

        zeroError.classList.add('active')

    }else{
        zeroError.classList.remove('active')
        let perPrsonTip = tipAmount / totalPeoples.value

        perPersonTipAmount.innerHTML = perPrsonTip.toFixed(2)
    
        let perPersonTotalBill = totalBill.value / totalPeoples.value + perPrsonTip
    
        perPersonTotalBillAmount.innerHTML = perPersonTotalBill.toFixed(2)
    }

    
})

function checkactive(index){
    tipAmountBtns.forEach((b,index1)=>{
        if(index != index1){
            b.classList.remove('active')
        }
    })
}


tipAmountBtns.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        tipAmount = totalBill.value * button.value 
        button.classList.add('active')
        customTipBtn.classList.remove('error')
        customTipBtn.classList.remove('success')
        checkactive(index)
    })
})

tipAmountBtns[0].click()

customTipBtn.addEventListener('focusout',()=>{
    tipAmount = totalBill.value * (customTipBtn.value / 100)
})

customTipBtn.addEventListener('focusin',()=>{
    tipAmountBtns.forEach((b)=>{
            b.classList.remove('active')
    })
})


allInput.forEach((input)=>{
    input.addEventListener('focusout',()=>{
        if(input.value < 0 || input.value == 0){
            input.classList.remove('success')
            input.classList.add('error')
        }else{
            input.classList.remove('error')
            input.classList.add('success')
        }
    })
})


resetBtn.addEventListener('click',()=>{
    allInput.forEach((input)=>{
        input.value = ''
        input.classList.remove('success')
        input.classList.remove('error')
    })
    tipAmountBtns[0].click()
})
