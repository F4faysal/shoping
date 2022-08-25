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