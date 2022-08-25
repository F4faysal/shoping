
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

document.getElementById("btn-phone-plus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(true ,'phone-number-field')
    updatetptlaPrice(newPhoneNumber , 'phone-total');

    //calculate total 
    
    subTotal();
   
})

document.getElementById("btn-phone-minus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(false , 'phone-number-field')
    updatetptlaPrice(newPhoneNumber, 'phone-total');

      //calculate total 
      subTotal()
})


