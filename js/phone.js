
document.getElementById("btn-phone-plus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(true ,'phone-number-field')
    const phoneTotalElemant = document.getElementById("phone-total");
    phoneTotalElemant.innerText = newPhoneNumber * 1200 ;
   
})

document.getElementById("btn-phone-minus").addEventListener('click',function(){
    const newPhoneNumber = updatePhone(false , 'phone-number-field')
    const phoneTotalElemant = document.getElementById("phone-total");
    phoneTotalElemant.innerText = newPhoneNumber * 1200 ;
  
})


