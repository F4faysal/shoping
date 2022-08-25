document.getElementById("btn-case-plus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(true ,'case-number-field')
    const phoneTotalElemant = document.getElementById("case-total");
    phoneTotalElemant.innerText = newPhoneNumber * 59 ;
   
})

document.getElementById("btn-case-minus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(false , 'case-number-field')
    const phoneTotalElemant = document.getElementById("case-total");
    phoneTotalElemant.innerText = newPhoneNumber * 59 ;
  
})