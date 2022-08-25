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



document.getElementById("btn-case-plus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(true ,'case-number-field')
    updatetptlCaseaPrice(newPhoneNumber , );


    
    //calculate total 
    subTotal();
})

document.getElementById("btn-case-minus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(false , 'case-number-field')
    updatetptlCaseaPrice(newPhoneNumber);



    
    //calculate total 
    subTotal();
  
})