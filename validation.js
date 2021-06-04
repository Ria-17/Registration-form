function formValidation()
{
        var uname = document.registration.name;
        var uemail = document.registration.email;
        var phone = document.registration.phone;
        var uadd = document.registration.address;
        var udob = document.registration.dob; 
        var umgen = document.registration.mgen;
        var ufgen = document.registration.fgen;
        
if(allLetter(uname))
{
if(ValidateEmail(uemail))
{
if(validphone(phone))
{
if(validateadd(uadd))
{ 
if(validateDOB(udob)) 
{         
if(validgen(umgen,ufgen))
{

}   
}
} 
} 
}
}
return false;
} 

function allLetter(uname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
       return true;
    }
    else
    {
      alert('Username must have alphabet characters only');
      uname.focus();
      return false;
    }
};

function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
      return true;
    }
   else
    {
      alert("You have entered an invalid email address!");
      uemail.focus();
       return false;
    }
};
function validphone(phone){
    var phone_len = phone.value.length;
    if(phone_len<10 || phone_len>10 || phone_len == ""){
       alert("Invalid phone number");
       phone.focus();
       return false;
    }
    return true;
};

function validateadd(uadd)
{ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters))
    {
       return true;
    }
    else
    {
      alert('User address must have alphanumeric characters only');
      uadd.focus();
      return false;
    }
};

function validateDOB(udob){
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if(udob.value.match(pattern))
    {
      return true;
    }
   else
    {
      alert("You have entered an invalid DOB!");
      udob.focus();
      return false;
    }

};

function validgen(umgen,ufgen)
{
  x=0;
  if(umgen.checked) 
   {
     x++;
   } 
   if(ufgen.checked)
   {
     x++; 
    }
   if(x==0)
    {
       alert('Select Male/Female');
        umgen.focus();
        return false;
    }
    else
    {
     alert('Form Succesfully Submitted');
     window.location.reload()
    return true;
    }
};

