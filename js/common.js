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

//hone
function updatetptlaPrice(newPhoneNumber , id){
    const phoneTotalElemant = document.getElementById(id);
    phoneTotalElemant.innerText = newPhoneNumber * 1219 ;
}

function gettotalElmant(elemantId){
    const phoneSubtotal = document.getElementById(elemantId);
    const currntPHoneSubTotalString = phoneSubtotal.innerText;
    const currntPHoneSubTotal= parseInt(currntPHoneSubTotalString);
    return currntPHoneSubTotal;
}

//case 
function updatetptlCaseaPrice(newPhoneNumber){
    const phoneTotalElemant = document.getElementById("case-total");
    phoneTotalElemant.innerText = newPhoneNumber * 59 ;
}


function gettotalElmant(elemantId){
    const phoneSubtotal = document.getElementById(elemantId);
    const currntPHoneSubTotalString = phoneSubtotal.innerText;
    const currntPHoneSubTotal= parseInt(currntPHoneSubTotalString);
    return currntPHoneSubTotal;
}

//sub total
function subTotal(){
    const cruntPhoneTotal = gettotalElmant('phone-total');
    const cruntCadeTotal = gettotalElmant("case-total");

    const subtotalvalue = cruntPhoneTotal+cruntCadeTotal;

    const saubtotalelemant = document.getElementById('sub-total');
    saubtotalelemant.innerHTML = subtotalvalue;
}