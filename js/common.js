function updatePhone (istroue , ID )
{
    const phoneQuntityFile = document.getElementById(ID);
    const getQuntitySting = phoneQuntityFile.value ;
    const getQuntity = parseInt(getQuntitySting);
    
    let newPhoneNumber ;

    if (istroue === true ){
        newPhoneNumber = getQuntity + 1; 
    }else{
        newPhoneNumber = getQuntity - 1; 
    }
    phoneQuntityFile.value = newPhoneNumber ;

    return newPhoneNumber ;

}

const hello = () => {

}
//hone


//case 

function setelemainbyid (elemantID,value){
    const taxtAmountset = document.getElementById(elemantID);
    taxtAmountset.innerHTML = value;
}

//sub total
function subTotal(){
    const cruntPhoneTotal = gettotalElmant('phone-total');
    const cruntCadeTotal = gettotalElmant("case-total");
    const subtotalvalue = cruntPhoneTotal+cruntCadeTotal;
    const saubtotalelemant = document.getElementById('sub-total');
    saubtotalelemant.innerHTML = subtotalvalue;

    const taxtAmountString = (subtotalvalue *0.1).toFixed(2);
    const taxtAmount = parseFloat(taxtAmountString);
    setelemainbyid('tax-amount',taxtAmount)

    const finalTotal = subtotalvalue + taxtAmount;
    setelemainbyid('final-total',finalTotal);
}


// //sub total
// function subTotal(){
//     const cruntPhoneTotal = gettotalElmant('phone-total');
//     const cruntCadeTotal = gettotalElmant("case-total");
//     const subtotalvalue = cruntPhoneTotal+cruntCadeTotal;
//     const saubtotalelemant = document.getElementById('sub-total');
//     saubtotalelemant.innerHTML = subtotalvalue;

//     const taxtAmountString = (subtotalvalue *0.1).toFixed(2);
//     const taxtAmount = parseFloat(taxtAmountString);
//     setelemainbyid('tax-amount',taxtAmount)

//     const finalTotal = subtotalvalue + taxtAmount;
//     setelemainbyid('final-total',finalTotal);
// }



//sub total
function subTotal(){
    const cruntPhoneTotal = gettotalElmant('phone-total');
    const cruntCadeTotal = gettotalElmant("case-total");
    const subtotalvalue = cruntPhoneTotal+cruntCadeTotal;
    const saubtotalelemant = document.getElementById('sub-total');
    saubtotalelemant.innerHTML = subtotalvalue;

    const taxtAmountString = (subtotalvalue *0.1).toFixed(2);
    const taxtAmount = parseFloat(taxtAmountString);
    setelemainbyid('tax-amount',taxtAmount)

    const finalTotal = subtotalvalue + taxtAmount;
    setelemainbyid('final-total',finalTotal);
}